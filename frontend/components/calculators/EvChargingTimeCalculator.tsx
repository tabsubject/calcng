import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

export function EvChargingTimeCalculator() {
  const [batteryCapacity, setBatteryCapacity] = useState('');
  const [currentCharge, setCurrentCharge] = useState('');
  const [targetCharge, setTargetCharge] = useState('');
  const [chargingPower, setChargingPower] = useState('');
  const [chargingEfficiency, setChargingEfficiency] = useState('90');
  const [result, setResult] = useState<{ chargingTimeHours: number; chargingTimeMinutes: number } | null>(null);
  const { toast } = useToast();

  const calculate = () => {
    if (!batteryCapacity || !currentCharge || !targetCharge || !chargingPower || !chargingEfficiency) {
      toast({
        title: "Missing Values",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    const chargeNeeded = (parseFloat(targetCharge) - parseFloat(currentCharge)) / 100;
    const energyNeeded = (parseFloat(batteryCapacity) * chargeNeeded) / (parseFloat(chargingEfficiency) / 100);
    const chargingTimeHours = energyNeeded / parseFloat(chargingPower);
    const chargingTimeMinutes = chargingTimeHours * 60;
    
    setResult({
      chargingTimeHours: Math.round(chargingTimeHours * 100) / 100,
      chargingTimeMinutes: Math.round(chargingTimeMinutes)
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Electric Vehicle Charging Time Calculator</CardTitle>
        <CardDescription>
          Calculate how long it will take to charge your electric vehicle
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
            <Label htmlFor="chargingPower">Charging Power (kW)</Label>
            <Input
              id="chargingPower"
              type="number"
              step="0.1"
              value={chargingPower}
              onChange={(e) => setChargingPower(e.target.value)}
              placeholder="Enter charger power"
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
          <p><strong>Common charging powers:</strong></p>
          <p>• Level 1 (120V): 1.4 kW</p>
          <p>• Level 2 (240V): 3.3-22 kW</p>
          <p>• DC Fast Charging: 50-350 kW</p>
        </div>

        <Button onClick={calculate} className="w-full">
          Calculate Charging Time
        </Button>

        {result && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Results:</h3>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-blue-700">{result.chargingTimeHours} hours</p>
              <p className="text-lg font-bold text-blue-700">{result.chargingTimeMinutes} minutes</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
