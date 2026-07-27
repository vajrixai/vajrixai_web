"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { Suspense, useMemo, useRef } from "react";
import type { Group } from "three";
import { technologies } from "@/lib/data";

const allTech = Object.values(technologies).flat();
const topRow = allTech.slice(0, 17);
const bottomRow = allTech.slice(13);

function NeuralCore() {
  const core = useRef<Group>(null);
  const mesh = useRef<Group>(null);
  const nodes = useMemo(
    () => [
      [-1.7, .65, .1],
      [-.85, 1.15, -.45],
      [.1, .78, .38],
      [1.08, 1.0, -.18],
      [1.7, .42, .22],
      [-1.35, -.32, -.38],
      [-.35, -.82, .34],
      [.72, -.52, -.28],
      [1.45, -.85, .18],
    ] as const,
    [],
  );

  useFrame((state, delta) => {
    if (core.current) {
      core.current.rotation.y += delta * .18;
      core.current.rotation.x = Math.sin(state.clock.elapsedTime * .32) * .14;
    }
    if (mesh.current) {
      mesh.current.rotation.z -= delta * .08;
    }
  });

  return (
    <group ref={core} rotation={[.18, -.35, 0]} scale={1.05}>
      <group ref={mesh}>
        <mesh>
          <icosahedronGeometry args={[1.28, 1]} />
          <meshBasicMaterial color="#3157ff" wireframe transparent opacity={.24} />
        </mesh>
        <mesh rotation={[1.2, .2, .4]}>
          <torusGeometry args={[1.92, .01, 12, 160]} />
          <meshBasicMaterial color="#78ddff" transparent opacity={.42} />
        </mesh>
        <mesh rotation={[.4, 1.25, -.2]}>
          <torusGeometry args={[2.18, .008, 12, 160]} />
          <meshBasicMaterial color="#9747ff" transparent opacity={.28} />
        </mesh>
      </group>

      {nodes.map(([x, y, z], index) => (
        <mesh key={`${x}-${y}-${z}`} position={[x, y, z]}>
          <sphereGeometry args={[index % 3 === 0 ? .055 : .04, 18, 18]} />
          <meshBasicMaterial color={index % 2 ? "#9ee8ff" : "#ffffff"} transparent opacity={index % 2 ? .9 : .72} />
        </mesh>
      ))}

      {nodes.slice(0, -1).map(([x, y, z], index) => {
        const [toX, toY, toZ] = nodes[index + 1];
        const midX = (x + toX) / 2;
        const midY = (y + toY) / 2;
        const midZ = (z + toZ) / 2;
        const dx = toX - x;
        const dy = toY - y;
        const dz = toZ - z;
        const length = Math.sqrt(dx * dx + dy * dy + dz * dz);

        return (
          <mesh key={`link-${index}`} position={[midX, midY, midZ]} rotation={[Math.PI / 2, 0, Math.atan2(dy, dx)]}>
            <cylinderGeometry args={[.006, .006, length, 8]} />
            <meshBasicMaterial color="#4b72ff" transparent opacity={.26} />
          </mesh>
        );
      })}
    </group>
  );
}

function TechAICanvas() {
  return (
    <div className="relative h-[300px] overflow-hidden lg:h-[330px]">
      <div className="absolute inset-x-[8%] bottom-6 h-px bg-gradient-to-r from-transparent via-[#4b72ff]/50 to-transparent" />
      <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3157ff]/10 blur-3xl" />
      <Canvas camera={{ position: [0, 0, 5.8], fov: 42 }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <ambientLight intensity={1.2} />
          <pointLight position={[3, 3, 4]} intensity={18} color="#78ddff" />
          <pointLight position={[-3, -2, 3]} intensity={14} color="#9747ff" />
          <NeuralCore />
        </Suspense>
      </Canvas>
    </div>
  );
}

function Marquee({ items, reverse = false }: { items: readonly string[]; reverse?: boolean }) {
  const repeated = [...items, ...items];
  return (
    <div className="tech-mask overflow-hidden border-y border-white/[.07] py-4">
      <div className={`tech-track flex w-max items-center ${reverse ? "reverse" : ""}`}>
        {repeated.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center">
            <span className="px-5 text-sm font-medium tracking-[-.02em] text-white/48 transition-colors hover:text-white sm:px-8 sm:text-base">{item}</span>
            <span className="h-1 w-1 rounded-full bg-[#4b72ff]/80" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function TechnologyStack() {
  return (
    <section id="technology" className="section-pad relative overflow-hidden">
      <div className="site-grid">
        <div className="grid gap-8 border-t border-white/10 pt-6 lg:grid-cols-[.9fr_1.1fr] lg:items-start lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: .5 }}
            transition={{ duration: .75, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow">Technology Stack</span>
            <h2 className="mt-7 max-w-[760px] text-[clamp(2.65rem,5.35vw,5.2rem)] font-medium leading-[.98] tracking-[-.055em] text-[#f7f8ff]">
              Modern where it counts. Proven where it matters.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: .45 }}
            transition={{ duration: .85, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <TechAICanvas />
            <p className="-mt-4 max-w-[650px] text-[clamp(1.05rem,1.5vw,1.28rem)] leading-[1.75] text-[#a3a9b8]">
              We choose technology for fit, not fashion - balancing velocity today with operability tomorrow.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 mt-12 space-y-3">
        <Marquee items={topRow} />
        <Marquee items={bottomRow} reverse />
      </div>

      <div className="site-grid relative z-10 mt-16 grid gap-px overflow-hidden rounded-[24px] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(technologies).map(([category, items], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, scale: .96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: .5 }}
            transition={{ duration: .6, delay: index * .045 }}
            className="group bg-[#090a0c] p-7 transition-colors duration-500 hover:bg-[#0d0f13] sm:p-8"
          >
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#78ddff] shadow-[0_0_12px_2px_rgba(49,87,255,.5)]" />
              <h3 className="font-mono text-[11px] uppercase tracking-[.18em] text-white/50">{category}</h3>
            </div>
            <p className="mt-8 text-sm leading-7 text-white/55">{items.join(" \u00b7 ")}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
