import { Link } from 'react-router-dom';
import { ArrowLeft, Zap, Calculator, Clock, TrendingDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function EvCategoryPage() {
  const calculators = [
    {
      title: 'EV Charging Cost Calculator',
      description: 'Calculate the cost to charge your electric vehicle based on battery capacity, charging efficiency, and electricity rates',
      path: '/ev/charging-cost',
      icon: Calculator,
      features: ['Charging cost estimation', 'Efficiency factors', 'Rate comparisons']
    },
    {
      title: 'EV Charging Time Calculator',
      description: 'Determine how long it takes to charge your electric vehicle based on charger power and battery specifications',
      path: '/ev/charging-time',
      icon: Clock,
      features: ['Charging time estimation', 'Multiple charger types', 'Battery level planning']
    },
    {
      title: 'EV vs Gas Fuel Savings Calculator',
      description: 'Compare annual operating costs between electric vehicles and gasoline vehicles to calculate potential savings',
      path: '/ev/fuel-savings',
      icon: TrendingDown,
      features: ['Annual cost comparison', 'Fuel savings analysis', 'Environmental impact']
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
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Electric Vehicle Calculators</h1>
        <p className="text-gray-600">Essential tools for EV charging cost analysis, time planning, and savings calculations</p>
      </div>

      {/* Introduction Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="h-6 w-6 text-blue-600" />
            <span>Electric Vehicle Analysis Tools</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our electric vehicle calculators help current and prospective EV owners understand charging costs, 
            plan charging times, and analyze the financial benefits of electric vehicle ownership. Whether you're 
            considering your first EV purchase or optimizing your current electric vehicle usage, these tools 
            provide accurate calculations based on real-world factors.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">Cost Analysis</h3>
              <p className="text-sm text-green-800">Calculate charging costs, compare electricity rates, and understand the true cost of EV ownership.</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Charging Planning</h3>
              <p className="text-sm text-blue-800">Plan charging sessions, estimate charging times, and optimize your charging schedule for convenience and cost.</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-900 mb-2">Savings Comparison</h3>
              <p className="text-sm text-purple-800">Compare EV operating costs with gasoline vehicles to understand long-term savings and environmental benefits.</p>
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

      {/* Additional Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>EV Charging Fundamentals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-900">Charging Levels</h4>
                <p className="text-sm text-gray-600">Level 1 (120V) is slowest but most accessible, Level 2 (240V) is ideal for home charging, and DC Fast Charging provides rapid charging for long trips.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Charging Efficiency</h4>
                <p className="text-sm text-gray-600">Charging efficiency typically ranges from 85-95%, with some energy lost as heat during the charging process.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Battery Management</h4>
                <p className="text-sm text-gray-600">Charging speeds slow down as batteries approach full capacity to protect battery health and longevity.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>EV Ownership Benefits</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-900">Lower Operating Costs</h4>
                <p className="text-sm text-gray-600">Electricity is typically cheaper than gasoline per mile, and EVs require less maintenance with fewer moving parts.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Environmental Impact</h4>
                <p className="text-sm text-gray-600">EVs produce zero direct emissions and have lower overall carbon footprint, especially with clean electricity sources.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Convenience Features</h4>
                <p className="text-sm text-gray-600">Home charging eliminates gas station visits, and many EVs offer pre-conditioning and smart charging features.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* EV Market Trends */}
      <Card>
        <CardHeader>
          <CardTitle>Electric Vehicle Market Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-1">Growing Adoption</h4>
              <p className="text-sm text-gray-600">EV sales continue to grow rapidly worldwide as technology improves and costs decrease.</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-1">Charging Infrastructure</h4>
              <p className="text-sm text-gray-600">Public charging networks are expanding rapidly, making long-distance EV travel more convenient.</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-1">Battery Technology</h4>
              <p className="text-sm text-gray-600">Improved battery technology is increasing range while reducing charging times and costs.</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-1">Government Incentives</h4>
              <p className="text-sm text-gray-600">Many governments offer tax credits and incentives to encourage EV adoption and infrastructure development.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
