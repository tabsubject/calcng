import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

export function FuelInjectorFlowCalculator() {
  const [horsepower, setHorsepower] = useState('');
  const [numberOfInjectors, setNumberOfInjectors] = useState('');
  const [bsfc, setBsfc] = useState('0.5');
  const [dutyCycle, setDutyCycle] = useState('80');
  const [result, setResult] = useState<{ flowRateLbHr: number; flowRateCcMin: number } | null>(null);
  const { toast } = useToast();

  const calculate = () => {
    if (!horsepower || !numberOfInjectors || !bsfc || !dutyCycle) {
      toast({
        title: "Missing Values",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    const totalFuelFlow = parseFloat(horsepower) * parseFloat(bsfc);
    const flowPerInjector = totalFuelFlow / parseInt(numberOfInjectors);
    const flowRateLbHr = flowPerInjector / (parseFloat(dutyCycle) / 100);
    const flowRateCcMin = flowRateLbHr * 7.5; // Convert to cc/min
    
    setResult({
      flowRateLbHr: Math.round(flowRateLbHr * 100) / 100,
      flowRateCcMin: Math.round(flowRateCcMin * 100) / 100
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Fuel Injector Flow Rate Calculator</CardTitle>
        <CardDescription>
          Calculate required fuel injector flow rate based on horsepower and engine specifications
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
            <Label htmlFor="numberOfInjectors">Number of Injectors</Label>
            <Input
              id="numberOfInjectors"
              type="number"
              value={numberOfInjectors}
              onChange={(e) => setNumberOfInjectors(e.target.value)}
              placeholder="Enter number of injectors"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bsfc">BSFC (Brake Specific Fuel Consumption)</Label>
            <Input
              id="bsfc"
              type="number"
              step="0.01"
              value={bsfc}
              onChange={(e) => setBsfc(e.target.value)}
              placeholder="Enter BSFC"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="dutyCycle">Duty Cycle (%)</Label>
            <Input
              id="dutyCycle"
              type="number"
              value={dutyCycle}
              onChange={(e) => setDutyCycle(e.target.value)}
              placeholder="Enter duty cycle %"
            />
          </div>
        </div>

        <div className="text-sm text-gray-600">
          <p><strong>Typical BSFC values:</strong></p>
          <p>• Naturally aspirated: 0.45-0.55</p>
          <p>• Turbocharged: 0.55-0.65</p>
          <p>• Supercharged: 0.60-0.70</p>
        </div>

        <Button onClick={calculate} className="w-full">
          Calculate Flow Rate
        </Button>

        {result && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Results:</h3>
            <div className="space-y-1">
              <p className="text-lg font-bold text-blue-700">{result.flowRateLbHr} lb/hr</p>
              <p className="text-lg font-bold text-blue-700">{result.flowRateCcMin} cc/min</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
