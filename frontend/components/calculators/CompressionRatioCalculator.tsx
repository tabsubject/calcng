import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

export function CompressionRatioCalculator() {
  const [bore, setBore] = useState('');
  const [stroke, setStroke] = useState('');
  const [deckHeight, setDeckHeight] = useState('');
  const [headGasketThickness, setHeadGasketThickness] = useState('');
  const [pistonDomeVolume, setPistonDomeVolume] = useState('');
  const [headCombustionChamberVolume, setHeadCombustionChamberVolume] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const { toast } = useToast();

  const calculate = () => {
    if (!bore || !stroke || !deckHeight || !headGasketThickness || !pistonDomeVolume || !headCombustionChamberVolume) {
      toast({
        title: "Missing Values",
        description: "Please fill in all fields to calculate compression ratio.",
        variant: "destructive",
      });
      return;
    }

    const cylinderVolume = Math.PI * Math.pow(parseFloat(bore) / 2, 2) * parseFloat(stroke) * 16.387; // convert to cc
    const deckVolume = Math.PI * Math.pow(parseFloat(bore) / 2, 2) * parseFloat(deckHeight) * 16.387; // convert to cc
    const gasketVolume = Math.PI * Math.pow(parseFloat(bore) / 2, 2) * parseFloat(headGasketThickness) * 16.387; // convert to cc
    
    const totalCombustionChamberVolume = parseFloat(headCombustionChamberVolume) + deckVolume + gasketVolume - parseFloat(pistonDomeVolume);
    const compressionRatio = (cylinderVolume + totalCombustionChamberVolume) / totalCombustionChamberVolume;
    
    setResult(Math.round(compressionRatio * 100) / 100);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Engine Compression Ratio Calculator</CardTitle>
        <CardDescription>
          Calculate compression ratio from engine specifications. Use negative values for dished pistons.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            <Label htmlFor="deckHeight">Deck Height (inches)</Label>
            <Input
              id="deckHeight"
              type="number"
              step="0.001"
              value={deckHeight}
              onChange={(e) => setDeckHeight(e.target.value)}
              placeholder="Enter deck height"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="headGasketThickness">Head Gasket Thickness (inches)</Label>
            <Input
              id="headGasketThickness"
              type="number"
              step="0.001"
              value={headGasketThickness}
              onChange={(e) => setHeadGasketThickness(e.target.value)}
              placeholder="Enter gasket thickness"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="pistonDomeVolume">Piston Dome Volume (cc)</Label>
            <Input
              id="pistonDomeVolume"
              type="number"
              step="0.1"
              value={pistonDomeVolume}
              onChange={(e) => setPistonDomeVolume(e.target.value)}
              placeholder="Enter dome volume (negative for dish)"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="headCombustionChamberVolume">Head Chamber Volume (cc)</Label>
            <Input
              id="headCombustionChamberVolume"
              type="number"
              step="0.1"
              value={headCombustionChamberVolume}
              onChange={(e) => setHeadCombustionChamberVolume(e.target.value)}
              placeholder="Enter chamber volume"
            />
          </div>
        </div>

        <Button onClick={calculate} className="w-full">
          Calculate Compression Ratio
        </Button>

        {result !== null && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Result:</h3>
            <p className="text-2xl font-bold text-blue-700">{result}:1</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
