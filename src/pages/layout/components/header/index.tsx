import styles from "./index.module.less";
import {
  GithubOutlined,
  WechatOutlined,
  MailOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.homepage}>
        <div>
          <span>Home Page</span>
          <div>
            <div>
              <span>
                <ArrowRightOutlined />
              </span>
              <span>
                <ArrowRightOutlined />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.menu}>
        <div className={styles.icons}>
          <span>
            <GithubOutlined />
          </span>
          <span>
            <WechatOutlined />
          </span>
          <span>
            <MailOutlined />
          </span>
        </div>
        <div className={styles.brief}>
          <div className={styles.briefItem} style={{ marginRight: 10 }}>
            <span>Jingshuang</span>
            <div>Sun</div>
          </div>
          <div className={styles.briefItem}>
            <span>Portfolio</span>
            <div>120+</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
