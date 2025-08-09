import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FuelSavingsCalculator } from '../../components/calculators/FuelSavingsCalculator';

export function FuelSavingsPage() {
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
        <h1 className="text-3xl font-bold text-gray-900">Fuel Savings Calculator</h1>
        <p className="text-gray-600">Compare fuel costs between different vehicles or improvements</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <FuelSavingsCalculator />
          
          <Card>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Calculation Method</h3>
                <p className="text-sm bg-gray-100 p-3 rounded font-mono">
                  Annual Cost = (Miles/Year ÷ MPG) × Fuel Price
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Explanation</h3>
                <p className="text-sm text-gray-600">
                  This calculator compares the annual fuel costs between two scenarios - your current 
                  vehicle and a potential new vehicle or fuel economy improvement. It shows potential 
                  savings and environmental benefits.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Use Cases</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Comparing different vehicles</li>
                  <li>• Evaluating fuel economy modifications</li>
                  <li>• Calculating upgrade ROI</li>
                  <li>• Environmental impact assessment</li>
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
                <Link to="/ev/fuel-savings" className="block text-sm text-blue-600 hover:underline">
                  EV vs Gas Savings Calculator
                </Link>
                <Link to="/fuel/gas-mileage" className="block text-sm text-blue-600 hover:underline">
                  Gas Mileage Calculator
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
