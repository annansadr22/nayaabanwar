
import { Navigation } from "@/components/Navigation";
import { TechBackground } from "@/components/TechBackground";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const timeline = [
    {
      year: "Current",
      title: "Software Developer & Instructor",
      company: "NxtWave Disruptive Technologies",
      description: "Empowering future developers while building scalable software solutions at NxtWave NIAT."
    },
    {
      year: "2023",
      title: "Java Developer Intern",
      company: "Innovation Lab, Concordia University",
      description: "Developed the backend for an ML-powered music generation prototype using Java."
    },
    {
      year: "2024",
      title: "M.E in Electrical and Computer",
      company: "Concordia University, Canada",
      description: "Specialized in Computing Systems and Microelectronic Systems."
    },
    {
      year: "2022",
      title: "B.E in Electronics and Communication",
      company: "Visvesvaraya Technological University, India",
      description: "Specialized in Digital and Analog Electronics."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 relative">
      <TechBackground animated={true} />
      <Navigation />
      
      <main className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I’m a passionate software developer and technical instructor with a strong interest in building intelligent, real-world systems. My work spans web frameworks, embedded systems, FPGA design, and IoT — blending software engineering with hands-on hardware integration.
            </p>
          </div>

          {/* Personal Story */}
          <Card className="mb-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">My Journey</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600 dark:text-gray-300 leading-relaxed">
              <p className="mb-4">
                My journey into technology began in childhood, not through screens, but through movement — playing sports with my brother and exploring the world physically. It wasn’t until I got my first computer in fourth grade that my curiosity toward electronics and technology truly ignited.
              </p>
              <p className="mb-4">
                As I grew older, this spark evolved into a fascination with how devices communicate — through text, images, and signals that transcend physical boundaries. This led me to pursue a Bachelor's degree in Electronics and Communication Engineering, where I delved deep into communication systems, semiconductors, and microelectronics.
              </p>
              <p className="mb-4">
                Along the way, I rediscovered an early interest in programming — a creative outlet where I could build systems and solve real-world problems through code. From developing a robotic arm using Arduino UNO to working on AI-based disease prediction using patient symptoms, I began bridging hardware and software in practical, impactful ways.
              </p>
              <p className="mb-4">
                My current focus lies at the intersection of web frameworks, IoT, FPGA, and intelligent embedded systems — where software logic meets electronic precision. Through internships, coursework, and continuous self-learning, I’ve built a solid foundation and a deep passion for developing smart systems that go beyond the screen.
              </p>
              <p className="mb-4">
                I believe real learning happens when curiosity meets application — and that’s the mindset I carry forward into every project I build and every student I mentor.
              </p>
            </CardContent>
          </Card>

          {/* Timeline */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Experience & Education</h2>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <Card key={index} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                      <span className="text-blue-600 dark:text-blue-400 font-semibold text-lg">{item.year}</span>
                    </div>
                    <p className="text-blue-700 dark:text-blue-300 font-medium mb-2">{item.company}</p>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Fun Fact */}
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-0 shadow-2xl">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Fun Fact</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 italic">
                "Software is the mind, hardware is the body — and IoT is what happens when they start having conversations." 
              </p>
              <p className="text-gray-600 dark:text-gray-400 mt-4">
                I believe that true innovation lies at the intersection of logic and physical reality — where code meets circuits, and ideas are not just written but wired into the world.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
