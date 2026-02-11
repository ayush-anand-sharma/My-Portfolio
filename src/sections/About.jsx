import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean & Scalable Code",
    description:
      "Writing maintainable Android code using Kotlin, modern architecture patterns, and best development practices.",
  },
  {
    icon: Rocket,
    title: "App Performance",
    description:
      "Building optimized Android applications with efficient API handling, caching, and smooth UI rendering.",
  },
  {
    icon: Users,
    title: "Backend Integration",
    description:
      "Developing apps with secure authentication, Firebase services, and seamless frontend–backend communication.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Exploring new Android technologies, improving problem-solving with DSA, and applying modern development standards.",
  },
];
export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

          <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
            <p>
              I'm a passionate Android developer focused on building scalable and
              high-performance mobile applications. My journey started with a strong
              interest in mobile technologies and software development, and it has
              evolved into hands-on experience with modern Android development tools
              and architectures.
            </p>
            <p>
              I specialize in Kotlin, Jetpack Compose, XML, and Firebase, developing
              applications ranging from real-time data-driven apps to full-featured
              social platforms. My approach combines clean, maintainable code with
              strong backend integration and secure authentication systems.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new Android technologies,
              improving my problem-solving skills through DSA, or working on personal
              projects to strengthen my development expertise.
            </p>
          </div>

          <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
            <p className="text-lg font-medium italic text-foreground">
              "My mission is to build reliable and scalable Android applications that are 
              not only efficient and secure, but also provide seamless user experiences — 
              apps that users trust and developers can easily maintain and scale."
            </p>
          </div>
        </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};