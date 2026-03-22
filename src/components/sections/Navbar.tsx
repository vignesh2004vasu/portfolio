import { TypingAnimation } from "@/components/ui/typing-animation";
import { ShinyButton } from "@/components/ui/shiny-button";
import { NavbarClient } from "../NavbarClient";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-white/5">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
        <a
          href="#about"
          className="text-xl font-heading font-bold tracking-tighter text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          <TypingAnimation startOnView>VIGNESH VASU</TypingAnimation>
        </a>
        <NavbarClient />
        <ShinyButton className="bg-gradient-to-r from-emerald-400 to-emerald-500 text-zinc-900 rounded-md text-xs font-bold uppercase tracking-wider">
          Let's Talk
        </ShinyButton>
      </div>
    </nav>
  );
}
