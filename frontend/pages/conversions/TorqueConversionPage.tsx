import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TorqueConversionCalculator } from '../../components/calculators/TorqueConversionCalculator';

export function TorqueConversionPage() {
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
        <h1 className="text-3xl font-bold text-gray-900">Torque Unit Conversion Calculator</h1>
        <p className="text-gray-600">Convert between lb-ft, N⋅m, and lb-in</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <TorqueConversionCalculator />
          
          <Card>
            <CardHeader>
              <CardTitle>Conversion Formulas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">lb-ft to N⋅m</h3>
                <p className="text-sm bg-gray-100 p-3 rounded font-mono">
                  N⋅m = lb-ft × 1.35582
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">lb-in to N⋅m</h3>
                <p className="text-sm bg-gray-100 p-3 rounded font-mono">
                  N⋅m = lb-in × 0.112985
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Common Applications</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Engine torque specifications</li>
                  <li>• Wheel lug nut torque</li>
                  <li>• Bolt tightening specifications</li>
                  <li>• Performance comparisons</li>
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
                <Link to="/engine/torque" className="block text-sm text-blue-600 hover:underline">
                  Engine Torque Calculator
                </Link>
                <Link to="/engine/horsepower" className="block text-sm text-blue-600 hover:underline">
                  Engine Horsepower Calculator
                </Link>
                <Link to="/conversions/speed" className="block text-sm text-blue-600 hover:underline">
                  Speed Unit Conversions
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
