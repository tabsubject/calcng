import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function BlogHomePage() {
  const blogPosts = [
    {
      title: 'Engine Torque: All You Need to Know',
      description: 'Complete guide to understanding engine torque, how it works, and why it matters for vehicle performance.',
      slug: 'engine-torque-all-you-need-to-know',
      category: 'Engine Performance',
      readTime: '8 min read',
      publishDate: 'December 15, 2024',
      image: '/images/blog/engine-torque-all-you-need-to-know.jpg'
    },
    {
      title: 'Torque vs Horsepower: The Differences',
      description: 'Learn the key differences between torque and horsepower, and understand which matters more for your driving needs.',
      slug: 'torque-vs-horsepower-the-differences',
      category: 'Engine Performance',
      readTime: '6 min read',
      publishDate: 'December 14, 2024',
      image: '/images/blog/torque-vs-horsepower-the-differences.jpg'
    },
    {
      title: 'What Gear Consumes Less Fuel',
      description: 'Discover which gear provides the best fuel economy and learn driving techniques to maximize your vehicle\'s efficiency.',
      slug: 'what-gear-consumes-less-fuel',
      category: 'Fuel Economy',
      readTime: '5 min read',
      publishDate: 'December 13, 2024',
      image: '/images/blog/what-gear-consumes-less-fuel.jpg'
    },
    {
      title: 'Understanding Carburetor: All You Should Know',
      description: 'Comprehensive guide to carburetors, how they work, types, and their role in engine performance.',
      slug: 'understanding-carburetor-all-you-should-know',
      category: 'Engine Components',
      readTime: '10 min read',
      publishDate: 'December 12, 2024',
      image: '/images/blog/understanding-carburetor-all-you-should-know.jpg'
    },
    {
      title: 'Does AC Increase Fuel Consumption?',
      description: 'Find out how air conditioning affects your vehicle\'s fuel consumption and learn tips to minimize the impact.',
      slug: 'does-ac-increase-fuel-consumption',
      category: 'Fuel Economy',
      readTime: '4 min read',
      publishDate: 'December 11, 2024',
      image: '/images/blog/does-ac-increase-fuel-consumption.jpg'
    },
    {
      title: 'Carburetor vs Fuel Injection',
      description: 'Compare carburetor and fuel injection systems to understand their advantages, disadvantages, and applications.',
      slug: 'carburetor-vs-fuel-injection',
      category: 'Engine Components',
      readTime: '7 min read',
      publishDate: 'December 10, 2024',
      image: '/images/blog/carburetor-vs-fuel-injection.jpg'
    },
    {
      title: 'How To Read Tire Size',
      description: 'Learn to decode tire size markings and understand what each number and letter means for your vehicle.',
      slug: 'how-to-read-tire-size',
      category: 'Tires & Wheels',
      readTime: '5 min read',
      publishDate: 'December 9, 2024',
      image: '/images/blog/how-to-read-tire-size.jpg'
    },
    {
      title: 'How to Reduce Fuel Consumption',
      description: 'Practical tips and techniques to improve your vehicle\'s fuel economy and save money at the pump.',
      slug: 'how-to-reduce-fuel-consumption',
      category: 'Fuel Economy',
      readTime: '8 min read',
      publishDate: 'December 8, 2024',
      image: '/images/blog/how-to-reduce-fuel-consumption.jpg'
    },
    {
      title: 'Why Does My Speedometer Read Faster',
      description: 'Understand why speedometers can be inaccurate and learn about factors that affect speedometer readings.',
      slug: 'why-does-my-speedometer-read-faster',
      category: 'Tires & Wheels',
      readTime: '6 min read',
      publishDate: 'December 6, 2024',
      image: '/images/blog/why-does-my-speedometer-read-faster.jpg'
    }
  ];

  const categories = ['All', 'Engine Performance', 'Fuel Economy', 'Engine Components', 'Tires & Wheels'];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Link to="/">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>

      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Automotive Blog</h1>
        <p className="text-gray-600">Expert insights, tips, and guides for automotive enthusiasts</p>
      </div>

      {/* Featured Post */}
      <Card className="overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3">
            <img 
              src={blogPosts[0].image} 
              alt={blogPosts[0].title}
              className="w-full h-48 md:h-full object-cover"
            />
          </div>
          <div className="md:w-2/3 p-6">
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                {blogPosts[0].category}
              </span>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{blogPosts[0].publishDate}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{blogPosts[0].readTime}</span>
              </div>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{blogPosts[0].title}</h2>
            <p className="text-gray-600 mb-4">{blogPosts[0].description}</p>
            <Link to={`/blog/${blogPosts[0].slug}`}>
              <Button>
                Read More
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </Card>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.slice(1).map((post) => (
          <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                  {post.category}
                </span>
                <div className="flex items-center space-x-1">
                  <Clock className="h-3 w-3" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              <CardTitle className="text-lg leading-tight">{post.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <CardDescription className="mb-4">{post.description}</CardDescription>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1 text-sm text-gray-500">
                  <Calendar className="h-3 w-3" />
                  <span>{post.publishDate}</span>
                </div>
                <Link to={`/blog/${post.slug}`}>
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
