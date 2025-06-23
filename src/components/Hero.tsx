
import { Button } from "@/components/ui/button";

export function Hero() {
  const handleAction = (action: string) => {
    console.log(`${action} clicked`);
    // Add specific functionality for each button later
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Picture */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
              alt="Annan Sadr"
              className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full border-4 border-white dark:border-gray-800 shadow-2xl object-cover"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20"></div>
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">
          Annan Sadr
        </h1>
        
        <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-12 font-light">
          AI Engineer | ML Researcher | Software Developer
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <Button
            onClick={() => handleAction("View Resume")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            📄 View Resume
          </Button>
          
          <Button
            onClick={() => handleAction("Explore Projects")}
            variant="outline"
            className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
          >
            🚀 Explore Projects
          </Button>
          
          <Button
            onClick={() => handleAction("Connect on LinkedIn")}
            variant="outline"
            className="border-2 border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
          >
            🔗 Connect on LinkedIn
          </Button>
          
          <Button
            onClick={() => handleAction("Get in Touch")}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            ✉️ Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
