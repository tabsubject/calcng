import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CompressionRatioCalculator } from '../../components/calculators/CompressionRatioCalculator';

export function CompressionRatioPage() {
  return (
    <div className="space-y-6">
      <div>
        <Link to="/">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>

      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
          Compression Ratio Calculator
        </h1>
        <p className="text-gray-600">Calculate engine compression ratio from engine specifications</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <CompressionRatioCalculator />
          
          <Card>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Formula</h3>
                <p className="text-sm bg-gray-100 p-3 rounded font-mono">
                  CR = (Cylinder Volume + Combustion Chamber Volume) ÷ Combustion Chamber Volume
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Explanation</h3>
                <p className="text-sm text-gray-600">
                  Compression ratio is the ratio of the cylinder volume when the piston is at the bottom 
                  of its stroke to the volume when the piston is at the top of its stroke.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Typical Ratios</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>Regular gas:</strong> 8.5:1 to 10.5:1</li>
                  <li>• <strong>Premium gas:</strong> 10.5:1 to 12:1</li>
                  <li>• <strong>Race gas:</strong> 12:1 and higher</li>
                  <li>• Higher ratio = more power but requires higher octane</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Related Calculators</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Link to="/engine/displacement" className="block text-sm text-blue-600 hover:underline">
                  Engine Displacement Calculator
                </Link>
                <Link to="/engine/horsepower" className="block text-sm text-blue-600 hover:underline">
                  Engine Horsepower Calculator
                </Link>
                <Link to="/engine/carburetor-cfm" className="block text-sm text-blue-600 hover:underline">
                  Carburetor CFM Calculator
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
