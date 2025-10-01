import React from 'react';
import { Award, Target, Eye, Users } from 'lucide-react';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Abhitesh Singh',
      role: 'Educational Program Head',
      expertise: 'Curriculum Development & Student Mentoring',
      position: 'Business Partner',
      image: '/mentor/Abhitesh Singh.jpg'
    },
    {
      name: 'Mayank Chinchalkar',
      role: 'Lead Trading Strategist',
      expertise: 'Technical Analysis & Risk Management',
      position: 'Business Partner',
      image: '/mentor/Mayank Chinchalkar.jpg'
    },
    {
      name: 'Vinay Pohankar',
      role: 'Market Research Director',
      expertise: 'Fundamental Analysis & Market Psychology',
      position: 'Business Partner',
      image: '/mentor/Vinay Pohankar.jpg'
    }
  ];

  const achievements = [
    'Trained more than 2500 aspiring traders across India',
    '6-Month structured programs (online & offline) with a proven success framework',
    'Developed data-driven & backtested trading strategies with higher win rates',
    'Built a strong trading community where students grow together and support each other',
    'One-on-one mentorship provided to 2000+ learners for personalized trading guidance',
    'Delivered 100+ interactive workshops & webinars on trading psychology, risk management, and strategy building',
    'Helped beginners become consistent traders with simplified, step-by-step learning',
    'Designed personalized trading plans through individual viva sessions',
    'Recognized as one of Nagpur\'s trusted stock market academies'
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                The Trade Learnify Academy
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transforming trading education through practical knowledge and proven strategies
            </p>
          </div>
        </div>
      </section>

      {/* About Us Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                Us
              </span>
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                At Trade Learnify, we empower individuals to achieve financial freedom through knowledge, 
                discipline, and data-driven strategies. Our mission is to simplify the world of trading and make it 
                accessible for anyone who is ready to step forward and take control of their financial future.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                We offer a 6-month comprehensive offline program in Nagpur and a 6-month online 
                course available across India, designed to provide in-depth learning, real-time practice, and 
                one-on-one support to every student.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                Unlike the common belief that trading is risky and "not for everyone," we break this myth by 
                teaching practical strategies, tested systems, and market discipline that can create consistent results.
              </p>

              <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-xl p-6 mb-8">
                <p className="text-lg text-gray-800 font-medium italic">
                  "At The Trade Learnify Academy, we believe trading is not just about buying and selling—it's 
                  about building confidence, creating opportunities, and achieving the financial independence you deserve."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Mission &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                Vision
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="relative">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-12 border border-green-200 shadow-lg hover:shadow-xl transition-all duration-500 hover:transform hover:-translate-y-2">
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
                  <Target className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6 mt-4">Our Mission</h3>
                <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-green-500 rounded-full mb-6"></div>
                <p className="text-gray-700 leading-relaxed text-lg font-medium">
                  Our Goal is to help 10000 People Achieve Financial Freedom in a simple and Honest way
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-12 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-500 hover:transform hover:-translate-y-2">
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <Eye className="text-white" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6 mt-4">Our Vision</h3>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full mb-6"></div>
                <p className="text-gray-700 leading-relaxed text-lg font-medium">
                  To help every student earn profits that showed up in their passbook
                </p>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-green-500/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl"></div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Expert{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                Team
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals behind your trading success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 hover:transform hover:-translate-y-3"
              >
                <div className="mb-6">
                  <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gray-600 font-medium">{member.position}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              <span>Join Now</span>
            </a>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                Achievements
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognition and milestones that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <Award className="text-green-600" size={24} />
                </div>
                <p className="text-gray-700 leading-relaxed">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;