import { Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Blog App",
    description:
      "A full-stack social blogging Android application featuring secure authentication, blog publishing, search, likes, saved collections, and real-time synchronization using Firebase services.",
    image: "/projects/project1.jpg",
    tags: ["Kotlin", "XML", "Firebase", "Coroutines", "RecyclerView"],
    github: "https://github.com/ayush-anand-sharma/Blog-App",
  },
  {
    title: "Weather App",
    description:
      "A real-time weather Android app with GPS location tracking, manual city search, REST API integration using Retrofit, and offline caching using SharedPreferences.",
    image: "/projects/project2.jpg",
    tags: ["Kotlin", "Retrofit", "REST API", "Fused Location", "Lottie"],
    github: "https://github.com/ayush-anand-sharma/Weather-App",
  },
  {
    title: "Notes App",
    description:
      "A secure note-taking Android application with Firebase Authentication, real-time database sync, and modern Android UI components using AndroidX and RecyclerView.",
    image: "/projects/project3.jpg",
    tags: [
      "Kotlin",
      "Firebase Auth",
      "Realtime Database",
      "AndroidX",
      "RecyclerView",
    ],
    github:
      "https://github.com/ayush-anand-sharma/Sign-Up-And-Login-Note-App-Using-Firebase-",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Android Projects
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Mobile apps that
            <span className="font-serif italic font-normal text-white">
              {" "}
              solve real problems.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my Android applications featuring real-time data,
            secure authentication, REST API integration, and scalable backend
            architecture using Firebase and modern Android development tools.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* GitHub Overlay Only */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};