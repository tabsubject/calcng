import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Car, Fuel, Zap, ArrowRightLeft, CreditCard, Gauge } from 'lucide-react';

export function HomePage() {
  const calculatorCategories = [
    {
      title: 'Engine & Performance',
      description: 'Calculate horsepower, torque, displacement, compression ratio, and carburetor CFM for optimal engine performance',
      icon: Car,
      calculators: [
        { name: 'Engine Horsepower Calculator', path: '/engine/horsepower' },
        { name: 'Engine Torque Calculator', path: '/engine/torque' },
        { name: 'Engine Displacement Calculator', path: '/engine/displacement' },
        { name: 'Compression Ratio Calculator', path: '/engine/compression-ratio' },
        { name: 'Carburetor CFM Calculator', path: '/engine/carburetor-cfm' }
      ]
    },
    {
      title: 'Fuel Economy & Costs',
      description: 'Calculate fuel costs, mileage, injector flow rates, and fuel conversions to optimize your vehicle\'s efficiency',
      icon: Fuel,
      calculators: [
        { name: 'Fuel Cost Calculator', path: '/fuel/cost' },
        { name: 'Gas Mileage Calculator', path: '/fuel/gas-mileage' },
        { name: 'Fuel Injector Flow Rate Calculator', path: '/fuel/injector-flow' },
        { name: 'Fuel Flow Conversion Calculator', path: '/fuel/flow-conversion' },
        { name: 'Fuel Savings Calculator', path: '/fuel/savings' }
      ]
    },
    {
      title: 'Electric Vehicle Tools',
      description: 'Calculate EV charging costs, charging times, and compare electric vs gasoline vehicle savings',
      icon: Zap,
      calculators: [
        { name: 'EV Charging Cost Calculator', path: '/ev/charging-cost' },
        { name: 'EV Charging Time Calculator', path: '/ev/charging-time' },
        { name: 'EV vs Gas Savings Calculator', path: '/ev/fuel-savings' }
      ]
    },
    {
      title: 'Unit Conversions',
      description: 'Convert between different automotive units including speed, torque, fuel economy, and electric efficiency',
      icon: ArrowRightLeft,
      calculators: [
        { name: 'Speed Unit Conversion Calculator', path: '/conversions/speed' },
        { name: 'Torque Unit Conversion Calculator', path: '/conversions/torque' },
        { name: 'Fuel Economy Conversion Calculator', path: '/conversions/fuel-economy' },
        { name: 'Electric Efficiency Conversion Calculator', path: '/conversions/electric-efficiency' }
      ]
    },
    {
      title: 'Vehicle Financing',
      description: 'Calculate loan payments, lease costs, and compare financing options for cars, motorcycles, and other vehicles',
      icon: CreditCard,
      calculators: [
        { name: 'Auto Loan Calculator', path: '/loans/auto' },
        { name: 'Car Lease Calculator', path: '/loans/lease' },
        { name: 'Lease vs Buy Comparison Calculator', path: '/loans/lease-vs-buy' }
      ]
    },
    {
      title: 'Wheels & Tires',
      description: 'Calculate tire sizes, speedometer errors, and compare wheel specifications for accurate vehicle setup',
      icon: Gauge,
      calculators: [
        { name: 'Tire Size Calculator', path: '/tires/size' },
        { name: 'Speedometer Error Calculator', path: '/tires/speedometer-error' },
        { name: 'Tire Size Comparison Calculator', path: '/tires/size-comparison' }
      ]
    }
  ];

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="text-center px-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
          CalcNG - Free Automotive Calculators
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Comprehensive collection of free automotive calculators for engines, fuel economy, 
          electric vehicles, unit conversions, loans, and tire specifications. Perfect for car enthusiasts, 
          mechanics, and automotive professionals worldwide.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {calculatorCategories.map((category) => {
          const Icon = category.icon;
          
          return (
            <Card key={category.title} className="h-full hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-base sm:text-lg leading-tight">{category.title}</CardTitle>
                </div>
                <CardDescription className="text-sm leading-relaxed">{category.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2">
                  {category.calculators.map((calc) => (
                    <li key={calc.path}>
                      <Link 
                        to={calc.path}
                        className="flex items-start text-sm text-blue-600 hover:text-blue-800 hover:underline leading-relaxed transition-colors"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                        <span>{calc.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* SEO Content Section */}
      <div className="bg-white rounded-lg p-6 mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose CalcNG for Your Automotive Calculations?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Accurate & Reliable</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              All our calculators use industry-standard formulas and are thoroughly tested to ensure accuracy. 
              Whether you're calculating engine horsepower, fuel economy, or tire specifications, you can trust our results.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Free & Easy to Use</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              All calculators are completely free to use with no registration required. Our intuitive interface 
              makes complex automotive calculations simple for both professionals and enthusiasts.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Coverage</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              From engine performance to electric vehicle calculations, we cover all aspects of automotive mathematics. 
              Perfect for mechanics, engineers, students, and car enthusiasts.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Mobile Friendly</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Access all calculators on any device - desktop, tablet, or mobile. All calculations are performed 
              locally in your browser for instant results and complete privacy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
