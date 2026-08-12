"use client";

import { useEffect, useRef, useState } from "react";
import { Droplets, Phone, Send, X } from "lucide-react";
import { site } from "@/lib/data/site";

type Message = { from: "bot" | "user"; text: string };

const quickReplies = ["Get a free quote", "Which service do I need?", "Where do you work?"];

function answerFor(input: string) {
  const q = input.toLowerCase();
  if (q.includes("quote") || q.includes("price") || q.includes("cost")) {
    return "The fastest way to get an accurate quote is to send your address, the surfaces you want cleaned, and a few photos if you have them. Use the free quote form or call or text 843-321-9345.";
  }
  if (q.includes("roof") || q.includes("black streak")) {
    return "Roof streaks are usually gloeocapsa magma. We use a low-pressure roof-safe treatment, not destructive high pressure. I can point you to roof cleaning details or help you request a quote.";
  }
  if (q.includes("service") || q.includes("need") || q.includes("green") || q.includes("algae")) {
    return "House siding and delicate exterior surfaces usually need soft washing. Concrete and durable flatwork can take controlled pressure. Roofs need a dedicated low-pressure treatment. Tell us what surface you are looking at and we will recommend the right method.";
  }
  if (q.includes("where") || q.includes("area") || q.includes("location") || q.includes("serve")) {
    return "No BS serves Bluffton, Hilton Head Island, Beaufort, Okatie, Hardeeville, Ridgeland, and nearby Lowcountry communities.";
  }
  if (q.includes("porch") || q.includes("screen")) {
    return "Screened porches need a gentler approach for pollen, mildew, frames, and screens. No BS offers dedicated screened porch cleaning without blasting the mesh.";
  }
  return "I can help with services, service areas, roof streaks, soft washing, concrete cleaning, screened porches, or getting a free quote. For a job-specific answer, call or text 843-321-9345.";
}

