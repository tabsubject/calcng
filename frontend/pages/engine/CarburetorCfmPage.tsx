import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CarburetorCfmCalculator } from '../../components/calculators/CarburetorCfmCalculator';

export function CarburetorCfmPage() {
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
          Carburetor CFM Calculator
        </h1>
        <p className="text-gray-600">Calculate required carburetor CFM based on engine specifications</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <CarburetorCfmCalculator />
          
          <Card>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Formula</h3>
                <p className="text-sm bg-gray-100 p-3 rounded font-mono">
                  CFM = (Displacement × RPM × VE) ÷ 3456
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Explanation</h3>
                <p className="text-sm text-gray-600">
                  CFM (Cubic Feet per Minute) represents the airflow capacity needed for your carburetor. 
                  This calculation helps you select the right size carburetor for optimal performance.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Volumetric Efficiency Guidelines</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>Stock engines:</strong> 75-85%</li>
                  <li>• <strong>Mild performance:</strong> 85-95%</li>
                  <li>• <strong>High performance:</strong> 95-110%</li>
                  <li>• <strong>Race engines:</strong> 110%+</li>
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
                <Link to="/engine/displacement" className="block text-sm text-blue-600 hover:underline">
                  Engine Displacement Calculator
                </Link>
                <Link to="/fuel/injector-flow" className="block text-sm text-blue-600 hover:underline">
                  Fuel Injector Flow Calculator
                </Link>
                <Link to="/engine/horsepower" className="block text-sm text-blue-600 hover:underline">
                  Engine Horsepower Calculator
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
