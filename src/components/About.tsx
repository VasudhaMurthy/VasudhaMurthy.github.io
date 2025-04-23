import { User, GraduationCap, Code2, Palette, BookOpen } from 'lucide-react';
import { Section } from './Section';

export function About() {
  const quickFacts = [
    {
      icon: <GraduationCap className="text-yellow-400" size={20} />,
      text: "🎓 Computer Science Student [S J B Institute of Technology]"
    },
    {
      icon: <Code2 className="text-blue-400" size={20} />,
      text: "💻 Full Stack Developer"
    },
    {
      icon: <Palette className="text-purple-400" size={20} />,
      text: "🎨 Creative Problem Solver"
    },
    {
      icon: <BookOpen className="text-green-400" size={20} />,
      text: "🌱 Continuous Learner"
    }
  ];

  return (
    <Section id="about" className="bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-12">
          <User className="text-blue-400" size={32} />
          <h2 className="text-4xl font-bold">About Me</h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          <div className="lg:w-2/3">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="lg:w-2/3">
                <p className="text-lg text-gray-300 leading-relaxed text-justify">
                  I am a curious and enthusiastic developer who loves turning ideas into functional, real-world solutions. 
                  I enjoy working across the stack, from crafting dynamic frontends with React.js to building scalable 
                  backends with Node.js, Flask, and MongoDB. I have experience integrating APIs, AI models (GPT, BERT), 
                  and real-time features into applications.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed text-justify mt-6">
                  My journey in tech has been driven by curiosity and a desire to create meaningful impact through 
                  software development.
                </p>
              </div>
              <div className="lg:w-1/3">
                <img 
                  src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"
                  alt="Coding Cat Animation"
                  className="w-full max-w-[240px] mx-auto rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 flex items-center">
            <div className="bg-gray-900/50 rounded-xl p-6 w-full">
              <h3 className="text-2xl font-semibold mb-6">Quick Facts</h3>
              <div className="grid gap-4">
                {quickFacts.map((fact, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="p-2 bg-gray-800/50 rounded-lg">
                      {fact.icon}
                    </div>
                    <span className="text-gray-300">{fact.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}