import React from 'react';
import { Link } from 'react-router-dom';
import { Play, BookOpen, Zap, Target, TrendingUp, ArrowRight } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Zap,
      title: 'Real-time Visualization',
      description: 'Watch memory allocation and deallocation happen in real-time with smooth animations and clear visual feedback.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Target,
      title: 'Multiple Algorithms',
      description: 'Compare First Fit, Best Fit, and Worst Fit algorithms to understand their strengths and weaknesses.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Track fragmentation levels, utilization rates, and other key metrics to evaluate algorithm performance.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: BookOpen,
      title: 'Educational Tool',
      description: 'Perfect for students and professionals learning about dynamic memory management concepts.',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Dynamic Memory
              <span className="block bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
                Management Visualizer
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Understand how dynamic memory allocation works with interactive visualizations 
              of First Fit, Best Fit, and Worst Fit algorithms. Perfect for learning and teaching 
              operating system concepts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/visualizer"
                className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center space-x-2"
              >
                <Play className="h-5 w-5" />
                <span>Start Visualizing</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose DMMV?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our visualizer makes complex memory management concepts easy to understand
              through interactive demonstrations and real-time feedback.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card hover:scale-105 transition-transform duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`bg-gradient-to-r ${feature.color} p-3 rounded-lg w-fit mb-4`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get started in three simple steps and begin exploring memory management algorithms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Choose Algorithm</h3>
              <p className="text-gray-300">
                Select from First Fit, Best Fit, or Worst Fit allocation strategies.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Simulate Processes</h3>
              <p className="text-gray-300">
                Add processes with different memory requirements and watch allocation happen.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Analyze Results</h3>
              <p className="text-gray-300">
                Review performance metrics and understand the trade-offs of each algorithm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Explore Memory Management?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start visualizing dynamic memory allocation algorithms and deepen your 
              understanding of operating system concepts.
            </p>
            <Link
              to="/visualizer"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2"
            >
              <Play className="h-5 w-5" />
              <span>Launch Visualizer</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;