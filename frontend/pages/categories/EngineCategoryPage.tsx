import { Link } from 'react-router-dom';
import { ArrowLeft, Car, Calculator, Gauge, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function EngineCategoryPage() {
  const calculators = [
    {
      title: 'Engine Horsepower Calculator',
      description: 'Calculate engine horsepower from torque and RPM using the standard formula HP = (Torque × RPM) ÷ 5252',
      path: '/engine/horsepower',
      icon: Gauge,
      features: ['Torque to horsepower conversion', 'Standard automotive formula', 'Instant calculations']
    },
    {
      title: 'Engine Torque Calculator',
      description: 'Calculate engine torque from horsepower and RPM to understand your engine\'s rotational force output',
      path: '/engine/torque',
      icon: Wrench,
      features: ['Horsepower to torque conversion', 'Rotational force calculation', 'Performance analysis']
    },
    {
      title: 'Engine Displacement Calculator',
      description: 'Calculate total engine displacement from bore, stroke, and cylinder count in both cubic inches and liters',
      path: '/engine/displacement',
      icon: Car,
      features: ['Bore and stroke calculations', 'Multiple cylinder support', 'Cubic inches and liters output']
    },
    {
      title: 'Compression Ratio Calculator',
      description: 'Calculate engine compression ratio from detailed engine specifications including chamber volume and piston dome',
      path: '/engine/compression-ratio',
      icon: Calculator,
      features: ['Detailed engine measurements', 'Chamber volume calculations', 'Piston dome considerations']
    },
    {
      title: 'Carburetor CFM Calculator',
      description: 'Calculate required carburetor CFM based on engine displacement, RPM, and volumetric efficiency',
      path: '/engine/carburetor-cfm',
      icon: Gauge,
      features: ['Volumetric efficiency factors', 'Performance tuning', 'Carburetor sizing guidance']
    }
  ];

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
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Engine & Performance Calculators</h1>
        <p className="text-gray-600">Professional tools for engine analysis, performance tuning, and automotive calculations</p>
      </div>

      {/* Introduction Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Car className="h-6 w-6 text-blue-600" />
            <span>Engine Performance Analysis Tools</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our comprehensive suite of engine calculators helps automotive professionals, enthusiasts, and students 
            analyze engine performance characteristics. Whether you're building a race engine, tuning for optimal 
            performance, or studying automotive engineering principles, these tools provide accurate calculations 
            using industry-standard formulas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">For Professionals</h3>
              <p className="text-sm text-blue-800">Engine builders, mechanics, and automotive engineers use these calculators for precise performance analysis and component sizing.</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">For Enthusiasts</h3>
              <p className="text-sm text-green-800">Car enthusiasts and DIY mechanics can optimize their builds and understand their engine's performance characteristics.</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-900 mb-2">For Students</h3>
              <p className="text-sm text-purple-800">Automotive students can learn fundamental engine principles and verify their calculations with real-world formulas.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Calculator Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {calculators.map((calc) => {
          const Icon = calc.icon;
          return (
            <Card key={calc.path} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{calc.title}</CardTitle>
                    <CardDescription className="mt-1">{calc.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 mb-4">
                  {calc.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to={calc.path}>
                  <Button className="w-full">
                    Open Calculator
                  </Button>
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Additional Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Engine Performance Fundamentals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-900">Horsepower vs Torque</h4>
                <p className="text-sm text-gray-600">Horsepower measures the rate of work, while torque measures rotational force. Both are essential for understanding engine performance characteristics.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Displacement Impact</h4>
                <p className="text-sm text-gray-600">Engine displacement directly affects power potential, fuel consumption, and emissions. Larger displacement typically means more power but also higher fuel consumption.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Compression Ratio Effects</h4>
                <p className="text-sm text-gray-600">Higher compression ratios increase power and efficiency but require higher octane fuel and precise tuning to avoid knock.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Professional Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-900">Engine Building</h4>
                <p className="text-sm text-gray-600">Use these calculators to determine optimal compression ratios, carburetor sizing, and performance potential for custom engine builds.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Performance Tuning</h4>
                <p className="text-sm text-gray-600">Analyze current performance and calculate the effects of modifications before making expensive changes to your engine.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Educational Use</h4>
                <p className="text-sm text-gray-600">Perfect for automotive courses, training programs, and self-study to understand fundamental engine principles and calculations.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
