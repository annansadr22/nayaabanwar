
import { Badge } from "@/components/ui/badge";

export function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "JavaScript", "Java", "C++", "SQL"]
    },
    {
      category: "Web Frameworks",
      skills: ["Spring Boot", "FastAPI", "Django", "Flask", "Node.js", "Express", "REST APIs"]
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "Azure", "Oracle", "Git", "Custom Vision"]
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL"]
    },
    {
      category: "Tools",
      skills: ["VS Code", "Eclipse", "IntelliJ", "Postman" ]
    },
    {
      category: "Hardware & Embedded Systems",
      skills: ["Xilinx Vivado", "ModelSim", "QuestaSim", "Verilog", "VHDL", "Arduino" ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit spanning  software development, and hardware design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.category}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                {category.category}
              </h3>
              
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-700 text-gray-800 dark:text-gray-200 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-800/30 dark:hover:to-purple-800/30 transition-all duration-300 transform hover:scale-105 px-3 py-1 text-sm font-medium rounded-full"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
