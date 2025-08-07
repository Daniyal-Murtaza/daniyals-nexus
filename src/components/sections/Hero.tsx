import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import developerAvatar from "@/assets/developer-avatar.jpg";

const roles = [
  "Software Engineer",
  "AI/ML Specialist", 
  "Full-Stack Developer",
  "IEEE Published Author",
  "DevOps Engineer"
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Daniyal-Murtaza",
      label: "GitHub"
    },
    {
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/daniyal-murtaza/",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:daniyalmurtaza77@gmail.com",
      label: "Email"
    }
  ];

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Greeting */}
            <div className="space-y-2">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-primary text-lg font-medium"
              >
                👋 Hello, I'm
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl lg:text-7xl font-bold text-glow"
              >
                Daniyal
                <span className="block text-primary">Murtaza</span>
              </motion.h1>
            </div>

            {/* Rotating roles */}
            <div className="h-16 flex items-center">
              <motion.h2
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl lg:text-3xl text-muted-foreground font-light"
              >
                {roles[currentRole]}
                <span className="typing-cursor text-accent ml-1" />
              </motion.h2>
            </div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
            >
              Passionate Software Engineer with a proven record in secure full-stack development, 
              API design, DevOps, and AI/ML integrations. Currently engineering software at{" "}
              <span className="text-primary font-medium">Encore Pay</span> while pursuing my 
              Master's at <span className="text-primary font-medium">Georgia Tech</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="gradient-primary hover:scale-105 transition-transform neon-glow">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Projects
              </Button>
              
              <Button variant="outline" size="lg" className="glass border-primary/50 hover:bg-primary/10">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass p-3 rounded-full hover:bg-primary/20 transition-colors neon-glow"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Avatar/Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Floating rings */}
              <div className="absolute -inset-4">
                <div className="w-full h-full border-2 border-primary/30 rounded-full animate-spin-slow" />
              </div>
              <div className="absolute -inset-8">
                <div className="w-full h-full border border-accent/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
              </div>
              
              {/* Avatar */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <img
                  src={developerAvatar}
                  alt="Daniyal Murtaza - Software Engineer"
                  className="w-80 h-80 rounded-full object-cover glass neon-glow"
                />
              </motion.div>
              
              {/* Floating particles around avatar */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-primary rounded-full"
                    style={{
                      left: `${20 + i * 60}%`,
                      top: `${10 + i * 15}%`,
                    }}
                    animate={{
                      y: [-20, 20],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 2 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-primary rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}