"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

const WIDGET_ID = "6a7cf598187766e8c206c450";
const SCRIPT_ID = "leadconnector-chat-loader";
const AVATAR_URL = "/chat/ask-no-bs-avatar.webp";

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

function walkShadowRoots(root: Document | ShadowRoot, action: (root: Document | ShadowRoot) => void) {
  action(root);
  root.querySelectorAll<HTMLElement>("*").forEach((element) => {
    if (element.shadowRoot) walkShadowRoots(element.shadowRoot, action);
  });
}

function customizeLeadConnectorWidget() {
  const launcherSelectors = [
    ".lc-widget-launcher",
    ".ghl-chat-bubble",
    ".lc-chat-widget-launcher",
    ".lc_text-widget--bubble",
    "[class*='chat-launcher']",
  ];

  walkShadowRoots(document, (root) => {
    launcherSelectors.forEach((selector) => {
      root.querySelectorAll<HTMLElement>(selector).forEach((element) => {
        element.style.setProperty("display", "none", "important");
        element.style.setProperty("visibility", "hidden", "important");
        element.style.setProperty("pointer-events", "none", "important");
      });
    });

    root.querySelectorAll<HTMLImageElement>(
      "img.lc_text-widget_prompt--avatar, img.header-circular-image, img.thumbnail-img",
    ).forEach((image) => {
      image.src = AVATAR_URL;
      image.alt = "Ask No BS live chat assistant";
      image.style.setProperty("object-fit", "cover");
      image.style.setProperty("object-position", "center");
    });
  });
}

export default function AskNoBS() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const observerRef = useRef<MutationObserver | null>(null);
  const pollRef = useRef<number | null>(null);

  const openWhenReady = useCallback(() => {
    let attempts = 0;
    const detect = () => {
      const widget = window.leadConnector?.chatWidget;
      if (widget?.openWidget) {
        setLoading(false);
        customizeLeadConnectorWidget();
        widget.openWidget();
        setOpen(true);
        [100, 500, 1200].forEach((delay) => window.setTimeout(customizeLeadConnectorWidget, delay));
        return;
      }
      attempts += 1;
      if (attempts < 80) pollRef.current = window.setTimeout(detect, 250);
      else setLoading(false);
    };
    detect();
  }, []);

  const loadWidget = useCallback(() => {
    if (loading) return;
    setLoading(true);

    if (!observerRef.current) {
      observerRef.current = new MutationObserver(customizeLeadConnectorWidget);
      observerRef.current.observe(document.body, { childList: true, subtree: true });
    }

    if (!document.getElementById(SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = "https://widgets.leadconnectorhq.com/loader.js";
      script.async = true;
      script.dataset.resourcesUrl = "https://widgets.leadconnectorhq.com/chat-widget/loader.js";
      script.dataset.widgetId = WIDGET_ID;
      script.addEventListener("load", openWhenReady, { once: true });
      document.body.appendChild(script);
    } else {
      openWhenReady();
    }
  }, [loading, openWhenReady]);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      window.leadConnector?.chatWidget?.closeWidget?.();
      setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => {
      window.removeEventListener("keydown", close);
      observerRef.current?.disconnect();
      if (pollRef.current) window.clearTimeout(pollRef.current);
    };
  }, []);

  const toggleWidget = useCallback(() => {
    const widget = window.leadConnector?.chatWidget;
    if (!widget?.openWidget) {
      loadWidget();
      return;
    }

    const isWidgetOpen = widget.isActive?.() ?? open;
    if (isWidgetOpen) {
      widget.closeWidget?.();
      setOpen(false);
    } else {
      widget.openWidget();
      setOpen(true);
    }
    [100, 500, 1200].forEach((delay) => window.setTimeout(customizeLeadConnectorWidget, delay));
  }, [loadWidget, open]);

  return (
    <div className="fixed bottom-[58px] right-3 z-[2147483647] sm:bottom-[62px] sm:right-6">
      <button
        type="button"
        onClick={toggleWidget}
        className="ask-nobs-fab group relative grid h-[76px] w-[76px] cursor-pointer place-items-center overflow-hidden rounded-full border-2 border-white/25 bg-white/[.06] shadow-[0_18px_60px_rgba(0,0,0,.55),0_0_28px_rgba(46,168,255,.22)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 hover:scale-105 hover:border-electric/70"
        aria-label={loading ? "Opening Ask No BS live chat" : open ? "Close Ask No BS live chat" : "Open Ask No BS live chat"}
        aria-busy={loading}
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
          {open ? (
            <X className="mx-auto h-6 w-6" aria-hidden="true" />
          ) : (
            <>Ask<br /><span className="text-electric">No</span> <span className="text-signal">BS</span></>
          )}
        </span>
      </button>
    </div>
  );
}
