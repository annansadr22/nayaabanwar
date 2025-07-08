
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  const projects = [
    {
      id: 1,
      name: "Cabin Booking System",
      description: "A sleek internal cabin booking system for NxtWave at Sohini Tech Park, Hyderabad, with a modern UI built using Lovable, powered by a FastAPI backend and PostgreSQL database hosted on Supabase — designed for efficient scheduling, user role management, and real-time availability tracking.",
      tech: ["Python", "FastAPI", "Lovable", "TypeScript", "PostgreSQL", "Supabase"],
      image: "https://images.unsplash.com/photo-1751706566078-4305776b85b4?q=80&w=1689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Chest CT Scan Classification with Azure WebApp",
      description: "A cloud-based AI system for classifying chest CT scans with over 90% accuracy, leveraging Azure Custom Vision for model training and Azure Web App for deployment. Integrated Redis for fast, efficient NoSQL data storage and retrieval to support real-time predictions and scalable access.",
      tech: ["Azure Cloud", "Azure Custom Vision", "Redis", "Flask"],
      image: "https://images.unsplash.com/photo-1751707875919-94155431030a?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Distributed Software Systems Reliability and Performance",
      description: "Designed and deployed a distributed client-server application to evaluate system reliability under controlled error conditions. Leveraged Spring Boot on Oracle Cloud with MongoDB, introduced fault injection at varying rates, and optimized multithreaded performance with robust error recovery mechanisms.",
      tech: ["Java", "Spring Boot", "Eclipse", "Oracle Cloud", "Multithreading", "MongoDB"],
      image: "http://images.unsplash.com/photo-1751699466793-8a9513402fd6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=1000&h=1000&fit=crop",
    },
    {
      id: 4,
      name: "Industrial Robot Prototype",
      description: "Developed a prototype robotic arm for warehouse automation using Arduino UNO microcontroller with 5 degrees of freedom, automating object pick-and-place tasks with precision. Added object detection feature using an infrared sensor, achieving 95% accuracy in detection for seamless object manipulation.",
      tech: ["Arduino", "IR Sensor", "Servo Motor", "Embedded C", "Automation"],
      image: "https://images.unsplash.com/photo-1751709314417-6abf3f9412ae?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "Arithmetic Unit Using VHDL",
      description: "Developed a VHDL-based project for ModelSim that calculates a specified formula, implementing n-bit multiplication with Booth Multiplier and achieving a power-efficient design (5% static and 95% dynamic power dissipation).",
      tech: ["Vivado", "VHDL", "ModelSim"],
      image: "https://images.unsplash.com/photo-1751710435254-cc70ec271346?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
  ];


  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my work in software development, web frameworks, and intelligent systems — spanning IoT, FPGA, and AI-powered applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 rounded-2xl overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  className="w-full border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300 rounded-xl font-medium"
                >
                  View More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
