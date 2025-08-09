import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { EngineDisplacementCalculator } from '../../components/calculators/EngineDisplacementCalculator';

export function EngineDisplacementPage() {
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
          Engine Displacement Calculator
        </h1>
        <p className="text-gray-600">Calculate engine displacement from bore, stroke, and cylinder count</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <EngineDisplacementCalculator />
          
          <Card>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Formula</h3>
                <p className="text-sm bg-gray-100 p-3 rounded font-mono">
                  Displacement = π × (Bore/2)² × Stroke × Cylinders
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Explanation</h3>
                <p className="text-sm text-gray-600">
                  Engine displacement is the total volume of all cylinders in an engine. It's calculated by finding 
                  the volume of one cylinder and multiplying by the number of cylinders.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Key Terms</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>Bore:</strong> Cylinder diameter in inches</li>
                  <li>• <strong>Stroke:</strong> Piston travel distance in inches</li>
                  <li>• <strong>Displacement:</strong> Total engine volume</li>
                  <li>• Larger displacement typically = more power</li>
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
                <Link to="/engine/compression-ratio" className="block text-sm text-blue-600 hover:underline">
                  Compression Ratio Calculator
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
