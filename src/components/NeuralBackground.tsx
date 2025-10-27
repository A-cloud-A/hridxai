import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Particles = () => {
  const points = useRef<THREE.Points>(null);
  const particleCount = 1000;

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.05;
      points.current.rotation.x = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#60a5fa"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

const ConnectionLines = () => {
  const lines = useRef<THREE.LineSegments>(null);
  const particleCount = 50;

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(particleCount * 6);
    const colors = new Float32Array(particleCount * 6);

    for (let i = 0; i < particleCount; i++) {
      const x1 = (Math.random() - 0.5) * 8;
      const y1 = (Math.random() - 0.5) * 8;
      const z1 = (Math.random() - 0.5) * 8;

      const x2 = (Math.random() - 0.5) * 8;
      const y2 = (Math.random() - 0.5) * 8;
      const z2 = (Math.random() - 0.5) * 8;

      positions[i * 6] = x1;
      positions[i * 6 + 1] = y1;
      positions[i * 6 + 2] = z1;
      positions[i * 6 + 3] = x2;
      positions[i * 6 + 4] = y2;
      positions[i * 6 + 5] = z2;

      colors[i * 6] = 0.37;
      colors[i * 6 + 1] = 0.65;
      colors[i * 6 + 2] = 0.98;
      colors[i * 6 + 3] = 0.37;
      colors[i * 6 + 4] = 0.65;
      colors[i * 6 + 5] = 0.98;
    }

    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (lines.current) {
      lines.current.rotation.y = state.clock.elapsedTime * 0.02;
      lines.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <lineSegments ref={lines}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount * 2}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount * 2}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial
        vertexColors
        transparent
        opacity={0.2}
      />
    </lineSegments>
  );
};

const NeuralBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Particles />
        <ConnectionLines />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/50 via-gray-950/70 to-gray-950" />
    </div>
  );
};

export default NeuralBackground;
