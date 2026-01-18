
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  const projects = [
    {
      id: 1,
      name: "EdTech",
      description: "Crafted SEO-driven, learner-focused content for leading education platforms including KnowledgeHut by UpGrad, Chegg, and Great Lakes, simplifying complex concepts into high-impact narratives.",
      tech: ["Curriculum-aligned writing", "Simplifying complex concepts", "Search intent–based content"],
      image: "/images/ed.jpeg",
    },
    {
      id: 2,
      name: "Finance",
      description: "Developed performance-oriented content for financial institutions like FlexiLoans, Almondz, and Propelld, translating data-heavy subjects into accessible, conversion-focused copy.",
      tech: ["Lead-oriented fintech content", "Performance marketing copy", "Data-driven finance copywriting"],
      image: "/images/fi.jpeg",
    },
    {
      id: 3,
      name: "Healthcare",
      description: "Delivered research-backed and patient-centric content for healthcare brands such as Apollo Fertility, Apollo Spectra, AHCA, and EaseMyCure, balancing trust, clarity, and engagement.",
      tech: ["Compliance-aware content", "Research-backed content", "Patient-centric medical writing"],
      // image: "http://images.unsplash.com/photo-1751699466793-8a9513402fd6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=1000&h=1000&fit=crop",
      image: "/images/hc.jpeg",
    },
    {
      id: 4,
      name: "Real Estate",
      description: "Produced buyer-centric and SEO-optimized content for property platforms including Huozeo and RentenPe, improving discoverability and lead intent.",
      tech: ["Buyer-intent content strategy", "Property listing content", "Lead-generation copywriting"],
      // image: "https://images.unsplash.com/photo-1751709314417-6abf3f9412ae?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      image: "/images/re.jpeg",
    },
    {
      id: 5,
      name: "IT & Digital Platforms",
      description: "Created structured, clarity-led content for digital and IT-driven brands including Informatrix, Truecaller, Digital Glyphs, and Savaari, aligning technical offerings with business value and audience understanding.",
      tech: ["SaaS & IT content writing", "B2C digital product content", "Business-aligned tech communication"],
      // image: "https://images.unsplash.com/photo-1751710435254-cc70ec271346?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      image: "/images/it.jpeg",
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
            A showcase of my content writing work across edtech, finance, healthcare, real estate, and IT, crafted to engage, rank, and convert.
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
                
                {/* <Button
                  variant="outline"
                  className="w-full border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300 rounded-xl font-medium"
                >
                  View More
                </Button> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
