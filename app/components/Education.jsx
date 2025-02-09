import { GraduationCap } from "lucide-react";

export default function Education() {
  const educationData = [
    {
      school: "Pune Institute of Computer Technology",
      degree: "Bachelor of Engineering in Electronics and Telecommunication Engineering",
      details: "CGPA: 8.22 | Aug. 2020 – May 2026",
    },
    {
      school: "H.P.T. Arts & R.Y.K. Science College",
      degree: "Class XII, Science",
      details: "Percentage: 83% | May 2022",
    },
    {
      school: "Nirmala Convent High School",
      degree: "Class X",
      details: "Percentage: 90.8% | May 2020",
    },
  ];

  return (
    <section id="education" className="w-full max-w-4xl mx-auto py-16 px-6 scroll-mt-20">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center text-white mb-10 relative">
        Education
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-indigo-400 mt-3"></div>
      </h2>

      {/* Education Cards */}
      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="border border-white/20 p-6 rounded-lg backdrop-blur-lg bg-white/10 shadow-md 
                     transition-all duration-300 hover:scale-[1.02] hover:shadow-xl 
                     hover:border-indigo-400/30 group"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-md bg-indigo-400/20 group-hover:bg-indigo-400/30 transition-colors mt-1">
                <GraduationCap className="w-6 h-6 text-indigo-400" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors">
                  {edu.school}
                </h3>
                <p className="text-gray-300 font-medium">
                  {edu.degree}
                </p>
                <p className="text-gray-400 text-sm">
                  {edu.details}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}