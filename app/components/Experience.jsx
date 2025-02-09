import { Briefcase, Clock } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Frontend Development Internship",
      company: "Intern, Ryder Business Solution Private Limited ",
      status: "Ongoing",
      responsibilities: [
        "Gaining hands-on experience in developing web applications using Next.js.",
        "Collaborating with teams to implement optimized frontend systems.",
      ],
    },
    {
      title: "Blockchain Research Internship",
      company: "Research Intern, College",
      status: "Completed",
      responsibilities: [
        "Conducting research on blockchain applications in business management.",
        "Exploring decentralized systems to enhance operational efficiency.",
      ],
    },
    {
      title: "Full-Stack Development Internship",
      company: "Intern, College",
      status: "Completed",
      responsibilities: [
        "Gaining hands-on experience in developing web applications.",
        "Working on creating scalable and efficient full-stack solutions to address real-world challenges.",
        "Collaborating with teams to implement optimized frontend and backend systems.",
      ],
    },
  ];

  return (
    <section id="experience" className="w-full max-w-4xl mx-auto py-16 px-6 scroll-mt-20">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center text-white mb-10 relative">
        Experience
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-indigo-400 mt-3"></div>
      </h2>

      {/* Experience Cards */}
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="border border-white/20 p-6 rounded-lg backdrop-blur-lg bg-white/10 shadow-md 
                     transition-all duration-300 hover:scale-[1.02] hover:shadow-xl 
                     hover:border-indigo-400/30 group"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-md bg-indigo-400/20 group-hover:bg-indigo-400/30 transition-colors mt-1">
                <Briefcase className="w-6 h-6 text-indigo-400" />
              </div>
              <div className="space-y-3 flex-1">
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-gray-300 mt-1">{exp.company}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      exp.status === "Ongoing" 
                        ? "bg-green-400/20 text-green-400" 
                        : "bg-gray-400/20 text-gray-400"
                    }`}>
                      {exp.status}
                    </span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                      <span className="text-indigo-400 mt-1">•</span>
                      <span className="flex-1">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}