import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { EngineHorsepowerCalculator } from '../../components/calculators/EngineHorsepowerCalculator';

export function EngineHorsepowerPage() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex items-center space-x-4">
        <Link to="/">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>

      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
          Engine Horsepower Calculator
        </h1>
        <p className="text-gray-600">Calculate engine horsepower from torque and RPM</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
        <div className="xl:col-span-2">
          <EngineHorsepowerCalculator />
        </div>
        
        <div className="space-y-4 sm:space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How It Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Formula</h3>
                <p className="text-sm bg-gray-100 p-3 rounded font-mono">
                  Horsepower = (Torque × RPM) ÷ 5252
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Explanation</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  This formula calculates the horsepower output of an engine based on its torque production at a specific RPM. 
                  The constant 5252 comes from the conversion between different units of measurement.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Key Points</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Torque is measured in pound-feet (lb-ft)</li>
                  <li>• RPM is revolutions per minute</li>
                  <li>• Peak horsepower typically occurs at higher RPMs</li>
                  <li>• Peak torque usually occurs at lower RPMs</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Related Calculators</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Link to="/engine/torque" className="block text-sm text-blue-600 hover:underline">
                  Engine Torque Calculator
                </Link>
                <Link to="/engine/displacement" className="block text-sm text-blue-600 hover:underline">
                  Engine Displacement Calculator
                </Link>
                <Link to="/engine/compression-ratio" className="block text-sm text-blue-600 hover:underline">
                  Compression Ratio Calculator
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
