import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

export function FuelFlowConversionCalculator() {
  const [value, setValue] = useState('');
  const [fromUnit, setFromUnit] = useState<'lb_hr' | 'cc_min'>('lb_hr');
  const [result, setResult] = useState<{ convertedValue: number; toUnit: string } | null>(null);
  const { toast } = useToast();

  const calculate = () => {
    if (!value) {
      toast({
        title: "Missing Value",
        description: "Please enter a value to convert.",
        variant: "destructive",
      });
      return;
    }

    let convertedValue: number;
    let toUnit: string;
    
    if (fromUnit === "lb_hr") {
      // Convert lb/hr to cc/min
      // 1 lb/hr ≈ 7.5 cc/min (assuming gasoline density of ~0.72 g/cc)
      convertedValue = parseFloat(value) * 7.5;
      toUnit = "cc/min";
    } else {
      // Convert cc/min to lb/hr
      convertedValue = parseFloat(value) / 7.5;
      toUnit = "lb/hr";
    }
    
    setResult({
      convertedValue: Math.round(convertedValue * 100) / 100,
      toUnit
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Fuel Flow Conversion Calculator</CardTitle>
        <CardDescription>
          Convert between lb/hr and cc/min fuel flow rates (assumes gasoline density)
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="value">Value</Label>
            <Input
              id="value"
              type="number"
              step="0.1"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Enter value to convert"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="fromUnit">From Unit</Label>
            <Select value={fromUnit} onValueChange={(value: 'lb_hr' | 'cc_min') => setFromUnit(value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lb_hr">lb/hr (pounds per hour)</SelectItem>
                <SelectItem value="cc_min">cc/min (cubic centimeters per minute)</SelectItem>
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
            <p className="text-2xl font-bold text-blue-700">{result.convertedValue} {result.toUnit}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
