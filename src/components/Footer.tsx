
export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Resume", href: "https://drive.google.com/file/d/1opLDMFxtKVR4ukWMt8uvzM6iVSK9nvZk/view?usp=sharing", external: true },
    // { name: "GitHub", href: "https://github.com/annansadr22", external: true },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/nayaabanwar/", external: true },
    { name: "Email", href: "mailto:anwarnayaab@gmail.com", external: true }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Personal Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Nayaab Anwar</h3>
            <p className="text-gray-300 mb-1">Software Developer & Instructor</p>
            <p className="text-gray-400 text-sm">Patna, India</p>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-3 text-gray-200">Get in Touch</h4>
            <div className="space-y-2">
              <p className="text-gray-300">
                <a href="mailto:anwarnayaab@gmail.com" className="hover:text-blue-400 transition-colors duration-300">
                  anwarnayaab@gmail.com
                </a>
              </p>
              <p className="text-gray-300">
                <a href="tel:+919304117553" className="hover:text-blue-400 transition-colors duration-300">
                  +91 93041 17553
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-3 text-gray-200">Quick Links</h4>
            <div className="flex flex-wrap justify-center md:justify-end gap-4">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Nayaab Anwar. All rights reserved. Built with passion for Web Systems, IoT, and Embedded Intelligence.
          </p>
        </div>
      </div>
    </footer>
  );
}
