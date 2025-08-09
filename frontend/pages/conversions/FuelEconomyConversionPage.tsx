import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FuelEconomyConversionCalculator } from '../../components/calculators/FuelEconomyConversionCalculator';

export function FuelEconomyConversionPage() {
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
        <h1 className="text-3xl font-bold text-gray-900">Fuel Economy Unit Conversion Calculator</h1>
        <p className="text-gray-600">Convert between MPG, L/100km, and km/L</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <FuelEconomyConversionCalculator />
          
          <Card>
            <CardHeader>
              <CardTitle>Conversion Formulas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">MPG to L/100km</h3>
                <p className="text-sm bg-gray-100 p-3 rounded font-mono">
                  L/100km = 235.214 ÷ MPG
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">MPG to km/L</h3>
                <p className="text-sm bg-gray-100 p-3 rounded font-mono">
                  km/L = MPG × 0.425144
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Understanding the Units</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>MPG:</strong> Miles per gallon (US/Imperial)</li>
                  <li>• <strong>L/100km:</strong> Liters per 100 kilometers</li>
                  <li>• <strong>km/L:</strong> Kilometers per liter</li>
                  <li>• Lower L/100km = better fuel economy</li>
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
                <Link to="/fuel/cost" className="block text-sm text-blue-600 hover:underline">
                  Fuel Cost Calculator
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
