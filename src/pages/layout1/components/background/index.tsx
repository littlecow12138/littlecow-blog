import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/web";
import { useState } from "react";
import Scene from "./scene";
import styles from "./index.module.less";

const MyBackground = () => {
  const [toggle, set] = useState<number>(0);

  const [{ x }] = useSpring(
    {
      x: toggle,
      config: { mass: 5, tension: 1000, friction: 50, precision: 0.0001 },
    },
    [toggle]
  );

  return (
    <a.div
      className={styles.container}
      style={{
        backgroundColor: x.to([0, 1], ["#c9ffed", "#ff2558"]),
        color: x.to([0, 1], ["#7fffd4", "#c70f46"]),
      }}
    >
      <h1 className={styles.open} children="<h1>" />
      <h1 className={styles.close} children="</h1>" />
      <a.h1>{x.to((x) => (x + 8).toFixed(2))}</a.h1>
      <Scene x={x} set={set} />
    </a.div>
  );
};

export default MyBackground;
