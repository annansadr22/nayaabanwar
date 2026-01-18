
import { Navigation } from "@/components/Navigation";
import { TechBackground } from "@/components/TechBackground";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const timeline = [
    {
      year: "April 2025 - Present",
      title: "Script Writer/Business Development ",
      company: "Probox Media",
      description: "Empowering future developers while building scalable software solutions at NxtWave NIAT."
    },
    {
      year: "June 2023 - Present",
      title: "Freelance Content Writer",
      company: "Content Whale",
      description: "Developed the backend for an ML-powered music generation prototype using Java."
    },
    {
      year: "2020-2023",
      title: "B.Com",
      company: "Patna Women’s College",
      description: "Specialized in Computing Systems and Microelectronic Systems."
    },
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
              I’m a passionate content strategist and SEO writer. I help brands grow visibility and engagement through strategic content that ranks and converts. My expertise spans SEO, keyword research, and content planning across edtech, finance, healthcare, real estate, and IT — all designed to support measurable business outcomes.
            </p>
          </div>

          {/* Personal Story */}
          <Card className="mb-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">My Journey</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600 dark:text-gray-300 leading-relaxed">
              <p className="mb-4">
                My professional journey in content writing and communication is rooted in a strong foundation of verbal articulation and interpersonal skills developed early on through debates, discussions, and academic engagements. These formative experiences instilled a deep appreciation for structured thinking, clarity, and effective expression—skills that continue to shape my work today.
              </p>
              <p className="mb-4">
                I formally began my content writing journey during my college years, where I transitioned from expressive writing to strategic, purpose-driven content creation. Over time, I developed the ability to research thoroughly, distil complex ideas, and present them in a clear, engaging, and audience-centric manner. This progression helped me understand that impactful content is not merely creative—it is analytical, intentional, and aligned with business objectives.
              </p>
              <p className="mb-4">
                As my experience grew, so did my exposure to diverse content formats and industries. I learned to adapt tone, messaging, and structure based on platform requirements and audience intent, enabling me to deliver content that informs, engages, and builds credibility. My work increasingly focused on value-driven narratives, where clarity and relevance take precedence over volume.
              </p>
              <p className="mb-4">
                Today, I view content writing as a strategic communication tool. It actively bridges information with influence. I continue to refine my craft through continuous learning and practical application, with a strong emphasis on precision, professionalism, and measurable impact.
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

          {/* Core Beliefs */}
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-0 shadow-2xl">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Core Beliefs</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 italic">
                "Writing is easy. Communicating clearly is the real skill." 
              </p>
              <p className="text-gray-600 dark:text-gray-400 mt-4">
                I believe strong content emerges when clarity meets context. When complex ideas are simplified and narratives are purposeful, every word serves a reason beyond filling space.
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
