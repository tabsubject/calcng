import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

export function SpeedometerErrorCalculator() {
  const [originalTireWidth, setOriginalTireWidth] = useState('');
  const [originalAspectRatio, setOriginalAspectRatio] = useState('');
  const [originalWheelDiameter, setOriginalWheelDiameter] = useState('');
  const [newTireWidth, setNewTireWidth] = useState('');
  const [newAspectRatio, setNewAspectRatio] = useState('');
  const [newWheelDiameter, setNewWheelDiameter] = useState('');
  const [speedometerReading, setSpeedometerReading] = useState('');
  const [result, setResult] = useState<{
    actualSpeed: number;
    speedDifference: number;
    percentageError: number;
  } | null>(null);
  const { toast } = useToast();

  const calculate = () => {
    if (!originalTireWidth || !originalAspectRatio || !originalWheelDiameter || 
        !newTireWidth || !newAspectRatio || !newWheelDiameter || !speedometerReading) {
      toast({
        title: "Missing Values",
        description: "Please fill in all tire specifications and speedometer reading.",
        variant: "destructive",
      });
      return;
    }

    // Calculate original tire diameter
    const originalSidewallHeight = parseFloat(originalTireWidth) * (parseFloat(originalAspectRatio) / 100);
    const originalTireDiameter = parseFloat(originalWheelDiameter) + (2 * originalSidewallHeight / 25.4);
    
    // Calculate new tire diameter
    const newSidewallHeight = parseFloat(newTireWidth) * (parseFloat(newAspectRatio) / 100);
    const newTireDiameter = parseFloat(newWheelDiameter) + (2 * newSidewallHeight / 25.4);
    
    // Calculate actual speed
    const actualSpeed = parseFloat(speedometerReading) * (newTireDiameter / originalTireDiameter);
    const speedDifference = actualSpeed - parseFloat(speedometerReading);
    const percentageError = (speedDifference / parseFloat(speedometerReading)) * 100;
    
    setResult({
      actualSpeed: Math.round(actualSpeed * 100) / 100,
      speedDifference: Math.round(speedDifference * 100) / 100,
      percentageError: Math.round(percentageError * 100) / 100
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Speedometer Error Calculator</CardTitle>
        <CardDescription>
          Calculate speedometer error when changing tire sizes
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Original Tire Size</h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="space-y-2">
                <Label htmlFor="originalTireWidth">Width (mm)</Label>
                <Input
                  id="originalTireWidth"
                  type="number"
                  value={originalTireWidth}
                  onChange={(e) => setOriginalTireWidth(e.target.value)}
                  placeholder="225"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="originalAspectRatio">Aspect (%)</Label>
                <Input
                  id="originalAspectRatio"
                  type="number"
                  value={originalAspectRatio}
                  onChange={(e) => setOriginalAspectRatio(e.target.value)}
                  placeholder="60"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="originalWheelDiameter">Wheel (in)</Label>
                <Input
                  id="originalWheelDiameter"
                  type="number"
                  value={originalWheelDiameter}
                  onChange={(e) => setOriginalWheelDiameter(e.target.value)}
                  placeholder="16"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">New Tire Size</h3>
            <div className="grid grid-cols-3 gap-2">
              <div className="space-y-2">
                <Label htmlFor="newTireWidth">Width (mm)</Label>
                <Input
                  id="newTireWidth"
                  type="number"
                  value={newTireWidth}
                  onChange={(e) => setNewTireWidth(e.target.value)}
                  placeholder="245"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newAspectRatio">Aspect (%)</Label>
                <Input
                  id="newAspectRatio"
                  type="number"
                  value={newAspectRatio}
                  onChange={(e) => setNewAspectRatio(e.target.value)}
                  placeholder="50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newWheelDiameter">Wheel (in)</Label>
                <Input
                  id="newWheelDiameter"
                  type="number"
                  value={newWheelDiameter}
                  onChange={(e) => setNewWheelDiameter(e.target.value)}
                  placeholder="17"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="speedometerReading">Speedometer Reading (mph)</Label>
          <Input
            id="speedometerReading"
            type="number"
            value={speedometerReading}
            onChange={(e) => setSpeedometerReading(e.target.value)}
            placeholder="Enter speedometer reading"
          />
        </div>

        <Button onClick={calculate} className="w-full">
          Calculate Speedometer Error
        </Button>

        {result && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Results:</h3>
            <div className="space-y-1">
              <p>Actual Speed: <span className="font-bold text-2xl text-blue-700">{result.actualSpeed} mph</span></p>
              <p>Speed Difference: <span className="font-bold">{result.speedDifference > 0 ? '+' : ''}{result.speedDifference} mph</span></p>
              <p>Percentage Error: <span className="font-bold">{result.percentageError > 0 ? '+' : ''}{result.percentageError}%</span></p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
