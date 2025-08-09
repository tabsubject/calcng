import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LeaseCalculator } from '../../components/calculators/LeaseCalculator';

export function LeaseCalculatorPage() {
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
        <h1 className="text-3xl font-bold text-gray-900">Car Lease Calculator</h1>
        <p className="text-gray-600">Calculate monthly lease payments and total lease costs</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <LeaseCalculator />
          
          <Card>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Lease Payment Formula</h3>
                <p className="text-sm bg-gray-100 p-3 rounded font-mono">
                  Payment = Depreciation + Finance Charge + Tax
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Key Components</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>Depreciation:</strong> (Price - Residual) ÷ Term</li>
                  <li>• <strong>Finance Charge:</strong> (Price + Residual) × Money Factor</li>
                  <li>• <strong>Residual Value:</strong> Expected value at lease end</li>
                  <li>• <strong>Money Factor:</strong> Interest rate ÷ 2400</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Lease Considerations</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Mileage restrictions (typically 10-15k/year)</li>
                  <li>• Wear and tear charges</li>
                  <li>• Gap insurance recommended</li>
                  <li>• No ownership equity built</li>
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
