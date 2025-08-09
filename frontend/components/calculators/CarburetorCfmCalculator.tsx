import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

export function CarburetorCfmCalculator() {
  const [displacement, setDisplacement] = useState('');
  const [rpm, setRpm] = useState('');
  const [volumetricEfficiency, setVolumetricEfficiency] = useState('85');
  const [result, setResult] = useState<number | null>(null);
  const { toast } = useToast();

  const calculate = () => {
    if (!displacement || !rpm || !volumetricEfficiency) {
      toast({
        title: "Missing Values",
        description: "Please enter displacement, RPM, and volumetric efficiency.",
        variant: "destructive",
      });
      return;
    }

    const cfm = (parseFloat(displacement) * parseFloat(rpm) * parseFloat(volumetricEfficiency)) / (3456 * 100);
    setResult(Math.round(cfm * 100) / 100);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Carburetor CFM Calculator</CardTitle>
        <CardDescription>
          Calculate required carburetor CFM based on engine displacement, RPM, and volumetric efficiency
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="displacement">Displacement (cubic inches)</Label>
            <Input
              id="displacement"
              type="number"
              value={displacement}
              onChange={(e) => setDisplacement(e.target.value)}
              placeholder="Enter displacement"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="rpm">Maximum RPM</Label>
            <Input
              id="rpm"
              type="number"
              value={rpm}
              onChange={(e) => setRpm(e.target.value)}
              placeholder="Enter max RPM"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="volumetricEfficiency">Volumetric Efficiency (%)</Label>
            <Input
              id="volumetricEfficiency"
              type="number"
              value={volumetricEfficiency}
              onChange={(e) => setVolumetricEfficiency(e.target.value)}
              placeholder="Enter efficiency %"
            />
          </div>
        </div>

        <div className="text-sm text-gray-600">
          <p><strong>Typical Volumetric Efficiency:</strong></p>
          <p>• Stock engines: 75-85%</p>
          <p>• Mild performance: 85-95%</p>
          <p>• High performance: 95-110%</p>
        </div>

        <Button onClick={calculate} className="w-full">
          Calculate CFM
        </Button>

        {result !== null && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Result:</h3>
            <p className="text-2xl font-bold text-blue-700">{result} CFM</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
