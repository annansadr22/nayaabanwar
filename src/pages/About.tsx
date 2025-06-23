
import { Navigation } from "@/components/Navigation";
import { TechBackground } from "@/components/TechBackground";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const timeline = [
    {
      year: "2024",
      title: "Senior AI/ML Engineer",
      company: "Tech Innovation Labs",
      description: "Leading machine learning initiatives and developing cutting-edge AI solutions for enterprise clients."
    },
    {
      year: "2022",
      title: "Machine Learning Engineer",
      company: "DataFlow Systems",
      description: "Built and deployed scalable ML pipelines, improving model accuracy by 35% across multiple products."
    },
    {
      year: "2021",
      title: "AI Research Intern",
      company: "Neural Networks Institute",
      description: "Researched novel deep learning architectures for natural language processing and computer vision."
    },
    {
      year: "2020",
      title: "M.Tech in Computer Science",
      company: "Indian Institute of Technology",
      description: "Specialized in Artificial Intelligence and Machine Learning with thesis on transformer architectures."
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
              I'm a passionate AI/ML engineer with a deep fascination for artificial intelligence and its potential to transform the world. 
              With over 3 years of experience in machine learning, I specialize in developing intelligent systems that solve real-world problems.
            </p>
          </div>

          {/* Personal Story */}
          <Card className="mb-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">My Journey</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600 dark:text-gray-300 leading-relaxed">
              <p className="mb-4">
                My journey into AI began during my undergraduate studies when I first encountered the elegance of neural networks. 
                The idea that machines could learn and adapt fascinated me, leading me to pursue advanced studies in machine learning and AI.
              </p>
              <p className="mb-4">
                Based in Pune, India, I've had the privilege of working with cutting-edge technologies including deep learning frameworks, 
                cloud computing platforms, and big data systems. My work spans from research and development to production deployment of AI solutions.
              </p>
              <p>
                When I'm not coding or training models, you'll find me exploring the latest research papers, contributing to open-source projects, 
                or sharing knowledge through technical blogs and community talks.
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
                "The best way to predict the future is to invent it. And the best way to invent it is through AI." 
                - My personal philosophy that drives every project I work on.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mt-4">
                I believe that AI should augment human intelligence, not replace it. That's why I focus on building ethical and transparent AI systems.
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
