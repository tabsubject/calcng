import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FuelInjectorFlowCalculator } from '../../components/calculators/FuelInjectorFlowCalculator';

export function FuelInjectorFlowPage() {
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
        <h1 className="text-3xl font-bold text-gray-900">Fuel Injector Flow Rate Calculator</h1>
        <p className="text-gray-600">Calculate required fuel injector flow rate for your engine</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <FuelInjectorFlowCalculator />
          
          <Card>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Formula</h3>
                <p className="text-sm bg-gray-100 p-3 rounded font-mono">
                  Flow Rate = (HP × BSFC) ÷ (Number of Injectors × Duty Cycle)
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Explanation</h3>
                <p className="text-sm text-gray-600">
                  This calculator determines the minimum flow rate needed for fuel injectors based on your 
                  engine's horsepower, brake specific fuel consumption (BSFC), and desired duty cycle.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">BSFC Guidelines</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>Naturally aspirated:</strong> 0.45-0.55</li>
                  <li>• <strong>Turbocharged:</strong> 0.55-0.65</li>
                  <li>• <strong>Supercharged:</strong> 0.60-0.70</li>
                  <li>• <strong>E85 fuel:</strong> Add 30-40% to flow rate</li>
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
                <Link to="/fuel/flow-conversion" className="block text-sm text-blue-600 hover:underline">
                  Fuel Flow Conversion Calculator
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
