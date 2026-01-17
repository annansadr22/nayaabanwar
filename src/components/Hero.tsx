
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Picture */}
        <div className="mb-8 animate-scale-in">
          <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-2xl">
            <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1750758638150-aba376165160?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Nayaab Anwar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 font-display">
            Nayaab Anwar
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8 font-medium">
            Software Developer | Instructor | FPGA Enthusiast
          </p>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about crafting scalable software and guiding future developers.
            Specialized in web frameworks, embedded systems, FPGA, IoT, and modern backend technologies.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/resume">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                📄 View Resume
              </Button>
            </Link>
            
            <Link to="/projects">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                🚀 Explore Projects
              </Button>
            </Link>
            
            <a
              href="https://www.linkedin.com/in/nayaabanwar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-purple-600 text-purple-600 dark:text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                🔗 Connect on LinkedIn
              </Button>
            </a>
            
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-green-600 text-green-600 dark:text-green-400 hover:bg-green-600 hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                ✉️ Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
