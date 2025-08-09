import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { EvChargingCostCalculator } from '../../components/calculators/EvChargingCostCalculator';

export function EvChargingCostPage() {
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
        <h1 className="text-3xl font-bold text-gray-900">EV Charging Cost Calculator</h1>
        <p className="text-gray-600">Calculate the cost to charge your electric vehicle</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <EvChargingCostCalculator />
          
          <Card>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Formula</h3>
                <p className="text-sm bg-gray-100 p-3 rounded font-mono">
                  Cost = (kWh Needed ÷ Efficiency) × Electricity Rate
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Explanation</h3>
                <p className="text-sm text-gray-600">
                  The calculator determines how much energy is needed to charge from your current level 
                  to your target level, accounts for charging efficiency losses, and multiplies by your 
                  electricity rate to get the total cost.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Charging Efficiency</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>Level 1 (120V):</strong> 85-90%</li>
                  <li>• <strong>Level 2 (240V):</strong> 90-95%</li>
                  <li>• <strong>DC Fast Charging:</strong> 85-95%</li>
                  <li>• Cold weather reduces efficiency</li>
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
                <Link to="/ev/charging-time" className="block text-sm text-blue-600 hover:underline">
                  EV Charging Time Calculator
                </Link>
                <Link to="/ev/fuel-savings" className="block text-sm text-blue-600 hover:underline">
                  EV vs Gas Savings Calculator
                </Link>
                <Link to="/conversions/electric-efficiency" className="block text-sm text-blue-600 hover:underline">
                  Electric Efficiency Conversions
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
