import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

export function TorqueConversionCalculator() {
  const [value, setValue] = useState('');
  const [fromUnit, setFromUnit] = useState('lbft');
  const [toUnit, setToUnit] = useState('nm');
  const [result, setResult] = useState<{ convertedValue: number; formula: string } | null>(null);
  const { toast } = useToast();

  const convertTorque = (value: number, from: string, to: string): { convertedValue: number; formula: string } => {
    const conversions: { [key: string]: { factor: number; formula: string } } = {
      "lbft_to_nm": { factor: 1.35582, formula: "lb-ft × 1.35582" },
      "nm_to_lbft": { factor: 0.737562, formula: "N⋅m × 0.737562" },
      "lbin_to_nm": { factor: 0.112985, formula: "lb-in × 0.112985" },
      "nm_to_lbin": { factor: 8.85075, formula: "N⋅m × 8.85075" }
    };
    
    const key = `${from}_to_${to}`;
    const conversion = conversions[key];
    
    if (!conversion) {
      return { convertedValue: value, formula: "Direct conversion" };
    }
    
    return {
      convertedValue: value * conversion.factor,
      formula: conversion.formula
    };
  };

  const calculate = () => {
    if (!value) {
      toast({
        title: "Missing Value",
        description: "Please enter a value to convert.",
        variant: "destructive",
      });
      return;
    }

    const conversionResult = convertTorque(parseFloat(value), fromUnit, toUnit);
    setResult({
      convertedValue: Math.round(conversionResult.convertedValue * 10000) / 10000,
      formula: conversionResult.formula
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Torque Unit Conversion Calculator</CardTitle>
        <CardDescription>
          Convert between different torque units (lb-ft, N⋅m, lb-in)
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="value">Value</Label>
            <Input
              id="value"
              type="number"
              step="0.1"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Enter torque value"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="fromUnit">From</Label>
            <Select value={fromUnit} onValueChange={setFromUnit}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lbft">lb-ft (Pound-feet)</SelectItem>
                <SelectItem value="nm">N⋅m (Newton-meters)</SelectItem>
                <SelectItem value="lbin">lb-in (Pound-inches)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="toUnit">To</Label>
            <Select value={toUnit} onValueChange={setToUnit}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lbft">lb-ft (Pound-feet)</SelectItem>
                <SelectItem value="nm">N⋅m (Newton-meters)</SelectItem>
                <SelectItem value="lbin">lb-in (Pound-inches)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button onClick={calculate} className="w-full">
          Convert
        </Button>

        {result && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Result:</h3>
            <p className="text-2xl font-bold text-blue-700">{result.convertedValue}</p>
            <p className="text-sm text-blue-600 mt-1">Formula: {result.formula}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
