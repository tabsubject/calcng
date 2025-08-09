import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SpeedConversionCalculator } from '../../components/calculators/SpeedConversionCalculator';

export function SpeedConversionPage() {
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
        <h1 className="text-3xl font-bold text-gray-900">Speed Unit Conversion Calculator</h1>
        <p className="text-gray-600">Convert between MPH, KM/H, and M/S</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <SpeedConversionCalculator />
          
          <Card>
            <CardHeader>
              <CardTitle>Conversion Formulas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">MPH to KM/H</h3>
                <p className="text-sm bg-gray-100 p-3 rounded font-mono">
                  KM/H = MPH × 1.60934
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">MPH to M/S</h3>
                <p className="text-sm bg-gray-100 p-3 rounded font-mono">
                  M/S = MPH × 0.44704
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Common Conversions</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 60 MPH = 96.6 KM/H = 26.8 M/S</li>
                  <li>• 100 KM/H = 62.1 MPH = 27.8 M/S</li>
                  <li>• 30 M/S = 67.1 MPH = 108 KM/H</li>
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
                <Link to="/tires/speedometer-error" className="block text-sm text-blue-600 hover:underline">
                  Speedometer Error Calculator
                </Link>
                <Link to="/conversions/fuel-economy" className="block text-sm text-blue-600 hover:underline">
                  Fuel Economy Conversions
                </Link>
                <Link to="/conversions/torque" className="block text-sm text-blue-600 hover:underline">
                  Torque Unit Conversions
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
