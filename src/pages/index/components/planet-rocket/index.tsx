import { animated, useSpring, config } from "@react-spring/three";
import { Float, Html, Text3D, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Select } from "@react-three/postprocessing";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

// type GLTFResult = GLTF & {
//   nodes: {
//     Root: THREE.Object3D;
//     planet001: THREE.Object3D;
//     planet001_1: THREE.Mesh;
//     planet001_2: THREE.Mesh;
//   };
// };

const PlanetRocket = () => {
  const planet = useRef<any>();
  const navigate = useNavigate();

  const [active, setActive] = useState<boolean>(false);
  const { scale, fontScale } = useSpring({
    scale: active ? 1.5 : 1,
    fontScale: active ? 1 : 0,
    config: config.gentle,
  });

  const { nodes } = useGLTF("/planet-rocket.glb") as unknown as any;
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime() / 10;
    planet.current.rotation.z = Math.PI / 5.6 + a;
  });
  return (
    <group
      onClick={() => {
        navigate("/index");
      }}
    >
      <animated.group position={[-10, 4, -5]} scale={fontScale}>
        <Float floatIntensity={5} speed={5}>
          <Text3D font={"/fonts/Rainbow 2000_Regular.json"}>Index</Text3D>
        </Float>
      </animated.group>
      <Select enabled={active}>
        <animated.group
          ref={planet}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[-8, 0, 0]}
          scale={scale}
          onPointerEnter={() => {
            setActive(true);
          }}
          onPointerLeave={() => {
            setActive(false);
          }}
        >
          <group rotation={[Math.PI / 13.5, -Math.PI / 5.8, Math.PI / 5.6]}>
            <mesh
              receiveShadow
              castShadow
              geometry={nodes.planet001_1.geometry}
              material={nodes.planet001_1.material}
            />
            <mesh
              geometry={nodes.planet001_2.geometry}
              material={nodes.planet001_2.material}
            />
          </group>
        </animated.group>
      </Select>
    </group>
  );
};

export default PlanetRocket;
