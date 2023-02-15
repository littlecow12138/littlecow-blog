import { useState } from "react";
import Background from "./components/background";
import styles from "./index.module.less";
import { animated, useSpring } from "@react-spring/web";
import DocsPage from "./docs";

const IndexPage = () => {
  const [active, setActive] = useState<boolean>(false);
  const [curPage, setCurPage] = useState<string>("index");

  const contentStyles = useSpring({
    width: active ? "100%" : "50%",
  });
  const bgStyles = useSpring({
    width: active ? "0%" : "50%",
  });

  const renderContent = () => {
    if (curPage === "index") return <div>index</div>;
    if (curPage === "docs") return <DocsPage />;
    return <div>ERROR</div>;
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <span
            onClick={() => {
              setActive(false);
              setCurPage("index");
            }}
          >
            <span>Jankin </span>
            <span>Sun</span>
          </span>
        </div>
        <div className={styles.navMenu}>
          <div
            className={styles.menuItem}
            onClick={() => {
              setActive(true);
              setCurPage("docs");
            }}
          >
            Docs
          </div>
        </div>
      </div>
      <animated.div className={styles.content} style={contentStyles}>
        {renderContent()}
      </animated.div>
      <animated.div className={styles.background} style={bgStyles}>
        <Background />
      </animated.div>
    </div>
  );
};

export default IndexPage;
