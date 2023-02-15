import {
  CubeCamera,
  MeshRefractionMaterial,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
} from "@react-three/postprocessing";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";
import { InstancedMesh, Texture } from "three";
import textureUrl from "../../../../assets/233.jpg";
import diamondUrl from "../../../../assets/dflat.glb";

const Bg = () => {
  const texture = useTexture(textureUrl);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(2, 2);

  return (
    <mesh rotation={[-0.7, 0, 0]} scale={50}>
      <sphereGeometry />
      <meshBasicMaterial
        map={texture}
        depthTest={false}
        side={THREE.BackSide}
      />
    </mesh>
  );
};

const Diamonds = ({ count = 40 }) => {
  const { viewport, clock } = useThree();
  const model = useRef<any>();
  const { nodes } = useGLTF(diamondUrl) as any;
  // create random position data
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const diamonds = useMemo(
    () =>
      new Array(count).fill(count).map((_, i) => ({
        position: [
          THREE.MathUtils.randFloatSpread(viewport.width * 1.4),
          40 - Math.random() * 40,
          THREE.MathUtils.randFloatSpread(15) - 10,
        ],
        factor: 0.75 + Math.random() * 2,
        direction: Math.random() < 0.5 ? -1 : 1,
        rotation: [
          Math.sin(Math.random()) * Math.PI,
          Math.sin(Math.random()) * Math.PI,
          Math.cos(Math.random()) * Math.PI,
        ],
      })),
    []
  );

  //   Render-loop
  useFrame((state, delta) => {
    diamonds.forEach((data, i) => {
      const t = clock.getElapsedTime();
      data.position[1] -= data.factor * 1 * delta * data.direction;
      if (data.direction === 1 ? data.position[1] < -20 : data.position[1] > 20)
        data.position = [
          viewport.width / 2 - Math.random() * viewport.width,
          50 * data.direction,
          data.position[2],
        ];
      const { position, rotation, factor } = data;
      dummy.position.set(position[0], position[1], position[2]);
      dummy.rotation.set(
        rotation[0] + (t * factor) / 10,
        rotation[1] + (t * factor) / 10,
        rotation[2] + (t * factor) / 10
      );
      dummy.scale.setScalar(1 + factor);
      dummy.updateMatrix();
      model.current.setMatrixAt(i, dummy.matrix);
    });
    (model.current as InstancedMesh).instanceMatrix.needsUpdate = true;
  });

  return (
    <CubeCamera>
      {
        ((texture: Texture) => (
          <instancedMesh
            ref={model}
            args={[nodes.Diamond_1_0.geometry, undefined, diamonds.length]}
          >
            <MeshRefractionMaterial
              bounces={3}
              aberrationStrength={0}
              envMap={texture}
              toneMapped={false}
            />
          </instancedMesh>
        )) as any
      }
    </CubeCamera>
  );
};

const Background = () => {
  return (
    <Suspense fallback={null}>
      <Canvas
        // dpr={[1, 1.5]}
        camera={{ position: [0, 0, 25], near: 1, far: 100, fov: 50 }}
      >
        <color attach="background" args={["lightblue"]} />
        <Bg />
        <Diamonds count={10} />
        <EffectComposer>
          <Bloom
            luminanceThreshold={0.8}
            intensity={10}
            levels={9}
            mipmapBlur
          />
          <DepthOfField
            target={[0, 0, -10]}
            focalLength={0.1}
            bokehScale={10}
            height={1000}
          />
        </EffectComposer>
      </Canvas>
    </Suspense>
  );
};

export default Background;
