import { Code2, Server, Cloud } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Building responsive, accessible interfaces with modern frameworks",
  },
  {
    icon: Server,
    title: "Backend Systems",
    description: "Designing robust APIs and scalable server architectures",
  },
  {
    icon: Cloud,
    title: "Cloud Technologies",
    description:
      "Deploying and managing applications on modern cloud platforms",
  },
];

const START_YEAR = 2019;

const AboutSection = () => {
  const yearsOfExperience = new Date().getFullYear() - START_YEAR;

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo Placeholder */}
          <div className="relative">
            <img
              src="https://avatars.githubusercontent.com/u/50927696"
              className="w-full rounded"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl px-4 py-3 card-glow">
              <p className="text-sm text-muted-foreground">Experience</p>
              <p className="text-2xl font-bold gradient-text">
                {yearsOfExperience}+ Years
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-sm uppercase tracking-wider text-primary mb-3">
              About Me
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Passionate about crafting{" "}
              <span className="gradient-text">
                exceptional digital experiences
              </span>
            </h3>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              I'm a software engineer with a deep passion for building products
              that make a difference. With expertise spanning frontend
              development, backend systems, and cloud technologies, I bring
              ideas to life through clean code and thoughtful architecture.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              When I'm not coding, you'll find me exploring new technologies or
              at events from developer community or startup community.
            </p>

            {/* Highlights */}
            <div className="grid gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors duration-300"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
