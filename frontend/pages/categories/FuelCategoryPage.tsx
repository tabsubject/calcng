import { Link } from 'react-router-dom';
import { ArrowLeft, Fuel, Calculator, TrendingDown, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function FuelCategoryPage() {
  const calculators = [
    {
      title: 'Fuel Cost Calculator',
      description: 'Calculate the total fuel cost for any trip based on distance, vehicle fuel economy, and current fuel prices',
      path: '/fuel/cost',
      icon: Calculator,
      features: ['Trip cost estimation', 'Real-time fuel prices', 'Budget planning']
    },
    {
      title: 'Gas Mileage Calculator',
      description: 'Determine your vehicle\'s actual fuel economy in MPG by tracking distance traveled and fuel consumed',
      path: '/fuel/gas-mileage',
      icon: Fuel,
      features: ['Actual MPG calculation', 'Fuel efficiency tracking', 'Performance monitoring']
    },
    {
      title: 'Fuel Injector Flow Rate Calculator',
      description: 'Calculate required fuel injector flow rate based on engine horsepower, BSFC, and duty cycle requirements',
      path: '/fuel/injector-flow',
      icon: Droplets,
      features: ['Performance engine sizing', 'BSFC calculations', 'Duty cycle optimization']
    },
    {
      title: 'Fuel Flow Conversion Calculator',
      description: 'Convert between different fuel flow units including lb/hr and cc/min for engine tuning and specifications',
      path: '/fuel/flow-conversion',
      icon: Calculator,
      features: ['Unit conversions', 'Engine tuning support', 'Technical specifications']
    },
    {
      title: 'Fuel Savings Calculator',
      description: 'Compare annual fuel costs between different vehicles or calculate savings from fuel economy improvements',
      path: '/fuel/savings',
      icon: TrendingDown,
      features: ['Vehicle comparisons', 'Annual cost analysis', 'Upgrade ROI calculations']
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
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Fuel Economy & Cost Calculators</h1>
        <p className="text-gray-600">Comprehensive tools for fuel cost analysis, economy tracking, and injection system calculations</p>
      </div>

      {/* Introduction Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Fuel className="h-6 w-6 text-blue-600" />
            <span>Fuel Analysis & Optimization Tools</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our fuel calculators help drivers, fleet managers, and automotive professionals optimize fuel consumption, 
            calculate costs, and analyze fuel system requirements. From basic trip cost calculations to advanced 
            fuel injection system sizing, these tools provide accurate results for both everyday use and professional applications.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Cost Management</h3>
              <p className="text-sm text-blue-800">Calculate trip costs, compare vehicle efficiency, and plan fuel budgets with accurate cost analysis tools.</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">Performance Tuning</h3>
              <p className="text-sm text-green-800">Size fuel injectors, convert flow rates, and optimize fuel delivery systems for maximum performance.</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-semibold text-orange-900 mb-2">Efficiency Tracking</h3>
              <p className="text-sm text-orange-800">Monitor real-world fuel economy, track improvements, and compare different vehicles or modifications.</p>
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
            <CardTitle>Fuel Economy Factors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-900">Driving Conditions</h4>
                <p className="text-sm text-gray-600">City driving typically yields 20-30% lower fuel economy than highway driving due to frequent stops and acceleration.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Vehicle Maintenance</h4>
                <p className="text-sm text-gray-600">Proper tire pressure, clean air filters, and regular tune-ups can improve fuel economy by 10-15%.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Driving Habits</h4>
                <p className="text-sm text-gray-600">Aggressive acceleration and high speeds can reduce fuel economy by up to 40% compared to moderate driving.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Fuel System Engineering</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-900">Injector Sizing</h4>
                <p className="text-sm text-gray-600">Proper fuel injector sizing ensures adequate fuel delivery while maintaining good idle quality and fuel atomization.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Flow Rate Conversions</h4>
                <p className="text-sm text-gray-600">Converting between lb/hr and cc/min helps match injector specifications with engine requirements across different measurement systems.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">BSFC Considerations</h4>
                <p className="text-sm text-gray-600">Brake Specific Fuel Consumption varies with engine type, tuning, and operating conditions, affecting injector sizing calculations.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
