import { Server, Database, Wrench, BookOpen, Award } from "lucide-react";

export default function Skills() {
  const skills = [
    {
      category: "Frameworks & Libraries",
      icon: Server,
      items: ["ReactJS", "Node.js", "Redux", "TailwindCSS"]
    },
    {
      category: "Technologies",
      icon: Database,
      items: ["Firebase", "MongoDB", "Blockchain"]
    },
    {
      category: "Tools",
      icon: Wrench,
      items: ["Git", "GitHub", "Postman", "VS Code"]
    },
    {
      category: "Concepts",
      icon: BookOpen,
      items: ["Algorithms", "Data Structures", "API Integration"]
    },
  ];

  const certifications = [
    { name: "Developing Front-End Apps with React", issuer: "IBM" },
    { name: "HTML, CSS, and JavaScript for Web Developers", issuer: "Johns Hopkins University" },
    { name: "Developing Back-End Apps with Node.js and Express", issuer: "IBM" },
  ];

  return (
    <section id="skills" className="w-full max-w-4xl mx-auto py-16 px-6 scroll-mt-20">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center text-white mb-10 relative">
        Technical Skills
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-indigo-400 mt-3"></div>
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skills.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <div 
              key={index} 
              className="border border-white/20 p-5 rounded-lg backdrop-blur-lg bg-white/10 shadow-md 
                        transition-all duration-300 hover:scale-[1.02] hover:shadow-xl 
                        hover:border-indigo-400/30 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-md bg-indigo-400/20 group-hover:bg-indigo-400/30 transition-colors">
                  <IconComponent className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-indigo-400 transition-colors">
                  {skill.category}
                </h3>
              </div>
              <ul className="list-none space-y-2 text-gray-300 text-sm">
                {skill.items.map((item, idx) => (
                  <li 
                    key={idx} 
                    className="flex items-center space-x-2 group-hover:text-gray-200 transition-colors"
                  >
                    <span className="text-green-400 text-base">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Enhanced Certifications Section */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-white text-center mb-8 relative inline-flex items-center gap-2 mx-auto">
          <Award className="w-7 h-7 text-yellow-400" />
          Certifications
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400/30"></div>
        </h3>
        <div className="grid grid-cols-1 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white/10 border border-white/20 p-6 rounded-lg shadow-md 
                        backdrop-blur-lg transition-all duration-300
                        hover:border-yellow-400/30 hover:shadow-lg group"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-yellow-400/10 group-hover:bg-yellow-400/20 transition-colors">
                    <Award className="w-5 h-5 text-yellow-400" />
                  </div>
                  <span className="text-gray-200 font-medium group-hover:text-white transition-colors">
                    {cert.name}
                  </span>
                </div>
                <span className="text-yellow-400 text-sm font-semibold px-3 py-1 rounded-full 
                               bg-yellow-400/10 group-hover:bg-yellow-400/20 transition-colors">
                  {cert.issuer}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}