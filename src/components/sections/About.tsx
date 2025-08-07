import { motion } from "framer-motion";
import { FloatingCard } from "@/components/ui/floating-card";
import { Badge } from "@/components/ui/badge";
import { Code2, Zap, Cpu, Shield, Globe, Brain } from "lucide-react";

const skills = {
  "Languages": ["Python", "JavaScript", "TypeScript", "C++", "SQL", "C#"],
  "Frontend": ["React.js", "Next.js", "Flutter", "Bootstrap", "Tailwind CSS"],
  "Backend": ["Node.js", "Laravel", "Django", "Flask", "Unity"],
  "Cloud & DevOps": ["AWS", "GCP", "Docker", "CI/CD", "GitHub Actions"],
  "AI/ML": ["TensorFlow", "OpenCV", "LangChain", "LLMs", "RAG", "Prompt Engineering"],
  "Databases": ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "MariaDB"],
  "Security": ["Nmap", "Wireshark", "Burp Suite", "Metasploit"],
  "Tools": ["Git", "Figma", "Miro", "Adobe Creative Suite", "Jira"]
};

const achievements = [
  {
    icon: Code2,
    title: "Full-Stack Expert",
    description: "Developed 15+ production applications using modern tech stacks",
    metric: "15+ Apps"
  },
  {
    icon: Brain,
    title: "AI/ML Specialist", 
    description: "Published IEEE research paper on AI and security applications",
    metric: "IEEE Published"
  },
  {
    icon: Shield,
    title: "Security Focus",
    description: "Expert in cybersecurity tools and secure development practices", 
    metric: "Security+"
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Built platforms serving users across multiple countries",
    metric: "Worldwide"
  },
  {
    icon: Zap,
    title: "Performance Driven",
    description: "Optimized systems for 99.9% uptime and sub-second response times",
    metric: "99.9% Uptime"
  },
  {
    icon: Cpu,
    title: "DevOps Pipeline",
    description: "Automated CI/CD pipelines reducing deployment time by 80%",
    metric: "80% Faster"
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-glow">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Engineering software that matters through innovative solutions and cutting-edge technology
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <FloatingCard delay={0.1}>
            <h3 className="text-2xl font-bold mb-4 text-primary">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a <strong className="text-foreground">Software Engineer</strong> based in Houston, TX, 
                with extensive experience in <strong className="text-foreground">IT Support</strong>, 
                <strong className="text-foreground"> Web Development</strong>, and <strong className="text-foreground">DevOps</strong>.
              </p>
              <p>
                Currently working at <strong className="text-primary">Encore Pay</strong> in the fintech space, 
                I hold a B.S. in Computer Science and will begin my M.S. at 
                <strong className="text-primary"> Georgia Tech</strong> in Spring 2026.
              </p>
              <p>
                My tech journey spans developing full-stack platforms, automating business processes, 
                and supporting enterprise systems. I thrive on solving problems at scale, from building 
                secure e-commerce platforms to optimizing system uptime in financial institutions.
              </p>
            </div>
          </FloatingCard>

          <FloatingCard delay={0.2}>
            <h3 className="text-2xl font-bold mb-4 text-primary">What Drives Me</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I believe in <strong className="text-primary">"Engineering Software That Matters"</strong> - 
                building solutions that create real impact and drive meaningful change.
              </p>
              <p>
                My expertise lies in bridging the gap between complex technical requirements and 
                user-friendly solutions, with a focus on security, scalability, and performance.
              </p>
              <p>
                From publishing <strong className="text-accent">IEEE research papers</strong> to 
                developing nonprofit management platforms, I'm passionate about using technology 
                to solve real-world problems and make a positive impact.
              </p>
              <div className="flex gap-2 mt-4">
                <Badge variant="secondary">Houston, TX</Badge>
                <Badge variant="secondary">Available for Projects</Badge>
              </div>
            </div>
          </FloatingCard>
        </div>

        {/* Achievements Grid */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-8"
          >
            Key Achievements
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <FloatingCard key={achievement.title} delay={index * 0.1}>
                <div className="text-center">
                  <div className="inline-flex p-4 rounded-full gradient-primary mb-4">
                    <achievement.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{achievement.description}</p>
                  <div className="inline-flex px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                    {achievement.metric}
                  </div>
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-8"
          >
            Tech Stack & Expertise
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items], index) => (
              <FloatingCard key={category} delay={index * 0.1}>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs border-primary/30 hover:border-primary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}