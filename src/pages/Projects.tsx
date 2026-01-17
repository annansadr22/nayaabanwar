import { Navigation } from "@/components/Navigation";
import { TechBackground } from "@/components/TechBackground";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "EdTech",
      description: "A sleek internal cabin booking system for NxtWave at Sohini Tech Park, Hyderabad, with a modern UI built using Lovable, powered by a FastAPI backend and PostgreSQL database hosted on Supabase — designed for efficient scheduling, user role management, and real-time availability tracking.",
      tech: ["Python", "FastAPI", "Lovable", "TypeScript", "PostgreSQL", "Supabase"],
      image: "https://images.unsplash.com/photo-1751706566078-4305776b85b4?q=80&w=1689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "https://github.com/annansadr22/cabin_booking_backend",
      demo: "https://cabin-booking-frontend-df4p.onrender.com",
      featured: true
    },
    {
      id: 2,
      name: "Finance",
      description: "A cloud-based AI system for classifying chest CT scans with over 90% accuracy, leveraging Azure Custom Vision for model training and Azure Web App for deployment. Integrated Redis for fast, efficient NoSQL data storage and retrieval to support real-time predictions and scalable access.",
      tech: ["Azure Cloud", "Azure Custom Vision", "Redis", "Flask"],
      image: "https://images.unsplash.com/photo-1751707875919-94155431030a?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "https://github.com/zaranasiim/POC-Project",
      demo: "https://drive.google.com/file/d/1AgABLoxfUA7KHmMtm8AAEy3_M0bcQSKg/view?usp=sharing",
      featured: true
    },
    {
      id: 3,
      name: "Health Care",
      description: "Developed a prototype robotic arm for warehouse automation using Arduino UNO microcontroller with 5 degrees of freedom, automating object pick-and-place tasks with precision. Added object detection feature using an infrared sensor, achieving 95% accuracy in detection for seamless object manipulation.",
      tech: ["FastAPI", "LangChain", "Redis", "PostgreSQL", "React", "WebSocket"],
      image: "https://images.unsplash.com/photo-1751709314417-6abf3f9412ae?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "https://github.com/annansadr22/Industrial_Robot_COEN_6711",
      demo: "https://drive.google.com/file/d/15w-T95-k-18Za1Q9PidVjQRWXef2uWwA/view?usp=sharing",
      featured: false
    },
    {
      id: 4,
      name: "Real Estate",
      description: " Developed a VHDL-based project for ModelSim that calculates a specified formula, implementing n-bit multiplication with Booth Multiplier and achieving a power-efficient design (5% static and 95% dynamic power dissipation).",
      tech: ["Vivado", "VHDL", "ModelSim"],
      image: "https://images.unsplash.com/photo-1751710435254-cc70ec271346?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "https://github.com/annansadr22/ArithmeticUnit_COEN_6501",
      demo: "https://drive.google.com/file/d/1jG3b9xSXp47hugaby-nQoV6uj02Uu-4X/view?usp=sharing",
      featured: false
    },
    {
      id: 5,
      name: "IT",
      description: "Synthesised RTL code for a BCD Adder to gate level using Synopsys tools & verified RTL and gate-level designs with Formality and Conformal, achieving 100% verification & fixing 18 bugs in a provided gate-level description.",
      tech: ["Formal Verification", "Equivalence Checking", "Conformal", "Formality"],
      image: "https://i.postimg.cc/W4dsNn5L/for-hard.jpg",
      github: "https://github.com/annansadr22/Formal_Verification_BCD_Adder_COEN_6551",
      demo: "https://drive.google.com/file/d/1mKV4RqVJQiHpjse-eUhaFM0iXccATYdK/view?usp=sharing",
      featured: false
    },
    {
      id: 6,
      name: "Distributed Software Systems Reliability and Performance",
      description: "Designed and deployed a distributed client-server application to evaluate system reliability under controlled error conditions. Leveraged Spring Boot on Oracle Cloud with MongoDB, introduced fault injection at varying rates, and optimized multithreaded performance with robust error recovery mechanisms.",
      tech: ["Java", "Spring Boot", "Eclipse", "Oracle Cloud", "Multithreading", "MongoDB"],
      image: "http://images.unsplash.com/photo-1751699466793-8a9513402fd6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=1000&h=1000&fit=crop",
      github: "https://github.com/annansadr22/Project-Phase-One",
      demo: "https://drive.google.com/file/d/1Y-4-mypDucJsBYwWGa5-PVLPr949nBII/view?usp=sharing",
      featured: true
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 relative">
      <TechBackground animated={true} />
      <Navigation />

      <main className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">

          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A curated collection of my work across modern web development, distributed systems, and cloud technologies — along with hands-on engineering projects in FPGA, IoT devices, and robotic automation.
            </p>
          </div>

          {/* Software Projects */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Software Projects</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <Card key={project.id} className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 rounded-2xl overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                          <Button size="sm" className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30">
                            View Demo
                          </Button>
                        </a>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                          <Button size="sm" variant="outline" className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30">
                            GitHub
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {project.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Hardware Projects */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Hardware Projects</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {otherProjects.map((project) => (
                <Card key={project.id} className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 rounded-2xl overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                          <Button size="sm" className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30">
                            View Demo
                          </Button>
                        </a>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                          <Button size="sm" variant="outline" className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30">
                            GitHub
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {project.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
