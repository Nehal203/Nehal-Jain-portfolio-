import React from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap, Award, TrendingUp } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [

    {
      type: 'work',
      title: 'Frontend Developer',
      company: 'Shiv Aurica',
      location: 'Ahmedabad, Gujarat',
      period: '2025 - Present',
      description: 'Worked on designing and developing user-friendly web interfaces. Focused on improving performance, writing clean code, and collaborating with the team to deliver high-quality frontend features.',
       achievements: [
          'Improved frontend performance and code quality by leading optimization efforts, and implementing testing workflows.'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      type: 'work',
      title: 'MERN Stack Developer',
      company: 'TheSSML',
      location: 'Remote',
      period: '2024 - 2025',
      description: 'Led the end-to-end development of full-stack applications using the MERN stack. Focused on performance optimization, API integration, and seamless user experience. Played a key role in improving system efficiency and deployment workflows.',
      achievements: [
        'Built and deployed 5 full-stack features that boosted user engagement by 35%',
        'Integrated 15+ third-party APIs including secure payment gateways',
        'Optimized MongoDB queries and backend logic to improve load time by 50%',
        'Implemented CI/CD pipeline using GitHub Actions, cutting deployment time by 80%'
      ],
      color: 'from-green-500 to-emerald-500'
    },
  ];

  const education = [
    {
      type: 'education',
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      school: 'Parul Institute of Engineering and Technology',
      location: 'Vadodara, Gujarat',
      period: '2021 - 2025',
      description: 'Comprehensive education in computer science with a focus on software engineering, algorithms, and system design.',
      achievements: [
        'CGPA: 7.64/10'
      ],
      color: 'from-orange-500 to-red-500'
    }

  ];

  const allItems = [...experiences, ...education].sort((a, b) => {
    const yearA = parseInt(a.period.split(' - ')[0]);
    const yearB = parseInt(b.period.split(' - ')[0]);
    return yearB - yearA;
  });

  const getIcon = (type: string) => {
    switch (type) {
      case 'work':
        return <Briefcase className="w-6 h-6" />;
      case 'education':
        return <GraduationCap className="w-6 h-6" />;
      case 'certification':
        return <Award className="w-6 h-6" />;
      default:
        return <Briefcase className="w-6 h-6" />;
    }
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 dark:bg-orange-900/30 rounded-full text-orange-600 dark:text-orange-400 text-sm font-medium mb-4">
              <TrendingUp size={16} className="mr-2" />
              Career Journey
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Experience &
              <span className="block bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A journey of continuous learning, growth, and delivering impactful solutions
              across diverse technologies and industries.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 rounded-full"></div>

            <div className="space-y-12">
              {allItems.map((item, index) => (
                <div key={index} className="relative flex items-start group">
                  {/* Timeline Dot */}
                  <div className={`absolute left-6 w-6 h-6 rounded-full bg-gradient-to-r ${item.color} border-4 border-white dark:border-gray-900 shadow-lg group-hover:scale-125 transition-transform z-10`}>
                  </div>

                  {/* Content */}
                  <div className="ml-20 w-full">
                    <div className={`bg-gradient-to-br ${item.color} p-[1px] rounded-2xl group-hover:scale-105 transition-all duration-300`}>
                      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 h-full">
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                              {item.type === 'work' ? item.title : item.degree}
                            </h3>
                            <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-2">
                              {item.type === 'work' ? item.company : item.school}
                            </p>
                            <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300 mb-4">
                              <div className="flex items-center space-x-1">
                                <Calendar size={16} />
                                <span className="text-sm font-medium">{item.period}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MapPin size={16} />
                                <span className="text-sm font-medium">{item.location}</span>
                              </div>
                            </div>
                          </div>
                          <div className={`p-4 rounded-xl bg-gradient-to-r ${item.color} text-white`}>
                            {getIcon(item.type)}
                          </div>
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                          {item.description}
                        </p>

                        <div className="space-y-3">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Key Achievements:
                          </h4>
                          <ul className="space-y-2">
                            {item.achievements.map((achievement, achievementIndex) => (
                              <li key={achievementIndex} className="flex items-start space-x-3">
                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color} mt-2 flex-shrink-0`}></div>
                                <span className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                  {achievement}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Experience;