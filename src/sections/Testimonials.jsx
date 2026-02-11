import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Ayush consistently demonstrated strong Android development skills. His ability to implement Firebase authentication, real-time database sync, and clean Kotlin architecture was impressive for a student developer.",
    author: "Academic Project Mentor",
    role: "Computer Science Department",
    avatar:
      "https://cdn-icons-png.flaticon.com/512/149/149071.png"
  },
  {
    quote:
      "During the Blog App project, Ayush handled complete Android app architecture independently. The UI performance, API integration, and real-time features were production-level quality.",
    author: "Project Evaluation Panel",
    role: "Major Project Review Committee",
    avatar:
      "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
  {
    quote:
      "Ayush has strong problem-solving ability and quickly understands complex API flows. His Weather App showed excellent implementation of Retrofit, GPS location services and offline caching.",
    author: "Senior Lab Instructor",
    role: "Android Development Lab",
    avatar:
      "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
  {
    quote:
      "He writes clean, maintainable code and follows modern Android practices like View Binding, Coroutines and modular architecture. Very reliable in project collaborations.",
    author: "Peer Developer",
    role: "Computer Science Batchmate",
    avatar:
      "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
        w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="text-secondary-foreground text-sm font-medium
            tracking-wider uppercase animate-fade-in"
          >
            What People Say
          </span>

          <h2
            className="text-4xl md:text-5xl font-bold mt-4 mb-6
            animate-fade-in animation-delay-100 text-secondary-foreground"
          >
            Kind words from{" "}
            <span className="font-serif italic font-normal text-white">
              amazing people.
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                "{testimonials[activeIdx].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIdx].avatar}
                  alt={`${testimonials[activeIdx].author} avatar`}
                  loading="lazy"
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />

                <div>
                  <div className="font-semibold">
                    {testimonials[activeIdx].author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIdx].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                aria-label="Previous testimonial"
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    aria-label={`Go to testimonial ${idx + 1}`}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                aria-label="Next testimonial"
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};