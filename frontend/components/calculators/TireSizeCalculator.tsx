import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

export function TireSizeCalculator() {
  const [width, setWidth] = useState('');
  const [aspectRatio, setAspectRatio] = useState('');
  const [wheelDiameter, setWheelDiameter] = useState('');
  const [result, setResult] = useState<{
    sidewallHeight: number;
    tireDiameter: number;
    circumference: number;
    revolutionsPerMile: number;
  } | null>(null);
  const { toast } = useToast();

  const calculate = () => {
    if (!width || !aspectRatio || !wheelDiameter) {
      toast({
        title: "Missing Values",
        description: "Please enter tire width, aspect ratio, and wheel diameter.",
        variant: "destructive",
      });
      return;
    }

    const sidewallHeight = parseFloat(width) * (parseFloat(aspectRatio) / 100);
    const tireDiameter = parseFloat(wheelDiameter) + (2 * sidewallHeight / 25.4); // convert mm to inches
    const circumference = Math.PI * tireDiameter;
    const revolutionsPerMile = 63360 / circumference; // 63360 inches in a mile
    
    setResult({
      sidewallHeight: Math.round(sidewallHeight * 100) / 100,
      tireDiameter: Math.round(tireDiameter * 100) / 100,
      circumference: Math.round(circumference * 100) / 100,
      revolutionsPerMile: Math.round(revolutionsPerMile)
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tire Size Calculator</CardTitle>
        <CardDescription>
          Calculate tire specifications from tire size markings (e.g., 225/60R16)
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="width">Tire Width (mm)</Label>
            <Input
              id="width"
              type="number"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              placeholder="e.g., 225"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="aspectRatio">Aspect Ratio (%)</Label>
            <Input
              id="aspectRatio"
              type="number"
              value={aspectRatio}
              onChange={(e) => setAspectRatio(e.target.value)}
              placeholder="e.g., 60"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="wheelDiameter">Wheel Diameter (inches)</Label>
            <Input
              id="wheelDiameter"
              type="number"
              value={wheelDiameter}
              onChange={(e) => setWheelDiameter(e.target.value)}
              placeholder="e.g., 16"
            />
          </div>
        </div>

        <div className="text-sm text-gray-600">
          <p><strong>Example:</strong> For tire size 225/60R16:</p>
          <p>• Width: 225mm</p>
          <p>• Aspect Ratio: 60%</p>
          <p>• Wheel Diameter: 16 inches</p>
        </div>

        <Button onClick={calculate} className="w-full">
          Calculate Tire Specifications
        </Button>

        {result && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Results:</h3>
            <div className="space-y-1">
              <p>Sidewall Height: <span className="font-bold">{result.sidewallHeight} mm</span></p>
              <p>Overall Tire Diameter: <span className="font-bold">{result.tireDiameter} inches</span></p>
              <p>Circumference: <span className="font-bold">{result.circumference} inches</span></p>
              <p>Revolutions per Mile: <span className="font-bold">{result.revolutionsPerMile}</span></p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
