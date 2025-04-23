import { Trophy, Award } from 'lucide-react';
import { Section } from './Section';

interface Achievement {
  title: string;
  category: 'hackathon' | 'competition' | 'community';
  description: string;
  icon: JSX.Element;
}

export function Activities() {
  const achievements: Achievement[] = [
    {
      title: "BGSCET Advaya Hackathon",
      category: "hackathon",
      description: "Participated in a challenging 24-hour hackathon, developing innovative solutions under pressure",
      icon: <Trophy className="text-yellow-400" size={24} />
    },
    {
      title: "SIET Tumkur National Hackathon",
      category: "hackathon",
      description: "Competed in a national-level 24-hour hackathon, showcasing problem-solving abilities",
      icon: <Trophy className="text-yellow-400" size={24} />
    },
    {
      title: "SKIT Build For Bengaluru",
      category: "hackathon",
      description: "Achieved top 20 position in a 12-hour hackathon focused on city development solutions",
      icon: <Trophy className="text-yellow-400" size={24} />
    },
    {
      title: "Python Coding Competition",
      category: "competition",
      description: "Secured top 5 position in college-level Python programming competition",
      icon: <Award className="text-blue-400" size={24} />
    },
    {
      title: "Social Media Awareness Program",
      category: "community",
      description: "Conducted educational program for high school students on responsible social media usage",
      icon: <Award className="text-green-400" size={24} />
    }
  ];

  return (
    <Section id="activities" className="bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-12">
          <Trophy className="text-blue-400" size={32} />
          <h2 className="text-4xl font-bold">Activities & Achievements</h2>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border-l-4 border-blue-500"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-700/50 rounded-lg">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                    <p className="text-gray-300">{achievement.description}</p>
                    <span className={`inline-block mt-2 px-3 py-1 rounded-full text-sm ${
                      achievement.category === 'hackathon' 
                        ? 'bg-yellow-500/20 text-yellow-300'
                        : achievement.category === 'competition'
                        ? 'bg-blue-500/20 text-blue-300'
                        : 'bg-green-500/20 text-green-300'
                    }`}>
                      {achievement.category.charAt(0).toUpperCase() + achievement.category.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}