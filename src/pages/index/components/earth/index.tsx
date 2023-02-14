import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { animated, useSpring, config } from "@react-spring/three";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Group } from "three";
import { Select } from "@react-three/postprocessing";

type GLTFResult = GLTF & {
  nodes: {
    Root: THREE.Object3D;
    "URF-Height_Lampd_0": THREE.Mesh;
    "URF-Height_Lampd_Ice_0": THREE.Mesh;
    "URF-Height_watr_0": THREE.Mesh;
  };
};

const Earth = () => {
  const earth = useRef<Group>(new Group());
  const [active, setActive] = useState<boolean>(false);
  const { nodes } = useGLTF("/lowpoly_earth.glb") as unknown as GLTFResult;
  const { scale } = useSpring({
    scale: active ? 1.5 : 1,
    config: config.gentle,
  });

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime() / 3;
    earth.current.rotation.y = a;
  });

  return (
    <Select enabled={active}>
      <animated.group
        ref={earth}
        position={[0, -4, -6]}
        rotation={[0, 0, 0]}
        scale={scale}
        onPointerEnter={() => setActive(true)}
        onPointerLeave={() => setActive(false)}
      >
        <group scale={2.5}>
          <mesh
            geometry={nodes["URF-Height_Lampd_0"].geometry}
            material={nodes["URF-Height_Lampd_0"].material}
          />
          <mesh
            geometry={nodes["URF-Height_Lampd_Ice_0"].geometry}
            material={nodes["URF-Height_Lampd_Ice_0"].material}
          />
          <mesh
            geometry={nodes["URF-Height_watr_0"].geometry}
            material={nodes["URF-Height_watr_0"].material}
          />
        </group>
      </animated.group>
    </Select>
  );
};

export default Earth;
