import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

export function FuelEconomyConversionCalculator() {
  const [value, setValue] = useState('');
  const [fromUnit, setFromUnit] = useState('mpg');
  const [toUnit, setToUnit] = useState('l100km');
  const [result, setResult] = useState<{ convertedValue: number; formula: string } | null>(null);
  const { toast } = useToast();

  const convertFuelEconomy = (value: number, from: string, to: string): { convertedValue: number; formula: string } => {
    const formulas: { [key: string]: string } = {
      "mpg_to_l100km": "235.214 ÷ mpg",
      "l100km_to_mpg": "235.214 ÷ L/100km",
      "mpg_to_kmpl": "mpg × 0.425144",
      "kmpl_to_mpg": "km/L ÷ 0.425144"
    };

    let convertedValue: number;
    const key = `${from}_to_${to}`;
    
    if (from === "mpg" && to === "l100km") {
      convertedValue = 235.214 / value;
    } else if (from === "l100km" && to === "mpg") {
      convertedValue = 235.214 / value;
    } else if (from === "mpg" && to === "kmpl") {
      convertedValue = value * 0.425144;
    } else if (from === "kmpl" && to === "mpg") {
      convertedValue = value / 0.425144;
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

    const conversionResult = convertFuelEconomy(parseFloat(value), fromUnit, toUnit);
    setResult({
      convertedValue: Math.round(conversionResult.convertedValue * 10000) / 10000,
      formula: conversionResult.formula
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Fuel Economy Unit Conversion Calculator</CardTitle>
        <CardDescription>
          Convert between different fuel economy units (MPG, L/100km, km/L)
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
              placeholder="Enter fuel economy value"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="fromUnit">From</Label>
            <Select value={fromUnit} onValueChange={setFromUnit}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mpg">MPG (Miles per gallon)</SelectItem>
                <SelectItem value="l100km">L/100km (Liters per 100 km)</SelectItem>
                <SelectItem value="kmpl">km/L (Kilometers per liter)</SelectItem>
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
                <SelectItem value="mpg">MPG (Miles per gallon)</SelectItem>
                <SelectItem value="l100km">L/100km (Liters per 100 km)</SelectItem>
                <SelectItem value="kmpl">km/L (Kilometers per liter)</SelectItem>
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
