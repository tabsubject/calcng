import { Link } from 'react-router-dom';
import { ArrowLeft, CreditCard, Calculator, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function LoansCategoryPage() {
  const calculators = [
    {
      title: 'Auto Loan Calculator',
      description: 'Calculate monthly payments, total interest, and loan costs for vehicle financing with down payment and trade-in options',
      path: '/loans/auto',
      icon: Calculator,
      features: ['Monthly payment calculation', 'Total interest analysis', 'Down payment impact']
    },
    {
      title: 'Car Lease Calculator',
      description: 'Calculate monthly lease payments based on vehicle price, residual value, money factor, and lease terms',
      path: '/loans/lease',
      icon: CreditCard,
      features: ['Lease payment calculation', 'Residual value analysis', 'Money factor conversion']
    },
    {
      title: 'Lease vs Buy Comparison Calculator',
      description: 'Compare the total costs of leasing versus buying a vehicle to make informed financing decisions',
      path: '/loans/lease-vs-buy',
      icon: TrendingUp,
      features: ['Cost comparison analysis', 'Financial decision support', 'Long-term cost evaluation']
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
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Vehicle Financing Calculators</h1>
        <p className="text-gray-600">Professional tools for auto loans, lease calculations, and financing comparisons</p>
      </div>

      {/* Introduction Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CreditCard className="h-6 w-6 text-blue-600" />
            <span>Vehicle Financing Analysis Tools</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our vehicle financing calculators help car buyers, dealers, and financial professionals analyze 
            different financing options for vehicle purchases. Whether you're considering an auto loan, 
            lease agreement, or comparing financing methods, these tools provide accurate calculations 
            to help you make informed financial decisions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Loan Analysis</h3>
              <p className="text-sm text-blue-800">Calculate monthly payments, total interest costs, and analyze the impact of down payments and trade-ins.</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">Lease Calculations</h3>
              <p className="text-sm text-green-800">Understand lease payments, residual values, and money factors to evaluate lease agreements effectively.</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-900 mb-2">Financial Comparison</h3>
              <p className="text-sm text-purple-800">Compare different financing options to determine the most cost-effective approach for your situation.</p>
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

      {/* Financing Comparison */}
      <Card>
        <CardHeader>
          <CardTitle>Financing Options Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Auto Loan Benefits</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  <span>Build ownership equity in the vehicle</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  <span>No mileage restrictions or wear charges</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  <span>Freedom to modify the vehicle</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  <span>Can sell or trade anytime</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Lease Benefits</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  <span>Lower monthly payments</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  <span>Always drive newer vehicles with latest features</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  <span>Warranty coverage throughout lease term</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  <span>No depreciation risk or resale concerns</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Financing Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-900">Credit Score Impact</h4>
                <p className="text-sm text-gray-600">Higher credit scores typically qualify for lower interest rates, significantly reducing total loan costs over time.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Down Payment Benefits</h4>
                <p className="text-sm text-gray-600">Larger down payments reduce monthly payments, total interest paid, and may help avoid being upside-down on the loan.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Loan Term Considerations</h4>
                <p className="text-sm text-gray-600">Shorter loan terms mean higher monthly payments but significantly less total interest paid over the life of the loan.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Lease Considerations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-900">Mileage Allowances</h4>
                <p className="text-sm text-gray-600">Most leases include 10,000-15,000 miles per year. Exceeding this limit results in additional charges at lease end.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Wear and Tear</h4>
                <p className="text-sm text-gray-600">Excessive wear and tear charges can apply at lease end. Understanding these terms helps avoid unexpected costs.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Early Termination</h4>
                <p className="text-sm text-gray-600">Ending a lease early typically involves significant penalties. Consider lease transfer options if circumstances change.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
