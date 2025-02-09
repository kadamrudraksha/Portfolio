import { Mail, Phone, Linkedin, GitlabIcon as GitHub } from "lucide-react"

export default function Contact() {
  const contactInfo = [
    { icon: Phone, text: "+91-9604122508", href: "tel:+919604122508" },
    { icon: Mail, text: "rudrakshakadam04@gmail.com", href: "mailto:rudrakshakadam04@gmail.com" },
    { icon: Linkedin, text: "linkedin.com/in/rudraksha", href: "https://linkedin.com/in/rudraksha" },
    { icon: GitHub, text: "github.com/rudraksha", href: "https://github.com/kadamrudraksha" },
  ]

  return (
    <section id="contact" className="w-full max-w-4xl mx-auto py-16 px-6 scroll-mt-20">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-center text-white mb-10 relative">
        Contact Me
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-indigo-400 mt-3"></div>
      </h2>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {contactInfo.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 p-4 rounded-lg backdrop-blur-lg bg-white/10 shadow-md 
                       transition-all duration-300 hover:scale-[1.02] hover:shadow-xl 
                       hover:border-indigo-400/30 group flex items-center gap-3 w-full"
            >
              <div className="flex-shrink-0 p-2 rounded-md bg-indigo-400/20 group-hover:bg-indigo-400/30 transition-colors">
                <IconComponent className="w-5 h-5 text-indigo-400" />
              </div>
              <span className="text-gray-300 group-hover:text-white transition-colors text-xs sm:text-sm md:text-base 
                             break-all sm:break-normal truncate">
                {item.text}
              </span>
            </a>
          );
        })}
      </div>

      {/* Optional: Add a message */}
      <p className="text-center text-gray-400 mt-8 text-sm">
        Feel free to reach out through any of these channels
      </p>
    </section>
  )
}