import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ElectricEfficiencyConversionCalculator } from '../../components/calculators/ElectricEfficiencyConversionCalculator';

export function ElectricEfficiencyConversionPage() {
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
        <h1 className="text-3xl font-bold text-gray-900">Electric Efficiency Unit Conversion Calculator</h1>
        <p className="text-gray-600">Convert between miles/kWh, kWh/100mi, and km/kWh</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <ElectricEfficiencyConversionCalculator />
          
          <Card>
            <CardHeader>
              <CardTitle>Conversion Formulas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Miles/kWh to kWh/100mi</h3>
                <p className="text-sm bg-gray-100 p-3 rounded font-mono">
                  kWh/100mi = 100 ÷ miles/kWh
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Miles/kWh to km/kWh</h3>
                <p className="text-sm bg-gray-100 p-3 rounded font-mono">
                  km/kWh = miles/kWh × 1.60934
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Understanding EV Efficiency</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>Miles/kWh:</strong> Distance per energy unit</li>
                  <li>• <strong>kWh/100mi:</strong> Energy per 100 miles</li>
                  <li>• Higher miles/kWh = better efficiency</li>
                  <li>• Typical range: 2.5-4.5 miles/kWh</li>
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
                <Link to="/ev/fuel-savings" className="block text-sm text-blue-600 hover:underline">
                  EV vs Gas Savings Calculator
                </Link>
                <Link to="/conversions/fuel-economy" className="block text-sm text-blue-600 hover:underline">
                  Fuel Economy Conversions
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
