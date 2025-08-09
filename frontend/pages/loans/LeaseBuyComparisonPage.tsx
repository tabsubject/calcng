import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LeaseBuyComparisonCalculator } from '../../components/calculators/LeaseBuyComparisonCalculator';

export function LeaseBuyComparisonPage() {
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
        <h1 className="text-3xl font-bold text-gray-900">Lease vs Buy Comparison Calculator</h1>
        <p className="text-gray-600">Compare the total costs of leasing versus buying a vehicle</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <LeaseBuyComparisonCalculator />
          
          <Card>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Comparison Method</h3>
                <p className="text-sm text-gray-600">
                  This calculator compares the total out-of-pocket costs for both scenarios over the 
                  lease term. It doesn't account for ownership equity, which favors buying.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Buying Advantages</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Build ownership equity</li>
                  <li>• No mileage restrictions</li>
                  <li>• Freedom to modify vehicle</li>
                  <li>• No wear and tear charges</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Leasing Advantages</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Lower monthly payments</li>
                  <li>• Always drive newer vehicles</li>
                  <li>• Warranty coverage throughout lease</li>
                  <li>• No depreciation risk</li>
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
                <Link to="/loans/auto" className="block text-sm text-blue-600 hover:underline">
                  Auto Loan Calculator
                </Link>
                <Link to="/loans/lease" className="block text-sm text-blue-600 hover:underline">
                  Car Lease Calculator
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
