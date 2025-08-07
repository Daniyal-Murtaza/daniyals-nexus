import { motion } from "framer-motion";
import { FloatingCard } from "@/components/ui/floating-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send, 
  MessageCircle,
  Calendar,
  ExternalLink
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "daniyalmurtaza77@gmail.com",
    href: "mailto:daniyalmurtaza77@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (832) 988-6552",
    href: "tel:+18329886552"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Houston, TX, USA",
    href: "https://maps.google.com/?q=Houston,TX"
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Daniyal-Murtaza",
    username: "@Daniyal-Murtaza"
  },
  {
    icon: Linkedin,
    label: "LinkedIn", 
    href: "https://www.linkedin.com/in/daniyal-murtaza/",
    username: "daniyal-murtaza"
  }
];

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 relative">
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
            Let's <span className="text-primary">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate, hire, or just chat about tech? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Information */}
          <div className="space-y-8">
            
            {/* Introduction */}
            <FloatingCard delay={0.1}>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary mb-4">Get In Touch</h3>
                <p className="text-muted-foreground">
                  I'm currently open to new opportunities, freelance projects, and collaborations. 
                  Whether you have a project in mind, want to hire me, or just want to discuss technology, 
                  I'm always excited to connect with fellow developers and innovators.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-primary/20 text-primary">Available for Work</Badge>
                  <Badge variant="secondary">Houston, TX</Badge>
                  <Badge variant="secondary">Remote Friendly</Badge>
                </div>
              </div>
            </FloatingCard>

            {/* Contact Details */}
            <FloatingCard delay={0.2}>
              <div className="space-y-6">
                <h4 className="text-xl font-semibold">Contact Information</h4>
                <div className="space-y-4">
                  {contactInfo.map((contact) => (
                    <motion.a
                      key={contact.label}
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                      whileHover={{ x: 5 }}
                    >
                      <div className="p-2 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                        <contact.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{contact.label}</p>
                        <p className="font-medium group-hover:text-primary transition-colors">
                          {contact.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </FloatingCard>

            {/* Social Links */}
            <FloatingCard delay={0.3}>
              <div className="space-y-6">
                <h4 className="text-xl font-semibold">Follow Me</h4>
                <div className="space-y-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                      whileHover={{ x: 5 }}
                    >
                      <div className="p-2 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                        <social.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium group-hover:text-primary transition-colors">
                          {social.label}
                        </p>
                        <p className="text-sm text-muted-foreground">{social.username}</p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary ml-auto" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </FloatingCard>

            {/* Quick Actions */}
            <FloatingCard delay={0.4}>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold">Quick Actions</h4>
                <div className="space-y-3">
                  <Button asChild className="w-full justify-start gradient-primary">
                    <a href="mailto:daniyalmurtaza77@gmail.com?subject=Project Inquiry">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Send Email Directly
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full justify-start border-primary/50">
                    <a href="tel:+18329886552">
                      <Phone className="h-4 w-4 mr-2" />
                      Schedule a Call
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full justify-start border-primary/50">
                    <a href="https://calendly.com/daniyalmurtaza77" target="_blank" rel="noopener noreferrer">
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Meeting
                    </a>
                  </Button>
                </div>
              </div>
            </FloatingCard>

          </div>

          {/* Contact Form */}
          <FloatingCard delay={0.5}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-primary">Send a Message</h3>
                <p className="text-sm text-muted-foreground">
                  Fill out the form below and I'll get back to you within 24 hours.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-secondary/50 border-primary/30 focus:border-primary"
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-secondary/50 border-primary/30 focus:border-primary"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-secondary/50 border-primary/30 focus:border-primary"
                  placeholder="What's this about?"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-secondary/50 border-primary/30 focus:border-primary min-h-[120px]"
                  placeholder="Tell me about your project, idea, or just say hello!"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full gradient-primary hover:scale-[1.02] transition-transform disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                I'll respond within 24 hours. Your information is kept private and secure.
              </p>
            </form>
          </FloatingCard>

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 glass rounded-2xl"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Start Something Amazing?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's bring your ideas to life with cutting-edge technology and thoughtful engineering. 
            From concept to deployment, I'm here to help build software that truly matters.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gradient-primary">
              <a href="mailto:daniyalmurtaza77@gmail.com?subject=Let's%20Build%20Something%20Amazing">
                <Mail className="h-4 w-4 mr-2" />
                Start a Project
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary/50">
              <a href="/resume.pdf" download>
                Download Resume
              </a>
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}