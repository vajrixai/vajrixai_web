"use client";

import dynamic from "next/dynamic";
import { HomePage } from "@/components/home-page";
import { Preloader } from "@/components/ui/preloader";

const Scene3D = dynamic(() => import("@/components/Scene3D"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 -z-10 bg-[#050505]" />,
});

export default function Page() {
  return (
    <div className="relative isolate">
      <Preloader />
      <Scene3D />
      <HomePage />
    </div>
  );
}
