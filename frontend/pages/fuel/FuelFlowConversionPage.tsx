import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FuelFlowConversionCalculator } from '../../components/calculators/FuelFlowConversionCalculator';

export function FuelFlowConversionPage() {
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
        <h1 className="text-3xl font-bold text-gray-900">Fuel Flow Conversion Calculator</h1>
        <p className="text-gray-600">Convert between lb/hr and cc/min fuel flow rates</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <FuelFlowConversionCalculator />
          
          <Card>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Conversion Factor</h3>
                <p className="text-sm bg-gray-100 p-3 rounded font-mono">
                  1 lb/hr ≈ 7.5 cc/min (for gasoline)
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Explanation</h3>
                <p className="text-sm text-gray-600">
                  Fuel flow rates are commonly expressed in two units: pounds per hour (lb/hr) and 
                  cubic centimeters per minute (cc/min). This conversion assumes gasoline with a 
                  density of approximately 0.72 g/cc.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Common Applications</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Fuel injector specifications</li>
                  <li>• Fuel pump sizing</li>
                  <li>• Engine tuning calculations</li>
                  <li>• Performance modifications</li>
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
                <Link to="/fuel/injector-flow" className="block text-sm text-blue-600 hover:underline">
                  Fuel Injector Flow Calculator
                </Link>
                <Link to="/conversions/fuel-economy" className="block text-sm text-blue-600 hover:underline">
                  Fuel Economy Conversions
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
