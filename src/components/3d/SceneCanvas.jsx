'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { Suspense, useRef, useEffect } from 'react';
import gsap from 'gsap';

// This internal component handles the individual model rendering and its animations
function AnimatedStage({ activeId }) {
  const meshRef = useRef(null);

  useEffect(() => {
    if (meshRef.current) {
      // 1. Create an entry "pop" animation by scaling from 0 to 1
      gsap.fromTo(
        meshRef.current.scale,
        { x: 0, y: 0, z: 0 },
        { x: 1, y: 1, z: 1, duration: 0.8, ease: 'back.out(1.7)' }
      );

      // 2. Add a quick spin on the Y-axis when swapped
      gsap.fromTo(
        meshRef.current.rotation,
        { y: 0 },
        { y: Math.PI * 2, duration: 0.8, ease: 'power2.out' }
      );
    }
  }, [activeId]); // Runs every time the user changes the active product profile

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        {activeId === 'cooler' && <boxGeometry args={[0.9, 1.4, 0.9]} />}
{activeId === 'tv' && <boxGeometry args={[1.8, 1.0, 0.1]} />}
{activeId === 'washing' && <cylinderGeometry args={[0.6, 0.6, 1.2, 32]} />}
{activeId === 'grinder' && <coneGeometry args={[0.5, 1.1, 32]} />}
{/* New Placeholders */}
{activeId === 'geyser' && <cylinderGeometry args={[0.5, 0.5, 1.0, 32]} />}
{activeId === 'fan' && <torusGeometry args={[0.6, 0.1, 16, 100]} />}
        
        <meshStandardMaterial 
          color={activeId === 'cooler' ? '#00e5ff' : '#0066ff'} 
          metalness={0.6} 
          roughness={0.15} 
          emissive={activeId === 'cooler' ? '#00e5ff' : '#0066ff'}
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  );
}

export default function SceneCanvas({ activeId }) {
  return (
    <div className="fixed inset-0 z-0 w-screen h-screen bg-[#0B0F19]">
      <Canvas camera={{ position: [0, 0, 3.5], fov: 45 }}>
        <color attach="background" args={['#0B0F19']} />
        
        <ambientLight intensity={0.3} />
        <spotLight position={[4, 8, 4]} intensity={2} color="#00E5FF" penumbra={1} />
        <pointLight position={[-4, -4, -4]} intensity={1} color="#0066FF" />

        <Suspense fallback={null}>
          <AnimatedStage activeId={activeId} />
        </Suspense>

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}