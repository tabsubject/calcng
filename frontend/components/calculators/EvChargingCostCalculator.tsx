import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

export function EvChargingCostCalculator() {
  const [batteryCapacity, setBatteryCapacity] = useState('');
  const [currentCharge, setCurrentCharge] = useState('');
  const [targetCharge, setTargetCharge] = useState('');
  const [electricityRate, setElectricityRate] = useState('');
  const [chargingEfficiency, setChargingEfficiency] = useState('90');
  const [result, setResult] = useState<{ chargingCost: number; energyNeeded: number } | null>(null);
  const { toast } = useToast();

  const calculate = () => {
    if (!batteryCapacity || !currentCharge || !targetCharge || !electricityRate || !chargingEfficiency) {
      toast({
        title: "Missing Values",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    const chargeNeeded = (parseFloat(targetCharge) - parseFloat(currentCharge)) / 100;
    const energyNeeded = (parseFloat(batteryCapacity) * chargeNeeded) / (parseFloat(chargingEfficiency) / 100);
    const chargingCost = energyNeeded * parseFloat(electricityRate);
    
    setResult({
      chargingCost: Math.round(chargingCost * 100) / 100,
      energyNeeded: Math.round(energyNeeded * 100) / 100
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Electric Vehicle Charging Cost Calculator</CardTitle>
        <CardDescription>
          Calculate the cost to charge your electric vehicle based on battery capacity and electricity rates
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="batteryCapacity">Battery Capacity (kWh)</Label>
            <Input
              id="batteryCapacity"
              type="number"
              step="0.1"
              value={batteryCapacity}
              onChange={(e) => setBatteryCapacity(e.target.value)}
              placeholder="Enter battery capacity"
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
              placeholder="Enter rate per kWh"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="currentCharge">Current Charge (%)</Label>
            <Input
              id="currentCharge"
              type="number"
              min="0"
              max="100"
              value={currentCharge}
              onChange={(e) => setCurrentCharge(e.target.value)}
              placeholder="Enter current charge %"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="targetCharge">Target Charge (%)</Label>
            <Input
              id="targetCharge"
              type="number"
              min="0"
              max="100"
              value={targetCharge}
              onChange={(e) => setTargetCharge(e.target.value)}
              placeholder="Enter target charge %"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="chargingEfficiency">Charging Efficiency (%)</Label>
            <Input
              id="chargingEfficiency"
              type="number"
              min="70"
              max="100"
              value={chargingEfficiency}
              onChange={(e) => setChargingEfficiency(e.target.value)}
              placeholder="Enter efficiency %"
            />
          </div>
        </div>

        <div className="text-sm text-gray-600">
          <p><strong>Typical charging efficiency:</strong> 85-95%</p>
        </div>

        <Button onClick={calculate} className="w-full">
          Calculate Charging Cost
        </Button>

        {result && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Results:</h3>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-blue-700">${result.chargingCost.toLocaleString()}</p>
              <p className="text-sm text-blue-600">{result.energyNeeded} kWh needed</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
