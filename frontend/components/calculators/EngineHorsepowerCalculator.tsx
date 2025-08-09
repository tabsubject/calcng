import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

export function EngineHorsepowerCalculator() {
  const [torque, setTorque] = useState('');
  const [rpm, setRpm] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const { toast } = useToast();

  const calculate = () => {
    if (!torque || !rpm) {
      toast({
        title: "Missing Values",
        description: "Please enter both torque and RPM values.",
        variant: "destructive",
      });
      return;
    }

    const horsepower = (parseFloat(torque) * parseFloat(rpm)) / 5252;
    setResult(Math.round(horsepower * 100) / 100);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Engine Horsepower Calculator</CardTitle>
        <CardDescription>
          Calculate engine horsepower from torque and RPM using the formula: HP = (Torque × RPM) ÷ 5252
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="torque">Torque (lb-ft)</Label>
            <Input
              id="torque"
              type="number"
              value={torque}
              onChange={(e) => setTorque(e.target.value)}
              placeholder="Enter torque in lb-ft"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="rpm">RPM</Label>
            <Input
              id="rpm"
              type="number"
              value={rpm}
              onChange={(e) => setRpm(e.target.value)}
              placeholder="Enter RPM"
            />
          </div>
        </div>

        <Button onClick={calculate} className="w-full">
          Calculate Horsepower
        </Button>

        {result !== null && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Result:</h3>
            <p className="text-2xl font-bold text-blue-700">{result} HP</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
