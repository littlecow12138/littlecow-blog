import Header from "./components/header";
import styles from "./index.module.less";

const Layout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}></div>
    </div>
  );
};

export default Layout;
