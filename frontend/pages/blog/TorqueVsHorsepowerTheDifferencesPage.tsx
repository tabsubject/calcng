import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Calculator, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect } from 'react';

export function TorqueVsHorsepowerTheDifferencesPage() {
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
          Torque vs Horsepower: The Differences
        </h1>
        <p className="text-gray-600">Understanding the key differences between torque and horsepower</p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="lg:flex lg:gap-8">
          {/* Main Content */}
          <article className="lg:w-2/3">
        <header className="mb-8">
          <img 
            src="/images/blog/torque-vs-horsepower-the-differences.jpg" 
            alt="Torque vs Horsepower The Differences"
            className="w-full h-64 sm:h-80 object-cover rounded-lg mb-6"
          />
          
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
              Engine Performance
            </span>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>December 14, 2024</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>6 min read</span>
            </div>
          </div>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Understanding the difference between torque and horsepower is essential for making informed decisions 
            about vehicle performance, whether you're buying a car or modifying an engine.
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Fundamental Difference</h2>
          <p>
            The most important distinction between torque and horsepower is what they measure:
          </p>
          <ul>
            <li><strong>Torque</strong> measures rotational force - the twisting force applied to rotate an object</li>
            <li><strong>Horsepower</strong> measures the rate of work - how quickly that force can be applied over time</li>
          </ul>

          <p>
            Think of it this way: torque is like the strength of a person, while horsepower is like how quickly 
            that person can use their strength to accomplish work. A strong person (high torque) might move a 
            heavy object slowly, while a less strong but faster person (high horsepower) might move lighter 
            objects more quickly.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Mathematical Relationship</h2>
          <p>
            Torque and horsepower are mathematically related through engine RPM:
          </p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-center my-6">
            Horsepower = (Torque × RPM) ÷ 5252
          </div>
          <p>
            This formula reveals several important insights:
          </p>
          <ul>
            <li>At 5,252 RPM, torque and horsepower values are always equal</li>
            <li>Below 5,252 RPM, torque values are higher than horsepower</li>
            <li>Above 5,252 RPM, horsepower values are higher than torque</li>
          </ul>

          <p>
            You can explore this relationship using our <Link to="/engine/horsepower" className="text-blue-600 hover:underline">Engine Horsepower Calculator</Link> 
            and <Link to="/engine/torque" className="text-blue-600 hover:underline">Engine Torque Calculator</Link>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Units of Measurement</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Torque Units</h3>
          <ul>
            <li><strong>Pound-feet (lb-ft):</strong> Standard in the United States</li>
            <li><strong>Newton-meters (N⋅m):</strong> Metric standard used worldwide</li>
            <li><strong>Pound-inches (lb-in):</strong> Used for smaller applications</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Horsepower Units</h3>
          <ul>
            <li><strong>Brake Horsepower (BHP):</strong> Measured at the engine's flywheel</li>
            <li><strong>Wheel Horsepower (WHP):</strong> Measured at the wheels after drivetrain losses</li>
            <li><strong>Metric Horsepower (PS):</strong> Slightly different from standard horsepower</li>
          </ul>

          <p>
            Use our <Link to="/conversions/torque" className="text-blue-600 hover:underline">Torque Unit Conversion Calculator</Link> 
            to convert between different torque measurements.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Real-World Applications</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">When Torque Matters More</h3>
          <p>
            Torque is more important for:
          </p>
          <ul>
            <li><strong>Towing and hauling:</strong> Moving heavy loads requires high torque at low RPMs</li>
            <li><strong>Off-road driving:</strong> Climbing steep grades and navigating obstacles</li>
            <li><strong>City driving:</strong> Acceleration from traffic lights and stop signs</li>
            <li><strong>Low-speed maneuvers:</strong> Parking and tight turns</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">When Horsepower Matters More</h3>
          <p>
            Horsepower is more important for:
          </p>
          <ul>
            <li><strong>High-speed driving:</strong> Highway merging and passing</li>
            <li><strong>Racing applications:</strong> Maintaining speed at high RPMs</li>
            <li><strong>Top speed:</strong> Overcoming aerodynamic drag</li>
            <li><strong>Sustained performance:</strong> Long-duration high-speed operation</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Engine Characteristics by Type</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Gasoline Engines</h3>
          <p>
            Modern gasoline engines typically produce:
          </p>
          <ul>
            <li>Peak torque between 2,000-4,000 RPM</li>
            <li>Peak horsepower between 5,000-7,000 RPM</li>
            <li>Broad, relatively flat torque curves</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Diesel Engines</h3>
          <p>
            Diesel engines are known for:
          </p>
          <ul>
            <li>High torque output at low RPMs (1,500-2,500 RPM)</li>
            <li>Lower peak RPMs compared to gasoline engines</li>
            <li>Excellent fuel economy under load</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Turbocharged Engines</h3>
          <p>
            Turbocharging affects the torque/horsepower relationship by:
          </p>
          <ul>
            <li>Providing peak torque at lower RPMs</li>
            <li>Creating flatter torque curves</li>
            <li>Improving both low-end torque and high-RPM horsepower</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Torque and Horsepower Curves</h2>
          <p>
            Understanding dyno charts helps you choose the right engine for your needs:
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Flat Torque Curve</h3>
          <p>
            A flat torque curve provides consistent power delivery across a wide RPM range, making the engine 
            feel responsive and easy to drive. This is ideal for daily driving and general performance.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Peaky Torque Curve</h3>
          <p>
            A peaky curve concentrates power in a narrow RPM band, requiring more precise gear selection 
            but potentially offering higher peak performance. This is common in high-performance and racing engines.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Gearing and Power Delivery</h2>
          <p>
            The transmission multiplies engine torque to the wheels, which is why gear selection is crucial:
          </p>
          <ul>
            <li><strong>Lower gears:</strong> Multiply torque for acceleration and climbing</li>
            <li><strong>Higher gears:</strong> Reduce torque multiplication for efficiency and speed</li>
            <li><strong>Gear ratios:</strong> Determine how engine characteristics translate to wheel performance</li>
          </ul>

          <p>
            Learn more about optimal gear selection in our article on 
            <Link to="/blog/what-gear-consumes-less-fuel" className="text-blue-600 hover:underline">what gear consumes less fuel</Link>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Fuel Economy Considerations</h2>
          <p>
            The torque/horsepower relationship affects fuel economy:
          </p>
          <ul>
            <li>Engines with good low-end torque can operate at lower RPMs</li>
            <li>Lower RPMs generally mean better fuel economy</li>
            <li>High horsepower at high RPMs may sacrifice efficiency</li>
          </ul>

          <p>
            For tips on improving fuel economy, read our guide on 
            <Link to="/blog/how-to-reduce-fuel-consumption" className="text-blue-600 hover:underline">how to reduce fuel consumption</Link>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Electric Motors: A Different Paradigm</h2>
          <p>
            Electric motors change the torque vs. horsepower discussion:
          </p>
          <ul>
            <li>Maximum torque available from 0 RPM</li>
            <li>Constant power delivery across a wide speed range</li>
            <li>No need for complex transmissions</li>
            <li>Instant throttle response</li>
          </ul>

          <p>
            Explore electric vehicle performance with our <Link to="/ev/charging-cost" className="text-blue-600 hover:underline">EV calculators</Link>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Choosing Between Torque and Horsepower</h2>
          <p>
            When selecting a vehicle or engine, consider your primary use:
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Choose Torque-Focused Engines For:</h3>
          <ul>
            <li>Towing trailers or boats</li>
            <li>Hauling heavy loads</li>
            <li>Off-road adventures</li>
            <li>Stop-and-go city driving</li>
            <li>Fuel economy priority</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Choose Horsepower-Focused Engines For:</h3>
          <ul>
            <li>High-speed highway driving</li>
            <li>Track days and racing</li>
            <li>Sporty driving experience</li>
            <li>Maximum top speed</li>
            <li>High-RPM operation</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Common Misconceptions</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">"Torque Moves the Car, Horsepower Keeps It Moving"</h3>
          <p>
            While this saying has some truth, it oversimplifies the relationship. Both torque and horsepower 
            contribute to acceleration and top speed, depending on the situation and gearing.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">"More Torque Always Means Better Acceleration"</h3>
          <p>
            Peak torque numbers don't tell the whole story. The shape of the torque curve and where peak 
            torque occurs in the RPM range are equally important.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">"Horsepower Doesn't Matter for Daily Driving"</h3>
          <p>
            While torque is important for low-speed situations, horsepower becomes crucial for highway 
            merging, passing, and maintaining speed on hills.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Conclusion</h2>
          <p>
            Understanding the difference between torque and horsepower helps you make better decisions about 
            vehicle selection, driving techniques, and performance modifications. Rather than focusing on peak 
            numbers alone, consider the entire power curve and how it matches your driving needs.
          </p>

          <p>
            Both torque and horsepower are important, and the best engines provide a good balance of both 
            characteristics across a usable RPM range. Use our calculators to explore these relationships 
            and better understand your engine's performance characteristics.
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
              <Link to="/engine/horsepower" className="block text-sm text-blue-600 hover:underline transition-colors">
                Engine Horsepower Calculator
              </Link>
              <Link to="/engine/torque" className="block text-sm text-blue-600 hover:underline transition-colors">
                Engine Torque Calculator
              </Link>
              <Link to="/conversions/torque" className="block text-sm text-blue-600 hover:underline transition-colors">
                Torque Unit Conversion Calculator
              </Link>
              <Link to="/engine/displacement" className="block text-sm text-blue-600 hover:underline transition-colors">
                Engine Displacement Calculator
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              <span>Related Articles</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Link to="/blog/engine-torque-all-you-need-to-know" className="block text-sm text-blue-600 hover:underline transition-colors">
                Engine Torque: All You Need to Know
              </Link>
              <Link to="/blog/what-gear-consumes-less-fuel" className="block text-sm text-blue-600 hover:underline transition-colors">
                What Gear Consumes Less Fuel
              </Link>
              <Link to="/blog/how-to-reduce-fuel-consumption" className="block text-sm text-blue-600 hover:underline transition-colors">
                How to Reduce Fuel Consumption
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
