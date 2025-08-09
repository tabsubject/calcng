import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SpeedometerErrorCalculator } from '../../components/calculators/SpeedometerErrorCalculator';

export function SpeedometerErrorPage() {
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
        <h1 className="text-3xl font-bold text-gray-900">Speedometer Error Calculator</h1>
        <p className="text-gray-600">Calculate speedometer error when changing tire sizes</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <SpeedometerErrorCalculator />
          
          <Card>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Calculation Method</h3>
                <p className="text-sm bg-gray-100 p-3 rounded font-mono">
                  Actual Speed = Speedometer × (New Diameter ÷ Original Diameter)
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Why It Matters</h3>
                <p className="text-sm text-gray-600">
                  Your speedometer is calibrated for your original tire size. When you change tire sizes, 
                  the speedometer reading becomes inaccurate because it's based on wheel rotations.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Effects of Tire Size Changes</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>Larger tires:</strong> Speedometer reads slower than actual</li>
                  <li>• <strong>Smaller tires:</strong> Speedometer reads faster than actual</li>
                  <li>• Affects odometer accuracy</li>
                  <li>• Can impact fuel economy readings</li>
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
                <Link to="/tires/size" className="block text-sm text-blue-600 hover:underline">
                  Tire Size Calculator
                </Link>
                <Link to="/tires/size-comparison" className="block text-sm text-blue-600 hover:underline">
                  Tire Size Comparison Calculator
                </Link>
                <Link to="/conversions/speed" className="block text-sm text-blue-600 hover:underline">
                  Speed Unit Conversions
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
