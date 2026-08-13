"use client";

import dynamic from "next/dynamic";

const GlobalShader = dynamic(() => import("@/components/webgl/GlobalShader"), {
  ssr: false,
  loading: () => (
    <div
      className="fixed inset-0 -z-10"
      aria-hidden="true"
      style={{
        background:
          "radial-gradient(120% 90% at 30% 40%, rgba(11,111,214,0.28) 0%, rgba(3,10,18,0.0) 55%), linear-gradient(160deg, #04121f 0%, #05070a 60%, #05070a 100%)",
      }}
    />
  ),
});

const AskNoBS = dynamic(() => import("@/components/chat/AskNoBS"), {
  ssr: false,
});

export default function DeferredChrome() {
  return (
    <>
      <GlobalShader />
      <AskNoBS />
    </>
  );
}
