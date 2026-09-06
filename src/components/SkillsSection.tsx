import React from 'react';
import {
  React as ReactIcon,
  TailwindCss,
  Typescript,
  NodeJs,
  Express,
  Python,
  Git,
  Docker,
  Aws,
} from 'lucide-react';

const SkillsSection: React.FC = () => {
  const frontend = [
    { name: 'React', Icon: ReactIcon },
    { name: 'Tailwind', Icon: TailwindCss },
    { name: 'TypeScript', Icon: Typescript },
  ];
  const backend = [
    { name: 'Node.js', Icon: NodeJs },
    { name: 'Express', Icon: Express },
    { name: 'Python', Icon: Python },
  ];
  const tools = [
    { name: 'Git', Icon: Git },
    { name: 'Docker', Icon: Docker },
    { name: 'AWS', Icon: Aws },
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-8">Technical Expertise</h2>
        <div className="grid grid-cols-1 gap-8 mt-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-4">
              {frontend.map(({ name, Icon }) => (
                <div key={name} className="flex items-center gap-2">
                  <Icon className="h-5 w-5 text-primary" />
                  <span className="text-sm">{name}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Backend</h3>
            <div className="flex flex-wrap gap-4">
              {backend.map(({ name, Icon }) => (
                <div key={name} className="flex items-center gap-2">
                  <Icon className="h-5 w-5 text-primary" />
                  <span className="text-sm">{name}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Tools</h3>
            <div className="flex flex-wrap gap-4">
              {tools.map(({ name, Icon }) => (
                <div key={name} className="flex items-center gap-2">
                  <Icon className="h-5 w-5 text-primary" />
                  <span className="text-sm">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;