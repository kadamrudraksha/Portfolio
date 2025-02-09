import { Code, Database, ShoppingBag } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "LearnHub Platform (SaaS)",
      tech: "React, Tailwind, Inngest, Clerk, Neon, Gemini",
      description: [
        "Developed a platform where users can generate personalized study materials like notes, flashcards, and mock questions.",
        "Implemented features to create, store, and organize user-generated content for effective learning.",
      ],
      icon: Code,
    },
    {
      title: "CRUD App",
      tech: "ReactJS, Node.js, Express, MongoDB",
      description: [
        "Built a full-stack application supporting efficient Create, Read, Update, and Delete operations.",
        "Designed a seamless user interface and ensured real-time backend updates.",
      ],
      icon: Database,
    },
    {
      title: "E-commerce Website",
      tech: "ReactJS, TailwindCSS, Firebase, Fake Store API",
      description: [
        "Developed a responsive eCommerce platform with product listing and filtering.",
        "Integrated Fake Store API to fetch and display real-time product data.",
        "Implemented Firebase Authentication for secure user login and signup.",
      ],
      icon: ShoppingBag,
    },
  ];

  return (
    <section id="projects" className="w-full max-w-4xl mx-auto py-16 px-6 scroll-mt-20">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center text-white mb-10 relative">
        Projects
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-indigo-400 mt-3"></div>
      </h2>

      {/* Project Cards */}
      <div className="space-y-6">
        {projects.map((project, index) => {
          const IconComponent = project.icon;
          return (
            <div
              key={index}
              className="border border-white/20 p-6 rounded-lg backdrop-blur-lg bg-white/10 shadow-md 
                     transition-all duration-300 hover:scale-[1.02] hover:shadow-xl 
                     hover:border-indigo-400/30 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-md bg-indigo-400/20 group-hover:bg-indigo-400/30 transition-colors mt-1">
                  <IconComponent className="w-6 h-6 text-indigo-400" />
                </div>
                <div className="space-y-3 flex-1">
                  <h3 className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 italic">{project.tech}</p>
                  <ul className="space-y-2">
                    {project.description.map((desc, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className="text-indigo-400 mt-1">•</span>
                        <span className="flex-1">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}