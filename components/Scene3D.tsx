"use client";

import { Float, MeshDistortMaterial, Stars } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import type { Group, Mesh } from "three";

function Orb() {
  const ref = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.15;
    ref.current.rotation.y += delta * 0.22;
  });

  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={1.6}>
      <mesh ref={ref} position={[0, 0, 0]}>
        <sphereGeometry args={[1.45, 96, 96]} />
        <MeshDistortMaterial
          color="#5EEAD4"
          distort={0.32}
          speed={1.8}
          roughness={0.2}
          metalness={0.72}
          transparent
          opacity={0.62}
        />
      </mesh>
    </Float>
  );
}

function Rings() {
  const ref = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.z += delta * 0.045;
    ref.current.rotation.y = 0.2 + Math.sin(state.clock.elapsedTime * 0.22) * 0.14;
  });

  return (
    <group ref={ref} rotation={[0.9, 0.2, 0.5]}>
      {[2.25, 2.7, 3.15].map((radius, index) => (
        <mesh key={radius} rotation={[index * 0.7, index * 0.2, 0]}>
          <torusGeometry args={[radius, 0.006, 16, 180]} />
          <meshBasicMaterial
            color={index === 1 ? "#7C3AED" : "#5EEAD4"}
            transparent
            opacity={0.28}
          />
        </mesh>
      ))}
    </group>
  );
}

function StarField() {
  const ref = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.012;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.035;
  });

  return (
    <group ref={ref}>
      <Stars radius={80} depth={40} count={800} factor={4} saturation={0} fade speed={0.65} />
    </group>
  );
}

function System() {
  const { size, viewport } = useThree();
  const desktop = size.width >= 1280;
  const tablet = size.width >= 720;
  const positionX = desktop ? viewport.width * 0.19 : tablet ? viewport.width * 0.1 : 0;
  const horizontalRoom = viewport.width / 2 - Math.abs(positionX) - 0.14;
  const preferredScale = desktop ? 0.8 : tablet ? 0.64 : 0.43;
  const scale = Math.min(preferredScale, Math.max(0.28, horizontalRoom / 3.2));

  return (
    <group position={[positionX, tablet ? 0 : 0.72, 0]} scale={scale}>
      <Orb />
      <Rings />
    </group>
  );
}

export default function Scene3D() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 h-full w-full overflow-hidden opacity-50 md:opacity-75">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.6]}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.75} />
          <pointLight position={[4, 5, 4]} intensity={28} color="#5EEAD4" />
          <pointLight position={[-4, -2, 4]} intensity={18} color="#7C3AED" />
          <StarField />
          <System />
        </Suspense>
      </Canvas>
    </div>
  );
}
