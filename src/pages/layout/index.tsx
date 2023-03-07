import { useState } from "react";
import Background from "./components/background";
import styles from "./index.module.less";
import { animated, useSpring } from "@react-spring/web";
import DocsPage from "./docs";
import RagDoll from "./components/ragdoll";
import ExamplePage from "./examples";
import { act } from "@react-three/fiber";

const IndexPage = () => {
  const [active, setActive] = useState<boolean>(false);
  const [curPage, setCurPage] = useState<string>("index");

  const contentStyles = useSpring({
    width: active ? "100%" : "50%",
  });

  const logoStyles = useSpring({
    scale: active ? 1 : 1.5,
    alignSelf: active ? "start" : "center",
    y: active ? "0%" : "-100%",
    x: active ? "0%" : "50%",
  });

  const renderContent = () => {
    if (curPage === "index") return <div></div>;
    if (curPage === "docs") return <DocsPage />;
    if (curPage === "examples") return <ExamplePage />;
    return <div>ERROR</div>;
  };

  return (
    <div className={styles.container}>
      <animated.div className={styles.logo} style={logoStyles}>
        <span
          onClick={() => {
            setActive(false);
            setCurPage("index");
          }}
        >
          <span>Jankin </span>
          <span>Sun</span>
        </span>
        {!active ? (
          <span>
            If you survive there, you have to be as crazy as a hatter！
          </span>
        ) : (
          <></>
        )}
      </animated.div>
      <div className={styles.header}>
        <div className={styles.navMenu}>
          <div
            className={styles.menuItem}
            onClick={() => {
              setActive(true);
              setCurPage("docs");
            }}
            style={{ background: curPage === "docs" ? "#d8bfc9" : "none" }}
          >
            文档
          </div>
          {/* <div
            className={styles.menuItem}
            onClick={() => {
              setActive(true);
              setCurPage("examples");
            }}
            style={{ background: curPage === "examples" ? "#d8bfc9" : "none" }}
          >
            Examples
          </div> */}
        </div>
      </div>
      <animated.div className={styles.contentWrapper} style={contentStyles}>
        <div className={styles.content}>{renderContent()}</div>
      </animated.div>
      <animated.div
        className={styles.background}
        // style={{ zIndex: curPage === "index" ? 1 : -1 }}
      >
        <Background />
      </animated.div>
    </div>
  );
};

export default IndexPage;
