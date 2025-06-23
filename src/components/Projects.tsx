
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  const projects = [
    {
      id: 1,
      name: "Neural Language Model",
      description: "Advanced transformer-based language model for natural language understanding with state-of-the-art performance on benchmark datasets.",
      tech: ["Python", "PyTorch", "Transformers", "CUDA", "Docker"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      name: "Computer Vision Pipeline",
      description: "End-to-end computer vision system for real-time object detection and classification using deep learning techniques.",
      tech: ["TensorFlow", "OpenCV", "Python", "Flask", "AWS"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      name: "AI Chat Assistant",
      description: "Intelligent conversational AI powered by large language models with context awareness and multi-turn dialogue capabilities.",
      tech: ["FastAPI", "LangChain", "Redis", "PostgreSQL", "React"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      name: "Data Analytics Platform",
      description: "Scalable data processing and analytics platform with real-time insights and machine learning-powered predictions.",
      tech: ["Apache Spark", "Kafka", "MongoDB", "Kubernetes", "Grafana"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      name: "Recommendation Engine",
      description: "Sophisticated recommendation system using collaborative filtering and deep learning for personalized user experiences.",
      tech: ["scikit-learn", "TensorFlow", "Pandas", "NumPy", "Redis"],
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      name: "MLOps Framework",
      description: "Complete MLOps solution for model versioning, automated training, deployment, and monitoring in production environments.",
      tech: ["MLflow", "Docker", "Jenkins", "AWS", "Terraform"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop"
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
            A showcase of my work in artificial intelligence, machine learning, and software development
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
