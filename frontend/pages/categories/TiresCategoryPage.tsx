import { Link } from 'react-router-dom';
import { ArrowLeft, Gauge, Calculator, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function TiresCategoryPage() {
  const calculators = [
    {
      title: 'Tire Size Calculator',
      description: 'Calculate tire specifications including sidewall height, overall diameter, and circumference from tire size markings',
      path: '/tires/size',
      icon: Calculator,
      features: ['Tire dimension calculations', 'Size marking interpretation', 'Specification analysis']
    },
    {
      title: 'Speedometer Error Calculator',
      description: 'Calculate speedometer error when changing tire sizes and determine actual speed vs indicated speed',
      path: '/tires/speedometer-error',
      icon: Gauge,
      features: ['Speedometer accuracy', 'Tire size impact', 'Speed correction calculations']
    },
    {
      title: 'Tire Size Comparison Calculator',
      description: 'Compare specifications between two different tire sizes to evaluate compatibility and performance differences',
      path: '/tires/size-comparison',
      icon: BarChart3,
      features: ['Side-by-side comparison', 'Diameter differences', 'Performance impact analysis']
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
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Wheels & Tires Calculators</h1>
        <p className="text-gray-600">Essential tools for tire sizing, speedometer accuracy, and wheel fitment analysis</p>
      </div>

      {/* Introduction Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Gauge className="h-6 w-6 text-blue-600" />
            <span>Tire & Wheel Analysis Tools</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our tire and wheel calculators help automotive professionals, enthusiasts, and vehicle owners 
            understand tire specifications, calculate the effects of size changes, and ensure proper fitment. 
            Whether you're upgrading wheels, changing tire sizes, or need to understand speedometer accuracy, 
            these tools provide precise calculations for safe and optimal vehicle performance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Size Analysis</h3>
              <p className="text-sm text-blue-800">Understand tire dimensions, calculate specifications, and interpret tire size markings for proper fitment.</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">Performance Impact</h3>
              <p className="text-sm text-green-800">Analyze how tire size changes affect speedometer accuracy, ground clearance, and vehicle dynamics.</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-semibold text-orange-900 mb-2">Upgrade Planning</h3>
              <p className="text-sm text-orange-800">Plan wheel and tire upgrades while maintaining proper overall diameter and vehicle performance.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Calculator Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
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

      {/* Tire Size Guide */}
      <Card>
        <CardHeader>
          <CardTitle>Understanding Tire Size Markings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Tire Size Format: 225/60R16</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-8 bg-blue-100 rounded flex items-center justify-center text-sm font-bold text-blue-700">225</div>
                  <div>
                    <h4 className="font-medium text-gray-900">Width</h4>
                    <p className="text-sm text-gray-600">Tire width in millimeters from sidewall to sidewall</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-8 bg-green-100 rounded flex items-center justify-center text-sm font-bold text-green-700">60</div>
                  <div>
                    <h4 className="font-medium text-gray-900">Aspect Ratio</h4>
                    <p className="text-sm text-gray-600">Sidewall height as percentage of tire width</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-8 bg-purple-100 rounded flex items-center justify-center text-sm font-bold text-purple-700">R</div>
                  <div>
                    <h4 className="font-medium text-gray-900">Construction</h4>
                    <p className="text-sm text-gray-600">R = Radial construction (most common)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-8 bg-orange-100 rounded flex items-center justify-center text-sm font-bold text-orange-700">16</div>
                  <div>
                    <h4 className="font-medium text-gray-900">Wheel Diameter</h4>
                    <p className="text-sm text-gray-600">Wheel diameter in inches</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Additional Markings</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-900">Load Index</h4>
                  <p className="text-sm text-gray-600">Number indicating maximum load capacity (e.g., 91 = 1,356 lbs)</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Speed Rating</h4>
                  <p className="text-sm text-gray-600">Letter indicating maximum speed capability (e.g., H = 130 mph)</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">DOT Code</h4>
                  <p className="text-sm text-gray-600">Manufacturing date and plant information for safety recalls</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">UTQG Ratings</h4>
                  <p className="text-sm text-gray-600">Treadwear, temperature, and traction grades for comparison</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Tire Size Change Effects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-900">Speedometer Accuracy</h4>
                <p className="text-sm text-gray-600">Changing overall tire diameter affects speedometer readings. Larger tires make the speedometer read slower than actual speed.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Ground Clearance</h4>
                <p className="text-sm text-gray-600">Larger diameter tires increase ground clearance, while smaller tires reduce it, affecting approach and departure angles.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Fuel Economy</h4>
                <p className="text-sm text-gray-600">Larger, heavier tires typically reduce fuel economy, while lower rolling resistance tires can improve it.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Wheel & Tire Upgrade Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-900">Plus Sizing</h4>
                <p className="text-sm text-gray-600">Increase wheel diameter while decreasing tire sidewall height to maintain overall diameter and improve handling.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Load Rating</h4>
                <p className="text-sm text-gray-600">Always maintain or exceed the original tire's load rating to ensure safe weight carrying capacity.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Clearance Check</h4>
                <p className="text-sm text-gray-600">Verify adequate clearance for suspension components, brake lines, and wheel wells at full steering lock and suspension travel.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
