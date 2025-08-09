import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { EngineTorqueCalculator } from '../../components/calculators/EngineTorqueCalculator';

export function EngineTorquePage() {
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
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
          Engine Torque Calculator
        </h1>
        <p className="text-gray-600">Calculate engine torque from horsepower and RPM</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <EngineTorqueCalculator />
          
          <Card>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Formula</h3>
                <p className="text-sm bg-gray-100 p-3 rounded font-mono">
                  Torque = (Horsepower × 5252) ÷ RPM
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Explanation</h3>
                <p className="text-sm text-gray-600">
                  This formula calculates the torque output of an engine when you know its horsepower at a specific RPM. 
                  Torque represents the rotational force the engine produces.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Understanding Torque</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Torque is rotational force measured in lb-ft</li>
                  <li>• Higher torque = better acceleration</li>
                  <li>• Torque decreases as RPM increases (for same HP)</li>
                  <li>• Diesel engines typically produce more torque</li>
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
                <Link to="/engine/horsepower" className="block text-sm text-blue-600 hover:underline">
                  Engine Horsepower Calculator
                </Link>
                <Link to="/conversions/torque" className="block text-sm text-blue-600 hover:underline">
                  Torque Unit Conversion
                </Link>
                <Link to="/engine/displacement" className="block text-sm text-blue-600 hover:underline">
                  Engine Displacement Calculator
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
