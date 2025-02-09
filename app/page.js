import Header from "./components/Header"
import Hero from "./components/Hero"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Home() {
  
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="container mx-auto px-4 py-1 space-y-16">
  <Hero />
  <div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
  
  <Education />
  <div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>

  <Experience />
  <div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>

  <Projects />
  <div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>

  <Skills />
  <div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>

  <Contact />
</main>

      <Footer />
    </div>
  )
}
