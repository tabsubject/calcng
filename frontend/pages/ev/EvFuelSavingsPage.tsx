import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { EvFuelSavingsCalculator } from '../../components/calculators/EvFuelSavingsCalculator';

export function EvFuelSavingsPage() {
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
        <h1 className="text-3xl font-bold text-gray-900">EV vs Gas Fuel Savings Calculator</h1>
        <p className="text-gray-600">Compare annual fuel costs between electric and gas vehicles</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <EvFuelSavingsCalculator />
          
          <Card>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Calculation Method</h3>
                <p className="text-sm bg-gray-100 p-3 rounded font-mono">
                  Gas Cost = (Miles ÷ MPG) × Gas Price<br/>
                  EV Cost = (Miles ÷ Efficiency) × Electricity Rate
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Explanation</h3>
                <p className="text-sm text-gray-600">
                  This calculator compares the annual operating costs between a gasoline vehicle and an 
                  electric vehicle. It factors in your driving habits, local fuel prices, and electricity 
                  rates to show potential savings.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Additional Benefits</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Lower maintenance costs for EVs</li>
                  <li>• Potential tax incentives</li>
                  <li>• Reduced emissions</li>
                  <li>• More stable electricity prices</li>
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
                <Link to="/ev/charging-cost" className="block text-sm text-blue-600 hover:underline">
                  EV Charging Cost Calculator
                </Link>
                <Link to="/fuel/savings" className="block text-sm text-blue-600 hover:underline">
                  Fuel Savings Calculator
                </Link>
                <Link to="/fuel/cost" className="block text-sm text-blue-600 hover:underline">
                  Fuel Cost Calculator
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
