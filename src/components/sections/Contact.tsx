import { ScrollReveal } from "../ScrollReveal";
import { useRef, useState } from "react";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    setLoading(true);

    const formData = new FormData(formRef.current);

    try {
      const res = await fetch("https://formspree.io/f/meerwnrj", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setSent(true);
        formRef.current.reset();
      } else {
        throw new Error("Failed");
      }
    } catch (err) {
      console.error(err);
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
                    <input
                      name="name"
                      required
                      placeholder="Full Name"
                      className="w-full bg-zinc-700 border border-zinc-600 rounded-md p-4 text-white"
                    />

                    <input
                      name="email"
                      required
                      type="email"
                      placeholder="Email"
                      className="w-full bg-zinc-700 border border-zinc-600 rounded-md p-4 text-white"
                    />

                    <input
                      name="organization"
                      placeholder="Organization"
                      className="md:col-span-2 w-full bg-zinc-700 border border-zinc-600 rounded-md p-4 text-white"
                    />
                  </div>

                  <textarea
                    name="message"
                    required
                    placeholder="Message"
                    className="w-full bg-zinc-700 border border-zinc-600 rounded-md p-4 text-white min-h-[160px]"
                  />

                  {/* Optional: disable captcha */}
                  <input type="hidden" name="_captcha" value="false" />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full md:w-auto bg-emerald-400 text-zinc-900 px-12 py-4 rounded-md text-xs font-bold uppercase tracking-[0.2em]"
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
