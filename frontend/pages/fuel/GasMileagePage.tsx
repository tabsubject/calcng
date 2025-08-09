import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GasMileageCalculator } from '../../components/calculators/GasMileageCalculator';

export function GasMileagePage() {
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
        <h1 className="text-3xl font-bold text-gray-900">Gas Mileage Calculator</h1>
        <p className="text-gray-600">Calculate your vehicle's fuel economy in MPG</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <GasMileageCalculator />
          
          <Card>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Formula</h3>
                <p className="text-sm bg-gray-100 p-3 rounded font-mono">
                  MPG = Distance Traveled ÷ Fuel Used
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Explanation</h3>
                <p className="text-sm text-gray-600">
                  Miles per gallon (MPG) is calculated by dividing the total distance traveled by the amount 
                  of fuel consumed. This gives you your vehicle's actual fuel economy.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">How to Measure Accurately</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Fill tank completely and reset trip odometer</li>
                  <li>• Drive normally until next fill-up</li>
                  <li>• Note miles driven and gallons to refill</li>
                  <li>• Calculate multiple times for average MPG</li>
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
                <Link to="/fuel/cost" className="block text-sm text-blue-600 hover:underline">
                  Fuel Cost Calculator
                </Link>
                <Link to="/conversions/fuel-economy" className="block text-sm text-blue-600 hover:underline">
                  Fuel Economy Unit Conversion
                </Link>
                <Link to="/fuel/savings" className="block text-sm text-blue-600 hover:underline">
                  Fuel Savings Calculator
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
