import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "devguerreiro@icloud.com",
    href: "mailto:devguerreiro@icloud.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "@devguerreiro",
    href: "https://linkedin.com/in/devguerreiro",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@devguerreiro",
    href: "https://github.com/devguerreiro",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(217_91%_60%_/_0.1),_transparent_60%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-sm uppercase tracking-wider text-primary mb-3">
            Contact
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h3>
          <p className="text-muted-foreground text-lg mb-12">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a chat about technology.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-card/50 border border-border hover:border-primary/30 transition-all duration-300 hover:scale-105"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <link.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-center">
                    <p className="font-medium mb-1 group-hover:text-primary transition-colors">
                      {link.label}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {link.value}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </a>
            ))}
          </div>

          <Button variant="hero" size="xl" asChild>
            <a href="mailto:devguerreiro@icloud.com">
              <Mail className="mr-2" />
              Send me a message
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
