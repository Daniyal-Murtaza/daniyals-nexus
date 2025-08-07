import { motion } from "framer-motion";
import { FloatingCard } from "@/components/ui/floating-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Serve Pakistan Foundation",
    description: "A comprehensive nonprofit management platform built for Serve Pakistan Foundation with Firebase hosting. Features donation tracking, volunteer management, and event coordination.",
    tech: ["HTML", "CSS", "JavaScript", "Firebase"],
    category: "Web App",
    github: "https://github.com/Daniyal-Murtaza/ServePakistanFoundation",
    demo: "https://servepakistanfoundation.web.app",
    stars: 8,
    forks: 3,
    featured: true
  },
  {
    id: 2,
    title: "Asteroids Point Zero",
    description: "An improved version of the classic 90's arcade game 'The Asteroids'. Single-player space game with modern graphics and enhanced gameplay mechanics.",
    tech: ["C++", "OpenGL", "Game Development"],
    category: "Game",
    github: "https://github.com/Daniyal-Murtaza/asteroids-point-zero",
    stars: 12,
    forks: 5,
    featured: true
  },
  {
    id: 3,
    title: "Goruto - Anime Platform",
    description: "Full-fledged anime website with streaming capabilities, episode downloads, rating system, and discussion platform. Built with modern web technologies.",
    tech: ["CSS", "JavaScript", "PHP", "MySQL"],
    category: "Web App",
    github: "https://github.com/Daniyal-Murtaza/Goruto",
    stars: 15,
    forks: 7,
    featured: true
  },
  {
    id: 4,
    title: "Travel Booking Website",
    description: "Aesthetic travel website offering comprehensive travel information, booking capabilities, and safety guidelines for travelers.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    category: "Frontend",
    github: "https://github.com/Daniyal-Murtaza/Travel-website",
    stars: 6,
    forks: 2
  },
  {
    id: 5,
    title: "Charity Management System",
    description: "Desktop application for charity/donation/NGO management with intuitive UI/UX. Features donor management, fund tracking, and reporting systems.",
    tech: ["C#", "WPF", ".NET", "SQL Server"],
    category: "Desktop App",
    github: "https://github.com/Daniyal-Murtaza/charity-management-system",
    stars: 10,
    forks: 4
  },
  {
    id: 6,
    title: "Flying Over ITT",
    description: "Interactive graphics simulation where users can create and animate pigeons, bees, or butterflies with fascinating flight patterns and behaviors.",
    tech: ["C++", "Graphics", "Animation"],
    category: "Graphics",
    github: "https://github.com/Daniyal-Murtaza/Flying-Over-itt",
    stars: 7,
    forks: 3
  }
];

const categories = ["All", "Web App", "Game", "Frontend", "Desktop App", "Graphics"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 relative">
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
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work spanning web development, game creation, and system architecture
          </p>
        </motion.div>

        {/* Featured Projects Spotlight */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 text-center"
          >
            🌟 Spotlight Projects
          </motion.h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <FloatingCard key={project.id} delay={index * 0.2}>
                <div className="space-y-4">
                  {/* Project Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4" />
                          {project.stars}
                        </div>
                        <div className="flex items-center gap-1">
                          <GitFork className="h-4 w-4" />
                          {project.forks}
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      {project.demo && (
                        <Button size="sm" variant="ghost" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-primary/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4">
                    <Button asChild size="sm" className="flex-1 gradient-primary">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button asChild size="sm" variant="outline" className="flex-1 border-primary/50">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </FloatingCard>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap gap-2 p-2 glass rounded-lg">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "gradient-primary" : "hover:bg-primary/10"}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FloatingCard className="h-full">
                <div className="flex flex-col h-full space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary" className="text-xs">
                          {project.category}
                        </Badge>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3" />
                            {project.stars}
                          </div>
                          <div className="flex items-center gap-1">
                            <GitFork className="h-3 w-3" />
                            {project.forks}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-primary/20">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge variant="outline" className="text-xs border-primary/20">
                        +{project.tech.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-2">
                    <Button asChild size="sm" variant="ghost" className="flex-1">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button asChild size="sm" variant="ghost">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </FloatingCard>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            Want to see more? Check out my GitHub profile for additional projects and contributions.
          </p>
          <Button asChild size="lg" className="gradient-accent">
            <a href="https://github.com/Daniyal-Murtaza" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              View All Repositories
            </a>
          </Button>
        </motion.div>

      </div>
    </section>
  );
}