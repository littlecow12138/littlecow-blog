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
    Moon_Light_grey_middle_part_0: THREE.Mesh;
    Moon_Main_colour_0: THREE.Mesh;
    Moon_Medium_Dark_0: THREE.Mesh;
    Moon_Shadow_Dark_0: THREE.Mesh;
    Moon_Shadow_Darkest_0: THREE.Mesh;
    Moon_lambert1_0: THREE.Mesh;
    Moon_lambert5_0: THREE.Mesh;
  };
};

const Moon = () => {
  const earth = useRef<Group>(new Group());
  const [active, setActive] = useState<boolean>(false);
  const { nodes } = useGLTF("/lowpoly_moon.glb") as unknown as GLTFResult;
  const { scale } = useSpring({
    scale: active ? 1.5 : 1,
    config: config.gentle,
  });

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime() / 2;
    earth.current.rotation.y = a;
  });

  return (
    <Select enabled={active}>
      <animated.group
        ref={earth}
        position={[8, -4, -6]}
        rotation={[0, 0, 0]}
        scale={scale}
        onPointerEnter={() => setActive(true)}
        onPointerLeave={() => setActive(false)}
      >
        <group scale={0.1}>
          <mesh
            geometry={nodes.Moon_Light_grey_middle_part_0.geometry}
            material={nodes.Moon_Light_grey_middle_part_0.material}
          />
          <mesh
            geometry={nodes.Moon_Main_colour_0.geometry}
            material={nodes.Moon_Main_colour_0.material}
          />
          <mesh
            geometry={nodes.Moon_Medium_Dark_0.geometry}
            material={nodes.Moon_Medium_Dark_0.material}
          />
          <mesh
            geometry={nodes.Moon_Shadow_Dark_0.geometry}
            material={nodes.Moon_Shadow_Dark_0.material}
          />
          <mesh
            geometry={nodes.Moon_Shadow_Darkest_0.geometry}
            material={nodes.Moon_Shadow_Darkest_0.material}
          />
          <mesh
            geometry={nodes.Moon_lambert1_0.geometry}
            material={nodes.Moon_lambert1_0.material}
          />
          <mesh
            geometry={nodes.Moon_lambert5_0.geometry}
            material={nodes.Moon_lambert5_0.material}
          />
        </group>
      </animated.group>
    </Select>
  );
};

export default Moon;
