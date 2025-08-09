import { Link } from 'react-router-dom';
import { ArrowLeft, Calculator, Target, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function AboutUsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Link to="/">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">About CalcNG</h1>
          <p className="text-gray-600">Your trusted source for free automotive calculators</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle>Our Mission</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              CalcNG was created to provide automotive enthusiasts, professionals, and students worldwide with 
              accurate, easy-to-use calculators for all their automotive needs. We believe that 
              complex automotive calculations should be accessible to everyone, whether you're a weekend mechanic 
              or a professional engineer.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle>What We Offer</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              Our comprehensive suite includes calculators for engine performance, fuel economy, electric vehicles, 
              unit conversions, automotive loans, and tire specifications. All calculations are performed locally 
              in your browser, ensuring privacy and instant results without any server dependencies.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Features & Benefits</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-start space-x-3">
              <Calculator className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Accurate Calculations</h3>
                <p className="text-sm text-gray-600">Industry-standard formulas and precise calculations for reliable results</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Users className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">User-Friendly</h3>
                <p className="text-sm text-gray-600">Intuitive interface designed for all skill levels and experience</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Zap className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Instant Results</h3>
                <p className="text-sm text-gray-600">Real-time calculations with no server delays or waiting time</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Calculator Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900">Engine & Performance</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Horsepower & Torque Calculations</li>
                <li>• Engine Displacement</li>
                <li>• Compression Ratio</li>
                <li>• Carburetor CFM Requirements</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900">Fuel & Economy</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Fuel Cost & Mileage</li>
                <li>• Injector Flow Rates</li>
                <li>• Fuel Unit Conversions</li>
                <li>• Savings Calculations</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900">Electric Vehicles</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Charging Cost & Time</li>
                <li>• EV vs Gas Savings</li>
                <li>• Efficiency Conversions</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900">Unit Conversions</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Speed & Torque Units</li>
                <li>• Fuel Economy Units</li>
                <li>• Electric Efficiency Units</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900">Vehicle Financing</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Auto Loan Calculations</li>
                <li>• Lease Payment Calculations</li>
                <li>• Lease vs Buy Comparisons</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900">Wheels & Tires</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Tire Size Specifications</li>
                <li>• Speedometer Error</li>
                <li>• Size Comparisons</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Privacy & Security</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed">
            Your privacy is important to us. CalcNG performs all calculations locally in your browser, 
            which means your input data never leaves your device. We don't collect, store, or transmit 
            any personal information or calculation data. This ensures both complete privacy and instant results.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Who We Serve</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed mb-4">
            CalcNG is designed for automotive professionals, enthusiasts, and students worldwide:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Automotive mechanics and technicians</li>
              <li>• Engineering students and professionals</li>
              <li>• Car enthusiasts and hobbyists</li>
              <li>• Racing teams and performance shops</li>
            </ul>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Vehicle dealerships and sales teams</li>
              <li>• Fleet managers and operators</li>
              <li>• Automotive educators and trainers</li>
              <li>• DIY mechanics and car owners</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Contact & Support</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed">
            We're committed to continuously improving CalcNG and adding new calculators based on user feedback. 
            If you have questions, suggestions, or need support, please don't hesitate to reach out through our website.
          </p>
          <div className="mt-4 space-y-2">
            <p className="text-sm text-gray-600">
              <strong>Disclaimer:</strong> All calculations are for informational purposes only. 
              Always verify critical calculations with professional sources when accuracy is essential for safety or performance.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
