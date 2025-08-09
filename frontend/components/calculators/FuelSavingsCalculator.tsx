import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function FuelSavingsCalculator() {
  const [currentMpg, setCurrentMpg] = useState('');
  const [newMpg, setNewMpg] = useState('');
  const [milesPerYear, setMilesPerYear] = useState('');
  const [fuelPrice, setFuelPrice] = useState('');
  const [result, setResult] = useState<{
    currentAnnualCost: number;
    newAnnualCost: number;
    annualSavings: number;
    gallonsSaved: number;
  } | null>(null);

  const calculate = () => {
    if (!currentMpg || !newMpg || !milesPerYear || !fuelPrice) {
      return;
    }

    const currentGallons = parseFloat(milesPerYear) / parseFloat(currentMpg);
    const newGallons = parseFloat(milesPerYear) / parseFloat(newMpg);
    const currentAnnualCost = currentGallons * parseFloat(fuelPrice);
    const newAnnualCost = newGallons * parseFloat(fuelPrice);
    const annualSavings = currentAnnualCost - newAnnualCost;
    const gallonsSaved = currentGallons - newGallons;

    setResult({
      currentAnnualCost: Math.round(currentAnnualCost * 100) / 100,
      newAnnualCost: Math.round(newAnnualCost * 100) / 100,
      annualSavings: Math.round(annualSavings * 100) / 100,
      gallonsSaved: Math.round(gallonsSaved * 100) / 100,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Fuel Savings Calculator</CardTitle>
        <CardDescription>
          Compare fuel costs between different vehicles or fuel economy improvements
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="currentMpg">Current MPG</Label>
            <Input
              id="currentMpg"
              type="number"
              step="0.1"
              value={currentMpg}
              onChange={(e) => setCurrentMpg(e.target.value)}
              placeholder="Enter current MPG"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="newMpg">New MPG</Label>
            <Input
              id="newMpg"
              type="number"
              step="0.1"
              value={newMpg}
              onChange={(e) => setNewMpg(e.target.value)}
              placeholder="Enter new MPG"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="milesPerYear">Miles Per Year</Label>
            <Input
              id="milesPerYear"
              type="number"
              value={milesPerYear}
              onChange={(e) => setMilesPerYear(e.target.value)}
              placeholder="Enter annual miles"
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
              placeholder="Enter fuel price"
            />
          </div>
        </div>

        <Button onClick={calculate} className="w-full">
          Calculate Savings
        </Button>

        {result && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Annual Comparison:</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Current annual cost:</span>
                <span className="font-bold">${result.currentAnnualCost}</span>
              </div>
              <div className="flex justify-between">
                <span>New annual cost:</span>
                <span className="font-bold">${result.newAnnualCost}</span>
              </div>
              <div className="flex justify-between text-green-700 border-t pt-2">
                <span>Annual savings:</span>
                <span className="font-bold">${result.annualSavings}</span>
              </div>
              <div className="flex justify-between text-green-700">
                <span>Gallons saved:</span>
                <span className="font-bold">{result.gallonsSaved}</span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
