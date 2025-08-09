import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function TireSizeComparisonCalculator() {
  const [tire1Width, setTire1Width] = useState('');
  const [tire1AspectRatio, setTire1AspectRatio] = useState('');
  const [tire1WheelDiameter, setTire1WheelDiameter] = useState('');
  const [tire2Width, setTire2Width] = useState('');
  const [tire2AspectRatio, setTire2AspectRatio] = useState('');
  const [tire2WheelDiameter, setTire2WheelDiameter] = useState('');
  const [result, setResult] = useState<{
    tire1Diameter: number;
    tire2Diameter: number;
    diameterDifference: number;
    percentageDifference: number;
    tire1Circumference: number;
    tire2Circumference: number;
  } | null>(null);

  const calculateTireSpecs = (width: number, aspectRatio: number, wheelDiameter: number) => {
    const sidewallHeight = width * (aspectRatio / 100);
    const tireDiameter = wheelDiameter + (2 * sidewallHeight / 25.4); // convert mm to inches
    const circumference = Math.PI * tireDiameter;
    return { tireDiameter, circumference };
  };

  const calculate = () => {
    if (!tire1Width || !tire1AspectRatio || !tire1WheelDiameter || 
        !tire2Width || !tire2AspectRatio || !tire2WheelDiameter) {
      return;
    }

    const tire1 = calculateTireSpecs(
      parseFloat(tire1Width),
      parseFloat(tire1AspectRatio),
      parseFloat(tire1WheelDiameter)
    );

    const tire2 = calculateTireSpecs(
      parseFloat(tire2Width),
      parseFloat(tire2AspectRatio),
      parseFloat(tire2WheelDiameter)
    );

    const diameterDifference = tire2.tireDiameter - tire1.tireDiameter;
    const percentageDifference = (diameterDifference / tire1.tireDiameter) * 100;

    setResult({
      tire1Diameter: Math.round(tire1.tireDiameter * 100) / 100,
      tire2Diameter: Math.round(tire2.tireDiameter * 100) / 100,
      diameterDifference: Math.round(diameterDifference * 100) / 100,
      percentageDifference: Math.round(percentageDifference * 100) / 100,
      tire1Circumference: Math.round(tire1.circumference * 100) / 100,
      tire2Circumference: Math.round(tire2.circumference * 100) / 100,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tire Size Comparison Calculator</CardTitle>
        <CardDescription>
          Compare specifications between two different tire sizes
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Tire Size 1</h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="space-y-2">
                <Label htmlFor="tire1Width">Width (mm)</Label>
                <Input
                  id="tire1Width"
                  type="number"
                  value={tire1Width}
                  onChange={(e) => setTire1Width(e.target.value)}
                  placeholder="225"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tire1AspectRatio">Aspect (%)</Label>
                <Input
                  id="tire1AspectRatio"
                  type="number"
                  value={tire1AspectRatio}
                  onChange={(e) => setTire1AspectRatio(e.target.value)}
                  placeholder="60"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tire1WheelDiameter">Wheel (in)</Label>
                <Input
                  id="tire1WheelDiameter"
                  type="number"
                  value={tire1WheelDiameter}
                  onChange={(e) => setTire1WheelDiameter(e.target.value)}
                  placeholder="16"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Tire Size 2</h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="space-y-2">
                <Label htmlFor="tire2Width">Width (mm)</Label>
                <Input
                  id="tire2Width"
                  type="number"
                  value={tire2Width}
                  onChange={(e) => setTire2Width(e.target.value)}
                  placeholder="245"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tire2AspectRatio">Aspect (%)</Label>
                <Input
                  id="tire2AspectRatio"
                  type="number"
                  value={tire2AspectRatio}
                  onChange={(e) => setTire2AspectRatio(e.target.value)}
                  placeholder="50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tire2WheelDiameter">Wheel (in)</Label>
                <Input
                  id="tire2WheelDiameter"
                  type="number"
                  value={tire2WheelDiameter}
                  onChange={(e) => setTire2WheelDiameter(e.target.value)}
                  placeholder="17"
                />
              </div>
            </div>
          </div>
        </div>

        <Button onClick={calculate} className="w-full">
          Compare Tire Sizes
        </Button>

        {result && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-4">Comparison Results:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium">Tire Size 1</h4>
                <p>Diameter: <span className="font-bold">{result.tire1Diameter} inches</span></p>
                <p>Circumference: <span className="font-bold">{result.tire1Circumference} inches</span></p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Tire Size 2</h4>
                <p>Diameter: <span className="font-bold">{result.tire2Diameter} inches</span></p>
                <p>Circumference: <span className="font-bold">{result.tire2Circumference} inches</span></p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t">
              <p>Diameter Difference: <span className="font-bold">{result.diameterDifference > 0 ? '+' : ''}{result.diameterDifference} inches</span></p>
              <p>Percentage Difference: <span className="font-bold">{result.percentageDifference > 0 ? '+' : ''}{result.percentageDifference}%</span></p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
