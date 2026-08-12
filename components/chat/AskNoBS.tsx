"use client";

import { useCallback, useEffect, useState } from "react";
import { LoaderCircle, X } from "lucide-react";

const WIDGET_ID = "6a7cf598187766e8c206c450";
const SCRIPT_ID = "leadconnector-chat-loader";

declare global {
  interface Window {
    leadConnector?: {
      chatWidget?: {
        openWidget?: () => void;
        closeWidget?: () => void;
        isActive?: () => boolean;
      };
    };
  }
}

function hideLeadConnectorLauncher() {
  const selectors = [
    ".lc-widget-launcher",
    ".ghl-chat-bubble",
    ".lc-chat-widget-launcher",
    "[class*='chat-launcher']",
  ];

  for (const selector of selectors) {
    document.querySelectorAll<HTMLElement>(selector).forEach((element) => {
      element.style.setProperty("display", "none", "important");
      element.style.setProperty("visibility", "hidden", "important");
      element.style.setProperty("pointer-events", "none", "important");
    });
  }
}

export default function AskNoBS() {
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let attempts = 0;

    const detectReady = () => {
      if (cancelled) return;
      const widget = window.leadConnector?.chatWidget;
      if (widget?.openWidget) {
        setReady(true);
        hideLeadConnectorLauncher();
        return;
      }
      attempts += 1;
      if (attempts < 80) window.setTimeout(detectReady, 250);
    };

    if (!document.getElementById(SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = "https://widgets.leadconnectorhq.com/loader.js";
      script.async = true;
      script.dataset.resourcesUrl = "https://widgets.leadconnectorhq.com/chat-widget/loader.js";
      script.dataset.widgetId = WIDGET_ID;
      script.addEventListener("load", detectReady, { once: true });
      document.body.appendChild(script);
    } else {
      detectReady();
    }

    const observer = new MutationObserver(hideLeadConnectorLauncher);
    observer.observe(document.body, { childList: true, subtree: true });
    const delayedPasses = [500, 1500, 3000, 6000].map((delay) =>
      window.setTimeout(hideLeadConnectorLauncher, delay),
    );

    return () => {
      cancelled = true;
      observer.disconnect();
      delayedPasses.forEach(window.clearTimeout);
    };
  }, []);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      window.leadConnector?.chatWidget?.closeWidget?.();
      setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  const toggleWidget = useCallback(() => {
    const widget = window.leadConnector?.chatWidget;
    if (!widget?.openWidget) return;

    if (open) {
      widget.closeWidget?.();
      setOpen(false);
    } else {
      widget.openWidget();
      setOpen(true);
    }
    window.setTimeout(hideLeadConnectorLauncher, 100);
  }, [open]);

  return (
    <div className="fixed bottom-[58px] right-3 z-[90] sm:bottom-[62px] sm:right-6">
      <button
        type="button"
        onClick={toggleWidget}
        disabled={!ready}
        className="ask-nobs-fab group relative grid h-[76px] w-[76px] cursor-pointer place-items-center overflow-hidden rounded-full border-2 border-white/25 bg-white/[.06] shadow-[0_18px_60px_rgba(0,0,0,.55),0_0_28px_rgba(46,168,255,.22)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 hover:scale-105 hover:border-electric/70 disabled:cursor-wait disabled:opacity-80"
        aria-label={!ready ? "Loading Ask No BS live chat" : open ? "Close Ask No BS live chat" : "Open Ask No BS live chat"}
        aria-expanded={open}
        aria-controls="leadconnector-chat-widget"
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
          {!ready ? (
            <LoaderCircle className="mx-auto h-6 w-6 animate-spin text-electric" aria-hidden="true" />
          ) : open ? (
            <X className="mx-auto h-6 w-6" aria-hidden="true" />
          ) : (
            <>Ask<br /><span className="text-electric">No</span> <span className="text-signal">BS</span></>
          )}
        </span>
      </button>
    </div>
  );
}
