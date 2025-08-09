import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { EvChargingTimeCalculator } from '../../components/calculators/EvChargingTimeCalculator';

export function EvChargingTimePage() {
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
        <h1 className="text-3xl font-bold text-gray-900">EV Charging Time Calculator</h1>
        <p className="text-gray-600">Calculate how long it takes to charge your electric vehicle</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <EvChargingTimeCalculator />
          
          <Card>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Formula</h3>
                <p className="text-sm bg-gray-100 p-3 rounded font-mono">
                  Time = (kWh Needed ÷ Efficiency) ÷ Charging Power
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Explanation</h3>
                <p className="text-sm text-gray-600">
                  Charging time depends on how much energy you need to add to the battery, the efficiency 
                  of the charging process, and the power output of your charger. Higher power chargers 
                  reduce charging time significantly.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Charging Speeds</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>Level 1 (120V):</strong> 1.4 kW - 8-20 hours</li>
                  <li>• <strong>Level 2 (240V):</strong> 3.3-22 kW - 1-8 hours</li>
                  <li>• <strong>DC Fast:</strong> 50-350 kW - 15-60 minutes</li>
                  <li>• Charging slows as battery approaches full</li>
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
