import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

export function EngineDisplacementCalculator() {
  const [bore, setBore] = useState('');
  const [stroke, setStroke] = useState('');
  const [cylinders, setCylinders] = useState('');
  const [result, setResult] = useState<{ displacementCubicInches: number; displacementLiters: number } | null>(null);
  const { toast } = useToast();

  const calculate = () => {
    if (!bore || !stroke || !cylinders) {
      toast({
        title: "Missing Values",
        description: "Please enter bore, stroke, and cylinder count.",
        variant: "destructive",
      });
      return;
    }

    const cylinderVolume = Math.PI * Math.pow(parseFloat(bore) / 2, 2) * parseFloat(stroke);
    const displacementCubicInches = cylinderVolume * parseInt(cylinders);
    const displacementLiters = displacementCubicInches * 0.0163871;
    
    setResult({
      displacementCubicInches: Math.round(displacementCubicInches * 100) / 100,
      displacementLiters: Math.round(displacementLiters * 100) / 100
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Engine Displacement Calculator</CardTitle>
        <CardDescription>
          Calculate engine displacement from bore, stroke, and cylinder count
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="bore">Bore (inches)</Label>
            <Input
              id="bore"
              type="number"
              step="0.01"
              value={bore}
              onChange={(e) => setBore(e.target.value)}
              placeholder="Enter bore diameter"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="stroke">Stroke (inches)</Label>
            <Input
              id="stroke"
              type="number"
              step="0.01"
              value={stroke}
              onChange={(e) => setStroke(e.target.value)}
              placeholder="Enter stroke length"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cylinders">Cylinders</Label>
            <Input
              id="cylinders"
              type="number"
              value={cylinders}
              onChange={(e) => setCylinders(e.target.value)}
              placeholder="Number of cylinders"
            />
          </div>
        </div>

        <Button onClick={calculate} className="w-full">
          Calculate Displacement
        </Button>

        {result && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Results:</h3>
            <div className="space-y-1">
              <p className="text-lg font-bold text-blue-700">{result.displacementCubicInches} cubic inches</p>
              <p className="text-lg font-bold text-blue-700">{result.displacementLiters} liters</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
