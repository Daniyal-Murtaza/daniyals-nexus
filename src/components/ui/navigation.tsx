import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, Mail } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "glass backdrop-blur-md border-b border-primary/10" 
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold"
            >
              <span className="text-primary">Daniyal</span>
              <span className="text-foreground">Murtaza</span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground hover:text-primary transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </motion.button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="border-primary/50 hover:bg-primary/10"
                onClick={() => window.open("/resume.pdf", "_blank")}
              >
                <Download className="h-4 w-4 mr-2" />
                Resume
              </Button>
              <Button
                size="sm"
                className="gradient-primary"
                onClick={() => scrollToSection("#contact")}
              >
                <Mail className="h-4 w-4 mr-2" />
                Hire Me
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-background/95 backdrop-blur-lg"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Content */}
            <div className="relative z-50 container mx-auto px-4 pt-20">
              <div className="glass rounded-2xl p-8 space-y-6">
                
                {/* Menu Items */}
                <div className="space-y-4">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => scrollToSection(item.href)}
                      className="block w-full text-left text-xl font-medium text-foreground hover:text-primary transition-colors p-3 rounded-lg hover:bg-primary/10"
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </div>

                {/* Mobile CTA */}
                <div className="pt-6 border-t border-primary/20 space-y-3">
                  <Button
                    className="w-full gradient-primary"
                    onClick={() => scrollToSection("#contact")}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Get In Touch
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-primary/50"
                    onClick={() => window.open("/resume.pdf", "_blank")}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Resume
                  </Button>
                </div>

                {/* Contact Info */}
                <div className="pt-6 border-t border-primary/20 text-center">
                  <p className="text-sm text-muted-foreground">
                    Ready to collaborate?
                  </p>
                  <a
                    href="mailto:daniyalmurtaza77@gmail.com"
                    className="text-primary hover:underline"
                  >
                    daniyalmurtaza77@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}