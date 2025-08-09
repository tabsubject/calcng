import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TireSizeCalculator } from '../../components/calculators/TireSizeCalculator';

export function TireSizePage() {
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
        <h1 className="text-3xl font-bold text-gray-900">Tire Size Calculator</h1>
        <p className="text-gray-600">Calculate tire specifications from tire size markings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <TireSizeCalculator />
          
          <Card>
            <CardHeader>
              <CardTitle>How to Read Tire Sizes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Tire Size Format</h3>
                <p className="text-sm bg-gray-100 p-3 rounded font-mono">
                  225/60R16
                </p>
                <ul className="text-sm text-gray-600 space-y-1 mt-2">
                  <li>• <strong>225:</strong> Width in millimeters</li>
                  <li>• <strong>60:</strong> Aspect ratio (sidewall height %)</li>
                  <li>• <strong>R:</strong> Radial construction</li>
                  <li>• <strong>16:</strong> Wheel diameter in inches</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Calculated Values</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>Sidewall Height:</strong> Width × Aspect Ratio</li>
                  <li>• <strong>Overall Diameter:</strong> Wheel + (2 × Sidewall)</li>
                  <li>• <strong>Circumference:</strong> π × Diameter</li>
                  <li>• <strong>Revolutions/Mile:</strong> 63,360 ÷ Circumference</li>
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
                <Link to="/tires/size-comparison" className="block text-sm text-blue-600 hover:underline">
                  Tire Size Comparison Calculator
                </Link>
                <Link to="/tires/speedometer-error" className="block text-sm text-blue-600 hover:underline">
                  Speedometer Error Calculator
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
