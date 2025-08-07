import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Heart, 
  Code2,
  ExternalLink,
  ArrowUp
} from "lucide-react";

const footerSections = [
  {
    title: "Quick Links",
    links: [
      { label: "About Me", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
      { label: "Resume", href: "/resume.pdf", external: true }
    ]
  },
  {
    title: "Technologies",
    links: [
      { label: "React & Next.js", href: "#" },
      { label: "Python & AI/ML", href: "#" },
      { label: "AWS & DevOps", href: "#" },
      { label: "Full-Stack Development", href: "#" }
    ]
  },
  {
    title: "Connect",
    links: [
      { label: "GitHub", href: "https://github.com/Daniyal-Murtaza", external: true },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/daniyal-murtaza/", external: true },
      { label: "Email", href: "mailto:daniyalmurtaza77@gmail.com", external: true },
      { label: "Phone", href: "tel:+18329886552", external: true }
    ]
  }
];

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/Daniyal-Murtaza",
    label: "GitHub",
    color: "hover:text-white"
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/daniyal-murtaza/",
    label: "LinkedIn", 
    color: "hover:text-blue-400"
  },
  {
    icon: Mail,
    href: "mailto:daniyalmurtaza77@gmail.com",
    label: "Email",
    color: "hover:text-red-400"
  },
  {
    icon: Phone,
    href: "tel:+18329886552",
    label: "Phone",
    color: "hover:text-green-400"
  }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.open(href, "_blank");
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-primary/20">
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(var(--primary))_0%,_transparent_70%)] opacity-5" />

      <div className="relative container mx-auto px-4">
        
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-primary mb-2">
                Daniyal Murtaza
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Software Engineer crafting digital solutions that matter. 
                From AI/ML to full-stack development, I build the future one line of code at a time.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-primary/20 text-primary text-xs">
                  Available for Hire
                </Badge>
                <Badge variant="outline" className="border-primary/30 text-xs">
                  Houston, TX
                </Badge>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-3"
            >
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Houston, TX, USA</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <a 
                  href="mailto:daniyalmurtaza77@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  daniyalmurtaza77@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <a 
                  href="tel:+18329886552"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +1 (832) 988-6552
                </a>
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + sectionIndex * 0.1 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-foreground">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group"
                    >
                      {link.label}
                      {link.external && (
                        <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social Links Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="py-8 border-t border-primary/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Follow me:</span>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2 rounded-full glass hover:bg-primary/20 transition-all ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                className="border-primary/50 hover:bg-primary/10"
                onClick={() => scrollToSection("#contact")}
              >
                Let's Work Together
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm text-muted-foreground flex items-center gap-2"
            >
              © {currentYear} Daniyal Murtaza. Built with
              <Heart className="h-4 w-4 text-red-500" />
              and
              <Code2 className="h-4 w-4 text-primary" />
              in Houston, TX
            </motion.p>

            {/* Back to Top */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <Badge variant="outline" className="border-primary/30 text-xs">
                Made with React + Three.js
              </Badge>
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="hover:bg-primary/10"
              >
                <ArrowUp className="h-4 w-4 mr-1" />
                Top
              </Button>
            </motion.div>
          </div>
        </div>

      </div>
    </footer>
  );
}