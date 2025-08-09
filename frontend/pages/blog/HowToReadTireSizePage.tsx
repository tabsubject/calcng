import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Calculator, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect } from 'react';

export function HowToReadTireSizePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Link to="/blog">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Button>
        </Link>
      </div>

      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
          How to Read Tire Size: A Guide to Understanding Tire Numbers
        </h1>
        <p className="text-gray-600">Understanding tire size codes and what they mean for your vehicle</p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="lg:flex lg:gap-8">
          {/* Main Content */}
          <article className="lg:w-2/3">
        <header className="mb-8">
          <img 
            src="/images/blog/how-to-read-tire-size.jpg" 
            alt="How to Read Tire Size A Guide to Understanding Tire Numbers"
            className="w-full h-64 sm:h-80 object-cover rounded-lg mb-6"
          />
          
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
            <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-medium">
              Vehicle Maintenance
            </span>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>December 18, 2024</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>10 min read</span>
            </div>
          </div>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Understanding how to read tire sizes is an essential skill for every vehicle owner. Whether you're shopping for new tires, checking if your current tires are the right fit, or simply want to understand what those mysterious numbers and letters on your tire sidewall mean, this comprehensive guide will walk you through everything you need to know.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Reading Tire Size Matters</h2>
          <p>
            Knowing how to interpret tire size information helps you:
          </p>
          <ul>
            <li>Purchase the correct replacement tires for your vehicle</li>
            <li>Understand your tire's performance capabilities</li>
            <li>Make informed decisions about tire upgrades</li>
            <li>Ensure proper vehicle safety and handling</li>
            <li>Avoid costly mistakes when buying tires</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Where to Find Tire Size Information</h2>
          <p>
            The tire size is printed on the sidewall of every tire. Look for a series of numbers and letters that typically appears in a format like <strong>P225/60R16 98H</strong>. This alphanumeric code contains all the essential information about your tire's dimensions and capabilities.
          </p>

          <p>
            You can also find your vehicle's recommended tire size in several locations:
          </p>
          <ul>
            <li>Vehicle owner's manual</li>
            <li>Driver's side door jamb sticker</li>
            <li>Inside the glove compartment</li>
            <li>Inside the fuel door</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Breaking Down the Tire Size Code</h2>
          <p>
            Let's decode a common tire size example: <strong>P225/60R16 98H</strong>
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Tire Type Designation</h3>
          <p>
            <strong>P</strong> - This letter indicates the tire type:
          </p>
          <ul>
            <li><strong>P</strong>: Passenger car tire (P-Metric)</li>
            <li><strong>LT</strong>: Light truck tire</li>
            <li><strong>ST</strong>: Special trailer tire</li>
            <li><strong>T</strong>: Temporary spare tire</li>
            <li><strong>No letter</strong>: Euro-metric tire</li>
          </ul>

          <p>
            The "P" designation indicates the tire meets certain standards within the United States for passenger vehicles, while tires with no letters at the beginning are Euro-metric tires.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Section Width</h3>
          <p>
            <strong>225</strong> - This three-digit number represents the tire's section width in millimeters. This measures the distance from sidewall edge to sidewall edge, measured in millimeters up and over the tire's tread. A wider number generally means a wider tire, which can affect handling, fuel economy, and road noise.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Aspect Ratio</h3>
          <p>
            <strong>60</strong> - This two-digit number is the aspect ratio, representing the tire's sidewall height as a percentage of its width. In this example, the sidewall height is 60% of the tire's 225mm width, which equals 135mm.
          </p>

          <p>
            A lower aspect ratio (like 40) means:
          </p>
          <ul>
            <li>Shorter sidewalls</li>
            <li>Better handling and steering response</li>
            <li>Less comfortable ride</li>
            <li>More susceptible to damage from potholes</li>
          </ul>

          <p>
            A higher aspect ratio (like 70) means:
          </p>
          <ul>
            <li>Taller sidewalls</li>
            <li>More comfortable ride</li>
            <li>Better cushioning over bumps</li>
            <li>Potentially less precise handling</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Construction Type</h3>
          <p>
            <strong>R</strong> - This letter indicates the tire's internal construction:
          </p>
          <ul>
            <li><strong>R</strong>: Radial construction (most common)</li>
            <li><strong>D</strong>: Diagonal or bias-ply construction (older technology)</li>
            <li><strong>B</strong>: Belted bias construction (rare)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Wheel Diameter</h3>
          <p>
            <strong>16</strong> - This number represents the diameter of the wheel rim in inches that the tire is designed to fit. This must match your vehicle's wheel size exactly.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Load Index</h3>
          <p>
            <strong>98</strong> - The load index is a two or three digit number that corresponds to the maximum load-carrying capacity of the tire. Each number corresponds to a specific weight capacity:
          </p>

          <p>
            Common Load Index Values:
          </p>
          <ul>
            <li>91 = 1,356 lbs</li>
            <li>94 = 1,477 lbs</li>
            <li>98 = 1,653 lbs</li>
            <li>100 = 1,764 lbs</li>
            <li>104 = 1,984 lbs</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Speed Rating</h3>
          <p>
            <strong>H</strong> - The speed rating is a letter that indicates the maximum speed the tire can safely maintain over time under ideal conditions. The speed rating typically appears as the last letter on the sidewall, coming after the load index.
          </p>

          <p>
            Common Speed Ratings:
          </p>
          <ul>
            <li><strong>Q</strong>: 99 mph (160 km/h)</li>
            <li><strong>S</strong>: 112 mph (180 km/h)</li>
            <li><strong>T</strong>: 118 mph (190 km/h)</li>
            <li><strong>U</strong>: 124 mph (200 km/h)</li>
            <li><strong>H</strong>: 130 mph (210 km/h)</li>
            <li><strong>V</strong>: 149 mph (240 km/h)</li>
            <li><strong>W</strong>: 168 mph (270 km/h)</li>
            <li><strong>Y</strong>: 186 mph (300 km/h)</li>
            <li><strong>Z</strong>: Over 149 mph</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Additional Tire Sidewall Information</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">DOT Code</h3>
          <p>
            The Department of Transportation (DOT) code is a crucial piece of information for tracking and safety purposes. The DOT code is used by the Department of Transportation to track tire production for recall purposes.
          </p>

          <p>
            The DOT code appears as: <strong>DOT XXXX XXXX 2423</strong>
          </p>

          <p>
            The last four digits determine the week and year the tire was made; for example, the digits 0424 would signify that the tire was made during the 4th week of 2024. The code "1324" means that the tire was produced on the 13th week of the year 2024.
          </p>

          <p>
            <strong>Important</strong>: Avoid purchasing tires that are more than a couple of years old, as tires can age out and lose their effectiveness over time.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">UTQG Ratings</h3>
          <p>
            The Uniform Tire Quality Grading (UTQG) system provides additional performance information:
          </p>

          <p>
            <strong>Treadwear Rating</strong>: A number (like 400 or 500) indicating the tire's expected tread life compared to a standard test tire.
          </p>

          <p>
            <strong>Temperature Grades</strong>:
          </p>
          <ul>
            <li><strong>A</strong>: Best resistance to heat</li>
            <li><strong>B</strong>: Good resistance to heat</li>
            <li><strong>C</strong>: Minimum acceptable resistance</li>
          </ul>

          <p>
            <strong>Traction Grades</strong>:
          </p>
          <ul>
            <li><strong>AA</strong>: Highest traction on wet roads</li>
            <li><strong>A</strong>: High traction on wet roads</li>
            <li><strong>B</strong>: Medium traction on wet roads</li>
            <li><strong>C</strong>: Minimum acceptable traction</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Alternative Tire Sizing Systems</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">LT (Light Truck) Tires</h3>
          <p>
            Light truck tires use a similar format but may include additional load range information:
            <strong>LT265/75R16 123/120R E</strong>
          </p>

          <p>
            The dual load index (123/120) indicates load capacity for single and dual wheel applications.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Flotation Sizes</h3>
          <p>
            Some larger tires use flotation sizing:
            <strong>33x12.50R15</strong>
          </p>
          <ul>
            <li>33 = Overall diameter in inches</li>
            <li>12.50 = Section width in inches</li>
            <li>R = Radial construction</li>
            <li>15 = Wheel diameter in inches</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tips for Reading Tire Sizes</h2>
          <ol>
            <li><strong>Double-check the information</strong>: Tire size information can sometimes appear in multiple locations on the sidewall, so verify you're reading the correct designation.</li>
            <li><strong>Consider both front and rear</strong>: For sports cars, be sure to compare front and rear tires because they may be different.</li>
            <li><strong>Match exactly when replacing</strong>: When buying replacement tires, ensure all numbers and letters match your vehicle's specifications unless you're intentionally upgrading.</li>
            <li><strong>Understand the trade-offs</strong>: Different tire sizes offer different benefits in terms of performance, comfort, fuel economy, and cost.</li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Common Mistakes to Avoid</h2>
          <ul>
            <li>Confusing the aspect ratio with the wheel diameter</li>
            <li>Mixing up millimeters and inches</li>
            <li>Ignoring the load index and speed rating requirements</li>
            <li>Buying tires that are too old based on the DOT date code</li>
            <li>Not considering seasonal requirements (summer vs. all-season vs. winter tires)</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">When to Consult a Professional</h2>
          <p>
            While reading tire sizes is straightforward once you understand the system, consider consulting with a tire professional when:
          </p>
          <ul>
            <li>You want to change tire sizes from the manufacturer's recommendation</li>
            <li>You're unsure about load requirements for your specific vehicle</li>
            <li>You need guidance on performance characteristics for your driving needs</li>
            <li>You're considering specialized tires (performance, winter, off-road)</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Conclusion</h2>
          <p>
            Understanding how to read tire sizes empowers you to make informed decisions about your vehicle's tires. From the basic dimensions encoded in the size designation to the performance ratings that indicate load capacity and speed limits, each element serves an important purpose in ensuring your safety and driving satisfaction.
          </p>

          <p>
            Remember that tire size is just one factor in tire selection. Consider your driving habits, climate conditions, performance needs, and budget when choosing new tires. When in doubt, consult with a qualified tire professional who can help you select the best tires for your specific vehicle and driving requirements.
          </p>

          <p>
            By mastering tire size reading, you'll be better equipped to maintain your vehicle properly, shop for tires confidently, and understand the performance characteristics that affect your daily driving experience.
          </p>
        </div>
      </article>

      {/* Sidebar */}
      <aside className="lg:w-1/3 lg:sticky lg:top-8 lg:self-start space-y-6 mt-8 lg:mt-0">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calculator className="h-5 w-5 text-blue-600" />
              <span>Related Calculators</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Link to="/tire/pressure" className="block text-sm text-blue-600 hover:underline transition-colors">
                Tire Pressure Calculator
              </Link>
              <Link to="/tire/size-conversion" className="block text-sm text-blue-600 hover:underline transition-colors">
                Tire Size Conversion Calculator
              </Link>
              <Link to="/tire/load-capacity" className="block text-sm text-blue-600 hover:underline transition-colors">
                Tire Load Capacity Calculator
              </Link>
              <Link to="/conversions/speed" className="block text-sm text-blue-600 hover:underline transition-colors">
                Speed Unit Conversion Calculator
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Settings className="h-5 w-5 text-green-600" />
              <span>Related Articles</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Link to="/blog/why-does-my-speedometer-read-faster" className="block text-sm text-blue-600 hover:underline transition-colors">
                Why Does My Speedometer Read Faster
              </Link>
              <Link to="/blog/how-to-reduce-fuel-consumption" className="block text-sm text-blue-600 hover:underline transition-colors">
                How to Reduce Fuel Consumption
              </Link>
              <Link to="/blog/what-gear-consumes-less-fuel" className="block text-sm text-blue-600 hover:underline transition-colors">
                What Gear Consumes Less Fuel
              </Link>
            </div>
          </CardContent>
        </Card>
      </aside>
        </div>
      </div>
    </div>
  );
}
