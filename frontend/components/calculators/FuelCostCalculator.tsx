import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

export function FuelCostCalculator() {
  const [distance, setDistance] = useState('');
  const [fuelEconomy, setFuelEconomy] = useState('');
  const [fuelPrice, setFuelPrice] = useState('');
  const [result, setResult] = useState<{ totalCost: number; gallonsUsed: number } | null>(null);
  const { toast } = useToast();

  const calculate = () => {
    if (!distance || !fuelEconomy || !fuelPrice) {
      toast({
        title: "Missing Values",
        description: "Please enter distance, fuel economy, and fuel price.",
        variant: "destructive",
      });
      return;
    }

    const gallonsUsed = parseFloat(distance) / parseFloat(fuelEconomy);
    const totalCost = gallonsUsed * parseFloat(fuelPrice);
    
    setResult({
      totalCost: Math.round(totalCost * 100) / 100,
      gallonsUsed: Math.round(gallonsUsed * 100) / 100
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Fuel Cost Calculator</CardTitle>
        <CardDescription>
          Calculate the total fuel cost for a trip based on distance, fuel economy, and fuel price
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="distance">Distance (miles)</Label>
            <Input
              id="distance"
              type="number"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              placeholder="Enter trip distance"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="fuelEconomy">Fuel Economy (MPG)</Label>
            <Input
              id="fuelEconomy"
              type="number"
              step="0.1"
              value={fuelEconomy}
              onChange={(e) => setFuelEconomy(e.target.value)}
              placeholder="Enter MPG"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="fuelPrice">Fuel Price ($/gallon)</Label>
            <Input
              id="fuelPrice"
              type="number"
              step="0.01"
              value={fuelPrice}
              onChange={(e) => setFuelPrice(e.target.value)}
              placeholder="Enter price per gallon"
            />
          </div>
        </div>

        <Button onClick={calculate} className="w-full">
          Calculate Fuel Cost
        </Button>

        {result && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Results:</h3>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-blue-700">${result.totalCost.toLocaleString()}</p>
              <p className="text-sm text-blue-600">{result.gallonsUsed} gallons needed</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
