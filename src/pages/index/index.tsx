import {
  Float,
  OrbitControls,
  PerspectiveCamera,
  Stars,
  Text,
  Text3D,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  EffectComposer,
  Outline,
  Selection,
} from "@react-three/postprocessing";
import { Suspense } from "react";
import Earth from "./components/earth";
import styles from "./index.module.less";
import PlanetRocket from "./components/planet-rocket";
import Moon from "./components/moon";

const Layout = () => {
  return (
    <div className={styles.container}>
      <Canvas dpr={[1.5, 2]} linear shadows>
        <fog attach="fog" args={["#272730", 16, 30]} />
        <ambientLight intensity={0.75} />
        <PerspectiveCamera makeDefault position={[0, 0, 16]} fov={75}>
          <pointLight intensity={1} position={[-10, -25, -10]} />
          <spotLight
            castShadow
            intensity={2.25}
            angle={0.2}
            penumbra={1}
            position={[-25, 20, -15]}
            shadow-mapSize={[1024, 1024]}
            shadow-bias={-0.0001}
          />
        </PerspectiveCamera>
        <Suspense fallback={null}>
          <Selection>
            <EffectComposer multisampling={8} autoClear={false}>
              <Outline
                blur
                visibleEdgeColor={0xffffff}
                edgeStrength={100}
                width={1000}
              />
            </EffectComposer>
            <Float floatIntensity={5} speed={2} position={[-7, 5, 2]}>
              <Text3D
                font={"/fonts/Rainbow 2000_Bold.json"}
                scale={1.5}
                // bevelEnabled
                // bevelSize={0.01}
              >
                Littlecow's Space
                <meshPhongMaterial />
              </Text3D>
            </Float>
            <Float floatIntensity={15} speed={3}>
              <PlanetRocket />
            </Float>
            <Float floatIntensity={18} speed={2}>
              <Earth />
            </Float>
            <Float floatIntensity={10} speed={4}>
              <Moon />
            </Float>
          </Selection>
        </Suspense>
        <OrbitControls
          // autoRotate
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Stars radius={500} depth={50} count={1000} factor={10} />
      </Canvas>
    </div>
  );
};

export default Layout;
