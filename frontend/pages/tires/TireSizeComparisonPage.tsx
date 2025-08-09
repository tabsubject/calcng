import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TireSizeComparisonCalculator } from '../../components/calculators/TireSizeComparisonCalculator';

export function TireSizeComparisonPage() {
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
        <h1 className="text-3xl font-bold text-gray-900">Tire Size Comparison Calculator</h1>
        <p className="text-gray-600">Compare specifications between two different tire sizes</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <TireSizeComparisonCalculator />
          
          <Card>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Comparison Metrics</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Overall tire diameter</li>
                  <li>• Tire circumference</li>
                  <li>• Diameter difference</li>
                  <li>• Percentage difference</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Why Compare Tire Sizes</h3>
                <p className="text-sm text-gray-600">
                  When upgrading wheels or changing tire sizes, it's important to maintain similar 
                  overall diameter to preserve speedometer accuracy, ground clearance, and vehicle dynamics.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Recommended Differences</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>Ideal:</strong> Within ±1% diameter difference</li>
                  <li>• <strong>Acceptable:</strong> Within ±3% diameter difference</li>
                  <li>• <strong>Avoid:</strong> More than ±3% difference</li>
                  <li>• Large differences affect handling and speedometer</li>
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
