import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Calculator, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect } from 'react';

export function EngineTorqueAllYouNeedToKnowPage() {
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
          Engine Torque: All You Need to Know
        </h1>
        <p className="text-gray-600">Complete guide to understanding engine torque and its applications</p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="lg:flex lg:gap-8">
          {/* Main Content */}
          <article className="lg:w-2/3">
            <header className="mb-8">
              <img 
                src="/images/blog/engine-torque-all-you-need-to-know.webp" 
                alt="Engine Torque All You Need to Know"
                className="w-full h-64 sm:h-80 object-cover rounded-lg mb-6"
              />
              
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                  Engine Performance
                </span>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>December 15, 2024</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>8 min read</span>
                </div>
              </div>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Understanding engine torque is crucial for anyone interested in automotive performance. 
                This comprehensive guide covers everything from basic concepts to practical applications.
              </p>
            </header>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What is Engine Torque?</h2>
          <p>
            Engine torque is the rotational force produced by an engine's crankshaft. It's measured in pound-feet (lb-ft) 
            in the United States or Newton-meters (N⋅m) in metric systems. Think of torque as the engine's ability to 
            do work - specifically, its ability to rotate the wheels and move your vehicle forward.
          </p>

          <p>
            Unlike <Link to="/blog/torque-vs-horsepower-the-differences" className="text-blue-600 hover:underline">horsepower, which measures the rate of work</Link>, 
            torque measures the actual rotational force. This is why torque is often more important for tasks requiring 
            pulling power, such as towing or accelerating from a stop.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How is Torque Produced?</h2>
          <p>
            Torque is generated through the combustion process in your engine's cylinders. When the air-fuel mixture 
            explodes, it forces the piston down, which turns the crankshaft. The longer the connecting rod and the 
            greater the force applied, the more torque is produced.
          </p>

          <p>
            Several factors affect torque production:
          </p>
          <ul>
            <li><strong>Engine displacement:</strong> Larger engines typically produce more torque</li>
            <li><strong>Compression ratio:</strong> Higher compression increases torque output</li>
            <li><strong>Fuel quality:</strong> Higher octane fuels can support higher compression</li>
            <li><strong>Engine tuning:</strong> Proper timing and fuel mixture optimization</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Torque vs. Horsepower: The Relationship</h2>
          <p>
            Torque and horsepower are mathematically related through RPM. The formula is:
          </p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-center my-6">
            Horsepower = (Torque × RPM) ÷ 5252
          </div>
          <p>
            This relationship explains why torque and horsepower curves cross at exactly 5,252 RPM on any dyno chart. 
            You can use our <Link to="/engine/horsepower" className="text-blue-600 hover:underline">Engine Horsepower Calculator</Link> 
            to see this relationship in action.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Peak Torque vs. Peak Horsepower</h2>
          <p>
            Most engines produce peak torque at lower RPMs than peak horsepower. This is because:
          </p>
          <ul>
            <li>At low RPMs, the engine has more time to fill cylinders completely</li>
            <li>Combustion efficiency is often highest at moderate RPMs</li>
            <li>At high RPMs, breathing restrictions limit torque production</li>
          </ul>

          <p>
            Understanding where your engine produces peak torque helps you drive more efficiently and choose the right 
            gear for different situations.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Types of Torque Measurements</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Gross Torque</h3>
          <p>
            Measured at the engine's flywheel without accessories like alternators, power steering pumps, or air conditioning. 
            This represents the engine's maximum potential output.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Net Torque</h3>
          <p>
            Measured with all engine accessories installed and operating. This is more representative of real-world performance 
            and is what manufacturers typically advertise.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Wheel Torque</h3>
          <p>
            The actual torque delivered to the wheels after losses through the transmission, differential, and drivetrain. 
            This is what actually moves your vehicle.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Factors Affecting Torque Output</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Engine Design</h3>
          <ul>
            <li><strong>Stroke length:</strong> Longer strokes generally produce more torque</li>
            <li><strong>Bore size:</strong> Affects breathing and combustion chamber design</li>
            <li><strong>Compression ratio:</strong> Higher compression increases torque (within limits)</li>
            <li><strong>Valve timing:</strong> Affects when and how much air enters cylinders</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Fuel System</h3>
          <p>
            The fuel delivery system significantly impacts torque production. Whether your engine uses a 
            <Link to="/blog/understanding-carburetor-all-you-should-know" className="text-blue-600 hover:underline">carburetor</Link> 
            or <Link to="/blog/carburetor-vs-fuel-injection" className="text-blue-600 hover:underline">fuel injection</Link>, 
            proper fuel metering is crucial for optimal torque output.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Measuring and Calculating Torque</h2>
          <p>
            Torque is typically measured using a dynamometer (dyno), which applies a load to the engine while measuring 
            the rotational force. For practical calculations, you can use our 
            <Link to="/engine/torque" className="text-blue-600 hover:underline">Engine Torque Calculator</Link> 
            to determine torque from horsepower and RPM measurements.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Torque in Different Engine Types</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Gasoline Engines</h3>
          <p>
            Typically produce peak torque between 2,000-4,000 RPM. Modern turbocharged engines can produce peak torque 
            at even lower RPMs due to forced induction.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Diesel Engines</h3>
          <p>
            Known for high torque output at low RPMs, typically peaking between 1,500-2,500 RPM. This makes them 
            excellent for towing and heavy-duty applications.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Electric Motors</h3>
          <p>
            Produce maximum torque instantly from 0 RPM, which is why electric vehicles have such impressive acceleration. 
            Learn more about electric vehicle efficiency with our 
            <Link to="/ev/charging-cost" className="text-blue-600 hover:underline">EV charging calculators</Link>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Practical Applications of Torque Knowledge</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Vehicle Selection</h3>
          <p>
            When choosing a vehicle, consider torque for:
          </p>
          <ul>
            <li><strong>Towing:</strong> Higher torque at low RPMs is essential</li>
            <li><strong>City driving:</strong> Good low-end torque improves acceleration from stops</li>
            <li><strong>Fuel economy:</strong> Engines with good torque curves can operate efficiently at lower RPMs</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Driving Techniques</h3>
          <p>
            Understanding your engine's torque curve helps you:
          </p>
          <ul>
            <li>Choose the most efficient gear for <Link to="/blog/what-gear-consumes-less-fuel" className="text-blue-600 hover:underline">fuel economy</Link></li>
            <li>Optimize acceleration by staying in the torque band</li>
            <li>Reduce engine stress by avoiding lugging or over-revving</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Torque Specifications and Maintenance</h2>
          <p>
            Torque specifications aren't just about engine output - they're also crucial for maintenance. Proper torque 
            values for bolts, spark plugs, and other components ensure safe and reliable operation. Always consult your 
            vehicle's service manual for specific torque requirements.
          </p>

          <p>
            Use our <Link to="/conversions/torque" className="text-blue-600 hover:underline">Torque Unit Conversion Calculator</Link> 
            to convert between different torque measurements when working with international specifications.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Conclusion</h2>
          <p>
            Engine torque is a fundamental concept that affects every aspect of vehicle performance, from acceleration 
            to fuel economy to towing capability. By understanding how torque works and how it relates to horsepower, 
            you can make better decisions about vehicle selection, driving techniques, and maintenance.
          </p>

          <p>
            Whether you're calculating engine specifications, planning modifications, or simply trying to understand 
            your vehicle better, torque knowledge is invaluable. Use our automotive calculators to explore these 
            concepts further and optimize your vehicle's performance.
          </p>
        </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/3 mt-8 lg:mt-0">
            <div className="sticky top-8 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calculator className="h-5 w-5 text-blue-600" />
                    <span>Related Calculators</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Link to="/engine/torque" className="block text-sm text-blue-600 hover:underline">
                      Engine Torque Calculator
                    </Link>
                    <Link to="/engine/horsepower" className="block text-sm text-blue-600 hover:underline">
                      Engine Horsepower Calculator
                    </Link>
                    <Link to="/conversions/torque" className="block text-sm text-blue-600 hover:underline">
                      Torque Unit Conversion Calculator
                    </Link>
                    <Link to="/engine/displacement" className="block text-sm text-blue-600 hover:underline">
                      Engine Displacement Calculator
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Wrench className="h-5 w-5 text-green-600" />
                    <span>Related Articles</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Link to="/blog/torque-vs-horsepower-the-differences" className="block text-sm text-blue-600 hover:underline">
                      Torque vs Horsepower: The Differences
                    </Link>
                    <Link to="/blog/understanding-carburetor-all-you-should-know" className="block text-sm text-blue-600 hover:underline">
                      Understanding Carburetor: All You Should Know
                    </Link>
                    <Link to="/blog/what-gear-consumes-less-fuel" className="block text-sm text-blue-600 hover:underline">
                      What Gear Consumes Less Fuel
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
