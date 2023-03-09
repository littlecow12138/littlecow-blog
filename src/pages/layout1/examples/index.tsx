import styles from "./index.module.less";
import AntvRightClickMenu from "./eg-demos/antv-right-click-menu";

const ExamplePage = () => {
  return (
    <div className={styles.container}>
      <AntvRightClickMenu />
    </div>
  );
};

export default ExamplePage;
