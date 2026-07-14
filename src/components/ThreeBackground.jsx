import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Points, PointMaterial } from '@react-three/drei';

const Particles = ({ count = 2000 }) => {
  const ref = useRef();
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, [count]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
      <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#2EBE67"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </Float>
  );
};

const Network = () => {
  const ref = useRef();
  
  const nodes = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 30; i++) {
      positions.push([
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4,
      ]);
    }
    return positions;
  }, []);

  const lines = useMemo(() => {
    const linePositions = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = Math.sqrt(
          Math.pow(nodes[i][0] - nodes[j][0], 2) +
          Math.pow(nodes[i][1] - nodes[j][1], 2) +
          Math.pow(nodes[i][2] - nodes[j][2], 2)
        );
        if (dist < 2) {
          linePositions.push([...nodes[i], ...nodes[j]]);
        }
      }
    }
    return linePositions;
  }, [nodes]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshBasicMaterial color="#57D786" />
        </mesh>
      ))}
      {lines.map((line, i) => (
        <line key={i}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array(line)}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#2EBE67" opacity={0.2} transparent />
        </line>
      ))}
    </group>
  );
};

const CodeParticles = () => {
  const groupRef = useRef();
  
  const codes = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6,
      ],
      scale: 0.3 + Math.random() * 0.5,
      speed: 0.2 + Math.random() * 0.5,
      opacity: 0.1 + Math.random() * 0.3,
    }));
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        child.position.y += Math.sin(state.clock.elapsedTime * codes[i].speed + i) * 0.001;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {codes.map((code, i) => (
        <mesh key={i} position={code.position} scale={code.scale}>
          <boxGeometry args={[0.02, 0.08, 0.01]} />
          <meshBasicMaterial color="#173253" opacity={code.opacity} transparent />
        </mesh>
      ))}
    </group>
  );
};

const ThreeBackground = ({ variant = 'particles' }) => {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      minHeight: '400px',
    }}>
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ width: '100%', height: '100%' }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        {variant === 'particles' && <Particles count={1500} />}
        {variant === 'network' && <Network />}
        {variant === 'codes' && <CodeParticles />}
      </Canvas>
    </div>
  );
};

export default ThreeBackground;