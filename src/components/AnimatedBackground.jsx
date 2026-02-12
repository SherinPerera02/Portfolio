import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Floating particles
function Particles() {
  const particlesRef = useRef();
  const particleCount = 100;
  
  const positions = new Float32Array(particleCount * 3);
  const velocities = [];
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    
    velocities.push({
      x: (Math.random() - 0.5) * 0.02,
      y: (Math.random() - 0.5) * 0.02,
      z: (Math.random() - 0.5) * 0.01
    });
  }
  
  useFrame(() => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array;
      
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] += velocities[i].x;
        positions[i * 3 + 1] += velocities[i].y;
        positions[i * 3 + 2] += velocities[i].z;
        
        // Wrap around boundaries
        if (Math.abs(positions[i * 3]) > 10) velocities[i].x *= -1;
        if (Math.abs(positions[i * 3 + 1]) > 10) velocities[i].y *= -1;
        if (Math.abs(positions[i * 3 + 2]) > 5) velocities[i].z *= -1;
      }
      
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#60a5fa"
        transparent
        opacity={0.3}
        sizeAttenuation
      />
    </points>
  );
}

// Rotating wireframe sphere
function WireframeSphere() {
  const sphereRef = useRef();
  
  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x += 0.002;
      sphereRef.current.rotation.y += 0.003;
    }
  });
  
  return (
    <mesh ref={sphereRef} position={[0, 0, -3]}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshBasicMaterial
        color="#60a5fa"
        wireframe
        transparent
        opacity={0.08}
      />
    </mesh>
  );
}

// Animated wave grid
function WaveGrid() {
  const gridRef = useRef();
  
  useFrame((state) => {
    if (gridRef.current) {
      const time = state.clock.elapsedTime;
      const positions = gridRef.current.geometry.attributes.position.array;
      
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const y = positions[i + 1];
        
        positions[i + 2] = Math.sin(x * 0.5 + time) * 0.3 + Math.cos(y * 0.5 + time) * 0.3;
      }
      
      gridRef.current.geometry.attributes.position.needsUpdate = true;
      gridRef.current.geometry.computeVertexNormals();
    }
  });
  
  return (
    <mesh ref={gridRef} rotation={[-Math.PI / 3, 0, 0]} position={[0, -5, -5]}>
      <planeGeometry args={[20, 20, 40, 40]} />
      <meshBasicMaterial
        color="#60a5fa"
        wireframe
        transparent
        opacity={0.05}
      />
    </mesh>
  );
}

export default function AnimatedBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <Particles />
        <WireframeSphere />
        <WaveGrid />
      </Canvas>
    </div>
  );
}
