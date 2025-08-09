import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRightLeft, Calculator, Gauge, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function ConversionsCategoryPage() {
  const calculators = [
    {
      title: 'Speed Unit Conversion Calculator',
      description: 'Convert between MPH, KM/H, and M/S for international specifications and performance comparisons',
      path: '/conversions/speed',
      icon: Gauge,
      features: ['MPH to KM/H conversion', 'Metric to imperial units', 'Performance specifications']
    },
    {
      title: 'Torque Unit Conversion Calculator',
      description: 'Convert between lb-ft, N⋅m, and lb-in for engine specifications and bolt torque requirements',
      path: '/conversions/torque',
      icon: Calculator,
      features: ['Multiple torque units', 'Engine specifications', 'Bolt torque conversions']
    },
    {
      title: 'Fuel Economy Conversion Calculator',
      description: 'Convert between MPG, L/100km, and km/L for international fuel economy comparisons',
      path: '/conversions/fuel-economy',
      icon: ArrowRightLeft,
      features: ['International fuel standards', 'MPG to L/100km', 'Efficiency comparisons']
    },
    {
      title: 'Electric Efficiency Conversion Calculator',
      description: 'Convert between miles/kWh, kWh/100mi, and km/kWh for electric vehicle efficiency analysis',
      path: '/conversions/electric-efficiency',
      icon: Zap,
      features: ['EV efficiency units', 'International standards', 'Energy consumption analysis']
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
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Unit Conversion Calculators</h1>
        <p className="text-gray-600">Essential tools for converting between different automotive measurement units</p>
      </div>

      {/* Introduction Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <ArrowRightLeft className="h-6 w-6 text-blue-600" />
            <span>Automotive Unit Conversion Tools</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our unit conversion calculators help automotive professionals and enthusiasts work with different 
            measurement systems used worldwide. Whether you're comparing international specifications, working 
            with imported vehicles, or need to convert between metric and imperial units, these tools provide 
            accurate conversions with the formulas used in the automotive industry.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">International Standards</h3>
              <p className="text-sm text-blue-800">Convert between metric and imperial units used in different countries and automotive markets worldwide.</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">Technical Specifications</h3>
              <p className="text-sm text-green-800">Ensure accurate conversions for engine specifications, performance data, and technical documentation.</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-900 mb-2">Professional Use</h3>
              <p className="text-sm text-purple-800">Essential for mechanics, engineers, and technicians working with international vehicle specifications.</p>
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

      {/* Conversion Reference Tables */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Common Speed Conversions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">60 MPH</span>
                <span className="text-gray-600">96.6 KM/H</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="font-medium">100 KM/H</span>
                <span className="text-gray-600">62.1 MPH</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="font-medium">30 M/S</span>
                <span className="text-gray-600">67.1 MPH</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="font-medium">25 M/S</span>
                <span className="text-gray-600">90 KM/H</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Common Torque Conversions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">100 lb-ft</span>
                <span className="text-gray-600">135.6 N⋅m</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="font-medium">200 N⋅m</span>
                <span className="text-gray-600">147.5 lb-ft</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="font-medium">120 lb-in</span>
                <span className="text-gray-600">13.6 N⋅m</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="font-medium">50 N⋅m</span>
                <span className="text-gray-600">442.5 lb-in</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Why Unit Conversions Matter</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-900">Global Automotive Industry</h4>
                <p className="text-sm text-gray-600">Different countries use different measurement systems, making conversions essential for international vehicle specifications and comparisons.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Technical Documentation</h4>
                <p className="text-sm text-gray-600">Service manuals, parts specifications, and technical data often require conversions between metric and imperial units.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Performance Comparisons</h4>
                <p className="text-sm text-gray-600">Accurate conversions are essential when comparing vehicle performance data from different markets and manufacturers.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Conversion Accuracy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-900">Precision Factors</h4>
                <p className="text-sm text-gray-600">Our calculators use industry-standard conversion factors to ensure accuracy for professional and technical applications.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Rounding Considerations</h4>
                <p className="text-sm text-gray-600">Results are rounded appropriately for practical use while maintaining sufficient precision for technical requirements.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Formula Transparency</h4>
                <p className="text-sm text-gray-600">Each calculator shows the conversion formula used, allowing verification and understanding of the calculation process.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
