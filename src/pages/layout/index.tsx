import Header from "./components/header";
import HomePage from "./home";
import styles from "./index.module.less";
import routes from "../../router";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
