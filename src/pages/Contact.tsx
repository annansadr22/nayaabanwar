
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { TechBackground } from "@/components/TechBackground";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message Sent Successfully! ✨",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });

    setFormData({ name: "", organization: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      label: "Email",
      value: "anwarnayaab@gmail.com",
      icon: "✉️"
    },
    {
      label: "Phone",
      value: "+91 93041 17553",
      icon: "📱"
    },
    {
      label: "Location",
      value: "Patna, India",
      icon: "📍"
    },
    {
      label: "LinkedIn",
      value: "https://www.linkedin.com/in/nayaabanwar/",
      icon: "💼"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 relative">
      <TechBackground animated={true} />
      <Navigation />
      
      <main className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Let’s talk about your next software or hardware project, explore collaboration in embedded systems or web development, or simply connect over our shared passion for building intelligent, real-world tech.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  action="https://formspree.io/f/xdaaavke"
                  method="POST"
                  className="space-y-6"
                >
                  {/* <input type="hidden" name="_redirect" value="#contact" /> */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700 dark:text-gray-300 font-medium">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organization" className="text-gray-700 dark:text-gray-300 font-medium">
                      Organization
                    </Label>
                    <Input
                      id="organization"
                      name="organization"
                      type="text"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="Company or organization"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 dark:text-gray-300 font-medium">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-700 dark:text-gray-300 font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project, collaboration idea, or just say hello..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform ${
                      isSubmitting ? 'scale-95' : 'hover:scale-105'
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <span>Send Message</span>
                        <span>🚀</span>
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-300">
                      <span className="text-2xl">{info.icon}</span>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">{info.label}</p>
                        <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-0 shadow-xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Quick Response</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    I typically respond to messages within 24 hours. For urgent inquiries, feel free to reach out via phone or LinkedIn.
                  </p>
                  <div className="flex space-x-3">
                    <a href="mailto:aanwarnayaab@gmail.com">
                      <Button variant="outline" size="sm" className="flex-1">
                        📧 Email
                      </Button>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/nayaabanwar/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm" className="flex-1">
                        💼 LinkedIn
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">🤝</div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Open to Opportunities</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Always interested in discussing high-impact SEO content, SaaS growth storytelling, and brand strategies that drive visibility, traffic, and conversions.
                  </p>
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

export default Contact;
