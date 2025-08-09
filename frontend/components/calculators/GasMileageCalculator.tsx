import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

export function GasMileageCalculator() {
  const [distance, setDistance] = useState('');
  const [fuelUsed, setFuelUsed] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const { toast } = useToast();

  const calculate = () => {
    if (!distance || !fuelUsed) {
      toast({
        title: "Missing Values",
        description: "Please enter both distance and fuel used.",
        variant: "destructive",
      });
      return;
    }

    const mpg = parseFloat(distance) / parseFloat(fuelUsed);
    setResult(Math.round(mpg * 100) / 100);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Gas Mileage Calculator</CardTitle>
        <CardDescription>
          Calculate your vehicle's fuel economy in miles per gallon (MPG)
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="distance">Distance Traveled (miles)</Label>
            <Input
              id="distance"
              type="number"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              placeholder="Enter miles driven"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="fuelUsed">Fuel Used (gallons)</Label>
            <Input
              id="fuelUsed"
              type="number"
              step="0.01"
              value={fuelUsed}
              onChange={(e) => setFuelUsed(e.target.value)}
              placeholder="Enter gallons used"
            />
          </div>
        </div>

        <Button onClick={calculate} className="w-full">
          Calculate MPG
        </Button>

        {result !== null && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Result:</h3>
            <p className="text-2xl font-bold text-blue-700">{result} MPG</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
