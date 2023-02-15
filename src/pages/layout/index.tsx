import { useState } from "react";
import Background from "./components/background";
import styles from "./index.module.less";
import { animated, useSpring } from "@react-spring/web";

const IndexPage = () => {
  const [active, setActive] = useState<boolean>(false);

  const contentStyles = useSpring({
    width: active ? "100%" : "50%",
  });
  const bgStyles = useSpring({
    width: active ? "0%" : "50%",
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <span>Jankin </span>

          <span>Sun</span>
        </div>
        <div className={styles.navMenu}>
          <div className={styles.menuItem} onClick={() => setActive(true)}>
            Blog
          </div>
        </div>
      </div>
      <animated.div
        className={styles.content}
        style={contentStyles}
        // onClick={() => setActive(!active)}
      >
        <div>123</div>
      </animated.div>
      <animated.div className={styles.background} style={bgStyles}>
        <Background />
      </animated.div>
    </div>
  );
};

export default IndexPage;
