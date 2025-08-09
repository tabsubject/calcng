import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

export function SpeedConversionCalculator() {
  const [value, setValue] = useState('');
  const [fromUnit, setFromUnit] = useState('mph');
  const [toUnit, setToUnit] = useState('kmh');
  const [result, setResult] = useState<{ convertedValue: number; formula: string } | null>(null);
  const { toast } = useToast();

  const convertSpeed = (value: number, from: string, to: string): { convertedValue: number; formula: string } => {
    const conversions: { [key: string]: { factor: number; formula: string } } = {
      "mph_to_kmh": { factor: 1.60934, formula: "mph × 1.60934" },
      "kmh_to_mph": { factor: 0.621371, formula: "km/h × 0.621371" },
      "mph_to_ms": { factor: 0.44704, formula: "mph × 0.44704" },
      "ms_to_mph": { factor: 2.23694, formula: "m/s × 2.23694" },
      "kmh_to_ms": { factor: 0.277778, formula: "km/h × 0.277778" },
      "ms_to_kmh": { factor: 3.6, formula: "m/s × 3.6" }
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

    const conversionResult = convertSpeed(parseFloat(value), fromUnit, toUnit);
    setResult({
      convertedValue: Math.round(conversionResult.convertedValue * 10000) / 10000,
      formula: conversionResult.formula
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Speed Unit Conversion Calculator</CardTitle>
        <CardDescription>
          Convert between different speed units (MPH, KM/H, M/S)
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
              placeholder="Enter speed value"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="fromUnit">From</Label>
            <Select value={fromUnit} onValueChange={setFromUnit}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mph">MPH (Miles per hour)</SelectItem>
                <SelectItem value="kmh">KM/H (Kilometers per hour)</SelectItem>
                <SelectItem value="ms">M/S (Meters per second)</SelectItem>
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
                <SelectItem value="mph">MPH (Miles per hour)</SelectItem>
                <SelectItem value="kmh">KM/H (Kilometers per hour)</SelectItem>
                <SelectItem value="ms">M/S (Meters per second)</SelectItem>
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