export default function AskNoBS() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: "Ask me what to clean, which method fits the surface, whether we serve your community, or how to get a free quote." },
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const submit = (value = input) => {
    const trimmed = value.trim();
    if (!trimmed || typing) return;
    setMessages((m) => [...m, { from: "user", text: trimmed }]);
    setInput("");
    setTyping(true);
    window.setTimeout(() => {
      setMessages((m) => [...m, { from: "bot", text: answerFor(trimmed) }]);
      setTyping(false);
    }, 550);
  };

  return (
    <div className="fixed bottom-[58px] right-3 z-[90] sm:bottom-[62px] sm:right-6">
      {open && (
        <section className="mb-4 flex h-[min(590px,calc(100svh-150px))] w-[min(390px,calc(100vw-24px))] origin-bottom-right flex-col overflow-hidden rounded-[26px] border border-white/15 bg-[#060a11]/95 shadow-[0_30px_100px_rgba(0,0,0,.75),0_0_45px_rgba(46,168,255,.18)] backdrop-blur-2xl" aria-label="Ask No BS chat">
          <header className="relative overflow-hidden border-b border-white/10 bg-gradient-to-r from-signal/25 via-[#07111f] to-electric/25 p-5">
            <div className="absolute -right-6 -top-8 h-28 w-28 rounded-full bg-electric/20 blur-3xl" aria-hidden="true" />
            <div className="relative flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-electric/40 bg-electric/15 text-electric">
                  <Droplets className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-hero text-xl uppercase tracking-tight text-white">Ask No BS</p>
                  <p className="font-mono-hud text-[10px] uppercase tracking-[.18em] text-electric">Cleaning answers, no runaround</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="cursor-pointer rounded-lg p-2 text-mist transition-colors hover:bg-white/10 hover:text-white" aria-label="Close Ask No BS">
                <X className="h-5 w-5" />
              </button>
            </div>
          </header>

          <div className="flex-1 space-y-3 overflow-y-auto p-4" aria-live="polite">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[86%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${m.from === "user" ? "rounded-br-sm bg-electric/90 text-ink" : "rounded-bl-sm border border-white/10 bg-white/[.06] text-chrome"}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex gap-1 rounded-2xl rounded-bl-sm border border-white/10 bg-white/[.06] px-4 py-3 text-electric" aria-label="Ask No BS is typing">
                {[0, 1, 2].map((n) => <span key={n} className="h-1.5 w-1.5 animate-pulse rounded-full bg-current" style={{ animationDelay: `${n * 120}ms` }} />)}
              </div>
            )}
            <div ref={endRef} />
          </div>

          {messages.length < 3 && (
            <div className="flex flex-wrap gap-2 px-4 pb-3">
              {quickReplies.map((q) => (
                <button key={q} onClick={() => submit(q)} className="cursor-pointer rounded-full border border-electric/25 bg-electric/[.07] px-3 py-1.5 text-xs font-bold text-electric transition-colors hover:border-signal/50 hover:text-signal">
                  {q}
                </button>
              ))}
            </div>
          )}

          <form onSubmit={(e) => { e.preventDefault(); submit(); }} className="border-t border-white/10 p-3">
            <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-black/25 p-2 focus-within:border-electric/60">
              <input value={input} onChange={(e) => setInput(e.target.value)} className="min-w-0 flex-1 bg-transparent px-2 text-sm text-white outline-none placeholder:text-mist" placeholder="Ask about your property..." aria-label="Message Ask No BS" />
              <button type="submit" className="grid h-10 w-10 cursor-pointer place-items-center rounded-lg bg-electric/90 text-ink transition-colors hover:bg-signal hover:text-white" aria-label="Send message">
                <Send className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-2 flex items-center justify-between px-1">
              <span className="text-[10px] text-mist">AI answers use verified No BS site information.</span>
              <a href={site.phoneHref} className="flex items-center gap-1 text-[10px] font-bold text-electric hover:text-signal"><Phone className="h-3 w-3" />Call</a>
            </div>
          </form>
        </section>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="ask-nobs-fab group relative grid h-[88px] w-[88px] cursor-pointer place-items-center overflow-hidden rounded-full border-2 border-white/25 bg-white/[.06] shadow-[0_18px_60px_rgba(0,0,0,.55),0_0_28px_rgba(46,168,255,.22)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 hover:scale-105 hover:border-electric/70"
        aria-label={open ? "Close Ask No BS" : "Open Ask No BS"}
        aria-expanded={open}
      >
        <span className="ask-bubble ask-bubble-one" aria-hidden="true">🫧</span>
        <span className="ask-bubble ask-bubble-two" aria-hidden="true">🫧</span>
        <span className="ask-bubble ask-bubble-three" aria-hidden="true">🫧</span>
        <span className="ask-bubble ask-bubble-four" aria-hidden="true">🫧</span>
        <span className="ask-bubble ask-bubble-five" aria-hidden="true">🫧</span>
        <span className="ask-bubble ask-bubble-six" aria-hidden="true">🫧</span>
        <span className="ask-bubble ask-bubble-seven" aria-hidden="true">🫧</span>
        <span className="ask-bubble ask-bubble-eight" aria-hidden="true">🫧</span>
        <span className="ask-bubble ask-bubble-nine" aria-hidden="true">🫧</span>
        <span className="ask-bubble ask-bubble-ten" aria-hidden="true">🫧</span>
        <span className="ask-bubble ask-bubble-eleven" aria-hidden="true">🫧</span>
        <span className="ask-bubble ask-bubble-twelve" aria-hidden="true">🫧</span>
        <span className="relative z-10 max-w-[68px] text-center font-mono-hud text-[14px] font-black uppercase leading-[0.92] tracking-[-0.04em] text-white drop-shadow-[0_2px_7px_rgba(0,0,0,.85)]">
          {open ? <X className="mx-auto h-6 w-6" /> : <>Ask<br /><span className="text-electric">No</span> <span className="text-signal">BS</span></>}
        </span>
      </button>
    </div>
  );
}
