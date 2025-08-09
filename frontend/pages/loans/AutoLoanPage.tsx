import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AutoLoanCalculator } from '../../components/calculators/AutoLoanCalculator';

export function AutoLoanPage() {
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
        <h1 className="text-3xl font-bold text-gray-900">Auto Loan Calculator</h1>
        <p className="text-gray-600">Calculate monthly payments and total costs for your auto loan</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <AutoLoanCalculator />
          
          <Card>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Monthly Payment Formula</h3>
                <p className="text-sm bg-gray-100 p-3 rounded font-mono">
                  Payment = P × [r(1+r)^n] / [(1+r)^n - 1]
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  Where P = principal, r = monthly rate, n = number of payments
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">What's Included</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Vehicle price</li>
                  <li>• Down payment (reduces loan amount)</li>
                  <li>• Trade-in value (reduces loan amount)</li>
                  <li>• Sales tax (added to loan amount)</li>
                  <li>• Additional fees (documentation, etc.)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Tips for Better Rates</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Improve credit score before applying</li>
                  <li>• Shop around with multiple lenders</li>
                  <li>• Consider shorter loan terms</li>
                  <li>• Make a larger down payment</li>
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
                <Link to="/loans/lease" className="block text-sm text-blue-600 hover:underline">
                  Car Lease Calculator
                </Link>
                <Link to="/loans/lease-vs-buy" className="block text-sm text-blue-600 hover:underline">
                  Lease vs Buy Comparison
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
