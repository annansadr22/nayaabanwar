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
      description: "Crafted SEO-driven, learner-focused content for leading education platforms including KnowledgeHut by UpGrad, Chegg, and Great Lakes, simplifying complex concepts into high-impact narratives.",
      tech: ["Curriculum-aligned writing", "Simplifying complex concepts", "Search intent–based content"],
      image: "/images/ed.jpeg",
      github: "https://github.com/annansadr22/cabin_booking_backend",
      demo: "https://docs.google.com/document/d/1s130XIYfFnVuMV5FeItBxQ61FJOQG2OUR7CQx-5K0fU/edit?tab=t.1yv69bh4ngwt",
      featured: true
    },
    {
      id: 2,
      name: "Finance",
      description: "Developed performance-oriented content for financial institutions like FlexiLoans, Almondz, and Propelld, translating data-heavy subjects into accessible, conversion-focused copy.",
      tech: ["Lead-oriented fintech content", "Performance marketing copy", "Data-driven finance copywriting"],
      image: "/images/fi.jpeg",
      github: "https://github.com/zaranasiim/POC-Project",
      demo: "https://docs.google.com/document/d/1s130XIYfFnVuMV5FeItBxQ61FJOQG2OUR7CQx-5K0fU/edit?tab=t.19lza5tv4pvs",
      featured: true
    },
    {
      id: 3,
      name: "Health Care",
      description: "Delivered research-backed and patient-centric content for healthcare brands such as Apollo Fertility, Apollo Spectra, AHCA, and EaseMyCure, balancing trust, clarity, and engagement.",
      tech: ["Compliance-aware content", "Research-backed content", "Patient-centric medical writing"],
      image: "/images/hc.jpeg",
      github: "https://github.com/annansadr22/Industrial_Robot_COEN_6711",
      demo: "https://docs.google.com/document/d/1s130XIYfFnVuMV5FeItBxQ61FJOQG2OUR7CQx-5K0fU/edit?tab=t.f7iz8c4pda95",
      featured: false
    },
    {
      id: 4,
      name: "Real Estate",
      description: "Produced buyer-centric and SEO-optimized content for property platforms including Huozeo and RentenPe, improving discoverability and lead intent.",
      tech: ["Buyer-intent content strategy", "Property listing content", "Lead-generation copywriting"],
      image: "/images/re.jpeg",
      github: "https://github.com/annansadr22/ArithmeticUnit_COEN_6501",
      demo: "https://docs.google.com/document/d/1s130XIYfFnVuMV5FeItBxQ61FJOQG2OUR7CQx-5K0fU/edit?tab=t.x6pqf7rq21mo",
      featured: false
    },
    {
      id: 5,
      name: "IT & Digital Platforms",
      description: "Created structured, clarity-led content for digital and IT-driven brands including Informatrix, Truecaller, Digital Glyphs, and Savaari, aligning technical offerings with business value and audience understanding.",
      tech: ["SaaS & IT content writing", "B2C digital product content", "Business-aligned tech communication"],
      image: "/images/it.jpeg",
      github: "https://github.com/annansadr22/Formal_Verification_BCD_Adder_COEN_6551",
      demo: "https://docs.google.com/document/d/1s130XIYfFnVuMV5FeItBxQ61FJOQG2OUR7CQx-5K0fU/edit?tab=t.52kqmha4zve8",
      featured: false
    }
  ];

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
              A showcase of my content writing work across edtech, finance, healthcare, real estate, and IT, crafted to engage, rank, and convert.
            </p>
          </div>

          {/* Projects */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 rounded-2xl overflow-hidden"
                >
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
                            View Docs
                          </Button>
                        </a>
                        {/* <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                          <Button
                            size="sm"
                            variant="outline"
                            className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30"
                          >
                            GitHub
                          </Button>
                        </a> */}
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
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-300"
                        >
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
