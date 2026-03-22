export function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-8 right-8 mix-blend-difference">
      <button
        onClick={scrollToTop}
        className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-full hover:border-emerald-400 hover:text-emerald-400 group transition-all"
        aria-label="Back to top"
      >
        ↑
      </button>
    </div>
  );
}
