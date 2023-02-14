import Background from "./components/background";
import styles from "./index.module.less";

const IndexPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <Background />
      </div>
    </div>
  );
};

export default IndexPage;
