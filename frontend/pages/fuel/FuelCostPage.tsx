import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FuelCostCalculator } from '../../components/calculators/FuelCostCalculator';

export function FuelCostPage() {
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
        <h1 className="text-3xl font-bold text-gray-900">Fuel Cost Calculator</h1>
        <p className="text-gray-600">Calculate the total fuel cost for a trip</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <FuelCostCalculator />
          
          <Card>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Formula</h3>
                <p className="text-sm bg-gray-100 p-3 rounded font-mono">
                  Fuel Cost = (Distance ÷ MPG) × Price per Gallon
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Explanation</h3>
                <p className="text-sm text-gray-600">
                  This calculator determines how much fuel you'll need for a trip and the total cost. 
                  First, it calculates gallons needed by dividing distance by your vehicle's fuel economy, 
                  then multiplies by the current fuel price.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Tips for Accuracy</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Use your actual MPG, not EPA estimates</li>
                  <li>• Consider highway vs city driving</li>
                  <li>• Account for current fuel prices</li>
                  <li>• Add 10% buffer for unexpected detours</li>
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
                <Link to="/fuel/gas-mileage" className="block text-sm text-blue-600 hover:underline">
                  Gas Mileage Calculator
                </Link>
                <Link to="/fuel/savings" className="block text-sm text-blue-600 hover:underline">
                  Fuel Savings Calculator
                </Link>
                <Link to="/ev/fuel-savings" className="block text-sm text-blue-600 hover:underline">
                  EV vs Gas Savings Calculator
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
