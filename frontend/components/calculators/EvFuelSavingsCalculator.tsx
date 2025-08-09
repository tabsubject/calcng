import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function EvFuelSavingsCalculator() {
  const [milesPerYear, setMilesPerYear] = useState('');
  const [gasMpg, setGasMpg] = useState('');
  const [gasPrice, setGasPrice] = useState('');
  const [evEfficiency, setEvEfficiency] = useState('');
  const [electricityRate, setElectricityRate] = useState('');
  const [result, setResult] = useState<{
    gasAnnualCost: number;
    evAnnualCost: number;
    annualSavings: number;
    gallonsSaved: number;
  } | null>(null);

  const calculate = () => {
    if (!milesPerYear || !gasMpg || !gasPrice || !evEfficiency || !electricityRate) {
      return;
    }

    const miles = parseFloat(milesPerYear);
    const gallonsUsed = miles / parseFloat(gasMpg);
    const gasAnnualCost = gallonsUsed * parseFloat(gasPrice);
    
    const kwhUsed = miles / parseFloat(evEfficiency);
    const evAnnualCost = kwhUsed * parseFloat(electricityRate);
    
    const annualSavings = gasAnnualCost - evAnnualCost;

    setResult({
      gasAnnualCost: Math.round(gasAnnualCost * 100) / 100,
      evAnnualCost: Math.round(evAnnualCost * 100) / 100,
      annualSavings: Math.round(annualSavings * 100) / 100,
      gallonsSaved: Math.round(gallonsUsed * 100) / 100,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Electric Vehicle Fuel Savings Calculator</CardTitle>
        <CardDescription>
          Compare annual fuel costs between gas vehicles and electric vehicles
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            <Label htmlFor="gasMpg">Gas Vehicle MPG</Label>
            <Input
              id="gasMpg"
              type="number"
              step="0.1"
              value={gasMpg}
              onChange={(e) => setGasMpg(e.target.value)}
              placeholder="Enter gas vehicle MPG"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="gasPrice">Gas Price ($/gallon)</Label>
            <Input
              id="gasPrice"
              type="number"
              step="0.01"
              value={gasPrice}
              onChange={(e) => setGasPrice(e.target.value)}
              placeholder="Enter gas price"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="evEfficiency">EV Efficiency (miles/kWh)</Label>
            <Input
              id="evEfficiency"
              type="number"
              step="0.1"
              value={evEfficiency}
              onChange={(e) => setEvEfficiency(e.target.value)}
              placeholder="Enter EV efficiency"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="electricityRate">Electricity Rate ($/kWh)</Label>
            <Input
              id="electricityRate"
              type="number"
              step="0.01"
              value={electricityRate}
              onChange={(e) => setElectricityRate(e.target.value)}
              placeholder="Enter electricity rate"
            />
          </div>
        </div>

        <div className="text-sm text-gray-600">
          <p><strong>Typical EV efficiency:</strong> 3-4 miles/kWh</p>
        </div>

        <Button onClick={calculate} className="w-full">
          Calculate Savings
        </Button>

        {result && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Annual Comparison:</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Gas vehicle cost:</span>
                <span className="font-bold">${result.gasAnnualCost}</span>
              </div>
              <div className="flex justify-between">
                <span>Electric vehicle cost:</span>
                <span className="font-bold">${result.evAnnualCost}</span>
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
