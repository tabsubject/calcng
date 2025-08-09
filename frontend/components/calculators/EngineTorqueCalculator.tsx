import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

export function EngineTorqueCalculator() {
  const [horsepower, setHorsepower] = useState('');
  const [rpm, setRpm] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const { toast } = useToast();

  const calculate = () => {
    if (!horsepower || !rpm) {
      toast({
        title: "Missing Values",
        description: "Please enter both horsepower and RPM values.",
        variant: "destructive",
      });
      return;
    }

    const torque = (parseFloat(horsepower) * 5252) / parseFloat(rpm);
    setResult(Math.round(torque * 100) / 100);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Engine Torque Calculator</CardTitle>
        <CardDescription>
          Calculate engine torque from horsepower and RPM using the formula: Torque = (HP × 5252) ÷ RPM
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="horsepower">Horsepower</Label>
            <Input
              id="horsepower"
              type="number"
              value={horsepower}
              onChange={(e) => setHorsepower(e.target.value)}
              placeholder="Enter horsepower"
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
          Calculate Torque
        </Button>

        {result !== null && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Result:</h3>
            <p className="text-2xl font-bold text-blue-700">{result} lb-ft</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
