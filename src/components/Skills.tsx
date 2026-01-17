import { Badge } from "@/components/ui/badge";

export function Skills() {
  const skills = [
    "Search Engine Optimization (SEO)",
    "Keyword Research & Analysis",
    "On-page SEO",
    "Off-page SEO",
    "Technical SEO Fundamentals",
    "SERP Ranking Improvements",
    "Search Intent Analysis",
    "SEO Copywriting",
    "Script Writing",
    "Proofreading",
    "Content Strategy & Planning",
    "Email Content"
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A focused skill set centered on SEO-driven content, strategy, and conversion-led writing
          </p>
        </div>

        {/* Single Centered Card */}
        <div className="flex justify-center">
          <div
            className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              SEO & Content Writing Expertise
            </h3>

            <div className="flex flex-wrap gap-4 justify-center">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-700 text-gray-800 dark:text-gray-200 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-800/30 dark:hover:to-purple-800/30 transition-all duration-300 transform hover:scale-105 px-4 py-2 text-sm font-medium rounded-full"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
