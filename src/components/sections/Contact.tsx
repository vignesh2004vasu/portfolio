import { ScrollReveal } from "../ScrollReveal";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setSent(true);
      formRef.current.reset();
    } catch (error) {
      console.error("Email failed:", error);
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-32 bg-zinc-800" id="contact">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-5">
              <span className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-6 block">
                Ready to Build?
              </span>
              <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tighter mb-8">
                Start a <br />
                Conversation
              </h2>
              <p className="text-zinc-400 leading-relaxed max-w-sm">
                Looking to elevate your digital presence or need an
                architectural consultation? Let's discuss your next breakthrough
                project.
              </p>
            </div>

            <div className="md:col-span-7">
              {sent ? (
                <p className="text-emerald-400">
                  Your message has been sent successfully.
                </p>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold px-1">
                        Full Name
                      </label>
                      <input
                        name="user_name"
                        required
                        className="w-full bg-zinc-700 border border-zinc-600 rounded-md p-4 text-white focus:outline-none focus:border-emerald-400/50"
                        placeholder="John Doe"
                        type="text"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold px-1">
                        Email
                      </label>
                      <input
                        name="user_email"
                        required
                        className="w-full bg-zinc-700 border border-zinc-600 rounded-md p-4 text-white focus:outline-none focus:border-emerald-400/50"
                        placeholder="john@email.com"
                        type="email"
                      />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold px-1">
                        Organization
                      </label>
                      <input
                        name="organization"
                        className="w-full bg-zinc-700 border border-zinc-600 rounded-md p-4 text-white"
                        placeholder="Nexus Interactive"
                        type="text"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold px-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      className="w-full bg-zinc-700 border border-zinc-600 rounded-md p-4 text-white min-h-[160px]"
                      placeholder="Describe your vision..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full md:w-auto bg-emerald-400 text-zinc-900 px-12 py-4 rounded-md text-xs font-bold uppercase tracking-[0.2em] hover:brightness-110 transition-all"
                  >
                    {loading ? "Sending..." : "Send Inquiry"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
