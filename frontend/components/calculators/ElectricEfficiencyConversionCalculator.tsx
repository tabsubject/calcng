import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

export function ElectricEfficiencyConversionCalculator() {
  const [value, setValue] = useState('');
  const [fromUnit, setFromUnit] = useState('miles_kwh');
  const [toUnit, setToUnit] = useState('kwh_100mi');
  const [result, setResult] = useState<{ convertedValue: number; formula: string } | null>(null);
  const { toast } = useToast();

  const convertElectricEfficiency = (value: number, from: string, to: string): { convertedValue: number; formula: string } => {
    const formulas: { [key: string]: string } = {
      "miles_kwh_to_kwh_100mi": "100 ÷ miles/kWh",
      "kwh_100mi_to_miles_kwh": "100 ÷ kWh/100mi",
      "miles_kwh_to_km_kwh": "miles/kWh × 1.60934",
      "km_kwh_to_miles_kwh": "km/kWh ÷ 1.60934"
    };

    let convertedValue: number;
    const key = `${from}_to_${to}`;
    
    if (from === "miles_kwh" && to === "kwh_100mi") {
      convertedValue = 100 / value;
    } else if (from === "kwh_100mi" && to === "miles_kwh") {
      convertedValue = 100 / value;
    } else if (from === "miles_kwh" && to === "km_kwh") {
      convertedValue = value * 1.60934;
    } else if (from === "km_kwh" && to === "miles_kwh") {
      convertedValue = value / 1.60934;
    } else {
      convertedValue = value;
    }
    
    return {
      convertedValue,
      formula: formulas[key] || "Direct conversion"
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

    const conversionResult = convertElectricEfficiency(parseFloat(value), fromUnit, toUnit);
    setResult({
      convertedValue: Math.round(conversionResult.convertedValue * 10000) / 10000,
      formula: conversionResult.formula
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Electric Car Efficiency Unit Conversion Calculator</CardTitle>
        <CardDescription>
          Convert between different electric vehicle efficiency units
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
              placeholder="Enter efficiency value"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="fromUnit">From</Label>
            <Select value={fromUnit} onValueChange={setFromUnit}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="miles_kwh">Miles/kWh</SelectItem>
                <SelectItem value="kwh_100mi">kWh/100mi</SelectItem>
                <SelectItem value="km_kwh">km/kWh</SelectItem>
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
                <SelectItem value="miles_kwh">Miles/kWh</SelectItem>
                <SelectItem value="kwh_100mi">kWh/100mi</SelectItem>
                <SelectItem value="km_kwh">km/kWh</SelectItem>
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
