
import { Navigation } from "@/components/Navigation";
import { TechBackground } from "@/components/TechBackground";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Resume = () => {
  const skills = {
    "SEO & Search Strategy": [
      "Search Engine Optimization (SEO)",
      "Keyword Research & Analysis",
      "Search Intent Analysis",
      "SERP Ranking Improvements"
    ],
    "On-page & Technical SEO": [
      "On-page SEO",
      "Technical SEO Fundamentals",
      "Internal Linking",
      "Meta Tag Optimization"
    ],
    "Off-page & Authority Building": [
      "Off-page SEO",
      "Link-building Strategy",
      "Content-led Outreach"
    ],
    "Content Writing & Copy": [
      "SEO Copywriting",
      "Script Writing",
      "Email Content",
      "Proofreading"
    ],
    "Content Strategy": [
      "Content Strategy & Planning",
      "Audience-focused Writing",
      "Conversion-oriented Content"
    ]
  };


  const experience = [
    {
      title: "Script Writer/Business Development",
      company: "Probox Media",
      period: "Apr 2025 - Present",
      achievements: [
        "Script Development and Execution: Led the ideation and conceptualization of a new age social media reels and voiceovers through influencer marketing as the sole Script Writer. Successfully aligned brand tone across beauty and furnishings sectors like Jawed Habib, D’opulence, Square Roots Clinic and Baba Glass respectively. Structured narratives and storyboards, ensuring clear visual flow, strong character development, and consistent pacing for screen and digital content.",

        "User & Market research: Performed in-depth market and competitor research to guide PR outreach, ensuring targeted media pitches aligned with current trends, audience interests, and publication fit. Focus startup founders and targeted PR campaigns that resonated with editorial calendars.",

        "Cross-functional Collaborations: Collaborated closely with marketing, design, and video teams to translate briefs into scripts with compelling CTAs, optimized for audience engagement and platform fit. Used industry-standard tools like Google Docs and Notion to manage script planning, real-time editing, and project organization from ideation to delivery.",

        "Press Release Content Management: Drafted compelling press releases, pitches, and founder bios tailored to media angles, industry relevance, and editorial standards. Collaborated with entrepreneurs and authors to manage PR efforts featured in Midday, Outlook and Times of India.",

        "CRM Management: Utilized CRM platforms like Google Sheets and Apollo to manage outreach pipelines, monitor response rates, and streamline campaign performance tracking."

      ]
    },
    {
      title: "Freelance Content Writer",
      company: "Content Whale",
      period: "Jun 2023 - Present",
      achievements: [
        "Content Strategy and Development: Led sprint planning and content development roadmap of 360+ articles and blogs, achieving 40%+ organic traffic in 1 month. Produced content tailored to technical subjects across finance, edtech and healthcare sectors & delivered versatility.",

        "Key metrics: Keyword Ranking Improvement, Backlinks Earned, Organic Traffic Growth",

        "Key Focused Content and Organic Growth: Used SEO strategies like keyword targeting, metadata optimization, and internal linking to drive measurable traffic growth.",

        "Keyword Research and on-page optimization techniques: Designed and implemented SEO practices such as meta tag writing, readability improvements, and link structures to boost SERP performance.",

        "Content for Renowned Brands: Developed content for 15+ brands including True caller, Great Lakes Institute, Propelld, Up Grad, Chegg and Apollo Fertility and built credibility and brand engagement for major players in tech, education, and healthcare through tailored, research-driven content.",

        "Cross-functional Collaboration: Ensured clarity, tone, and messaging aligned with brand voice while meeting tight deadlines across multiple content streams. Maintained positive feedback over 90%, maintaining content quality and brand concept."

      ]
    }
  ];

  const education = [
    {
      degree: "B.Com",
      institution: "Patna Women’s College",
      period: "2020-2023",
      details: "Specialization in Computing Systems and Microelectronic Systems • GPA: 3.8/4.3"
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
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">Professional Skills</CardTitle>
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
