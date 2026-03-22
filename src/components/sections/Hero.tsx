import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";

export function Hero() {
  return (
    <section
      className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center px-8 max-w-7xl mx-auto"
      id="about"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, rgba(0, 223, 193, 0.05) 0%, rgba(19, 19, 19, 0) 70%)",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8">
          <span className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-6 block font-mono">
            Full Stack Developer
          </span>
          <h1 className="text-5xl md:text-8xl font-heading font-bold leading-[1.1] mb-8 tracking-tighter">
            <AnimatedGradientText>
              Building elegant digital experiences with React, Next.js, and
              modern web technologies.
            </AnimatedGradientText>
          </h1>
        </div>
      </div>

      
    </section>
  );
}
