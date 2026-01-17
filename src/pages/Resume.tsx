
import { Navigation } from "@/components/Navigation";
import { TechBackground } from "@/components/TechBackground";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Resume = () => {
  const skills = {
    "Programming Languages": ["Python",   "Java", "C", "Verilog", "VHDL"],
    "Web Frameworks": ["Spring Boot", "FastAPI", "Django", "MERN"],
    "Cloud Platforms": ["AWS", "Oracle", "Azure"],
    "Databases": ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
    "Tools & Technologies": ["Git", "VS Code", "Postman", "Eclipse", "IntelliJ"]
  };

  const experience = [
    {
      title: "Software Development Instructor",
      company: "NxtWave Disruptive Technologies",
      period: "Apr 2025 - Present",
      achievements: [
        "Completed several courses including Python, MySQL and others.",
        "Made a cabin booking system using Fast API and Lovable.",
        "Conducted several Bootcamps at NIAT as a speaker and a volunteer."
      ]
    },
    {
      title: "Java Developer Intern",
      company: "Innovation Lab, Concordia University",
      period: "Jan 2023 - Apr 2023",
      achievements: [
        "Assisted in the development of a software prototype leveraging ML to generate music files from sheet music input.",
        "Implemented system architecture in Java, integrating ML algorithms for music pattern recognition & generation."
      ]
    }
  ];

  const education = [
    {
      degree: "M.E in Electrical and Computer",
      institution: "Concordia University",
      period: "2023 - 2024",
      details: "Specialization in Computing Systems and Microelectronic Systems • GPA: 3.8/4.3"
    },
    {
      degree: "B.E in Electronics and Communication",
      institution: "Visvesvaraya Technological University",
      period: "2018 - 2022",
      details: "Major in Electronics and Communication • CGPA: 8.59/10"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 relative">
      <TechBackground animated={true} />
      <Navigation />
      
      <main className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Resume
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive overview of my professional experience, skills, and educational background in Web Frameworks and Embedded Systems.
            </p>
            <a
              href="https://drive.usercontent.google.com/download?id=1yqxVWRx1BzZOcY7J3Wpe-LCsL-FkCbti&export=download&authuser=0&confirm=t&uuid=9900f9f8-6b55-4874-a2b3-9e2dfd1c4bdd&at=ANTm3cxNHGBoePN73Iuh_eK8LDnG:1768680062697"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                📄 Download Resume
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Skills & Education */}
            <div className="lg:col-span-1 space-y-6">
              {/* Skills */}
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">Technical Skills</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(skills).map(([category, items]) => (
                    <div key={category}>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">{category}</h4>
                      <div className="flex flex-wrap gap-1">
                        {items.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Education */}
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">Education</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-blue-500 pl-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white">{edu.degree}</h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">{edu.institution}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{edu.period}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{edu.details}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Experience */}
            <div className="lg:col-span-2">
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Professional Experience</CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  {experience.map((exp, index) => (
                    <div key={index} className="relative">
                      {index !== experience.length - 1 && (
                        <div className="absolute left-0 top-8 bottom-0 w-px bg-gray-300 dark:bg-gray-600"></div>
                      )}
                      <div className="relative pl-8">
                        <div className="absolute left-0 top-2 w-3 h-3 bg-blue-500 rounded-full -translate-x-1.5"></div>
                        <div className="mb-4">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                          <p className="text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{exp.period}</p>
                        </div>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-gray-600 dark:text-gray-300 flex items-start">
                              <span className="text-blue-500 mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* PDF Viewer Placeholder */}
              <Card className="mt-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">Resume Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg h-96 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">📄</div>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">PDF Resume Preview</p>
                      <a
                        href="https://drive.google.com/file/d/1yqxVWRx1BzZOcY7J3Wpe-LCsL-FkCbti/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                          Open Full Resume
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Resume;
