
export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Resume", href: "#resume" },
    { name: "GitHub", href: "https://github.com", external: true },
    { name: "LinkedIn", href: "https://linkedin.com", external: true },
    { name: "Email", href: "mailto:annan.sadr@example.com", external: true }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Personal Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Annan Sadr</h3>
            <p className="text-gray-300 mb-1">AI/ML Engineer</p>
            <p className="text-gray-400 text-sm">Pune, India</p>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-3 text-gray-200">Get in Touch</h4>
            <div className="space-y-2">
              <p className="text-gray-300">
                <a href="mailto:annan.sadr@example.com" className="hover:text-blue-400 transition-colors duration-300">
                  annan.sadr@example.com
                </a>
              </p>
              <p className="text-gray-300">
                <a href="tel:+911234567890" className="hover:text-blue-400 transition-colors duration-300">
                  +91 12345 67890
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
            © {currentYear} Annan Sadr. All rights reserved. Built with passion for AI and technology.
          </p>
        </div>
      </div>
    </footer>
  );
}
