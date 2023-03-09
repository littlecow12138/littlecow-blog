import styles from "./index.module.less";
import qixi from "../../../assets/home/qixi.jpg";
import { ArrowRightOutlined } from "@ant-design/icons";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div>
        <div>
          <div className={styles.titleHeader}>
            <span className={styles.title}>D</span>
            <img src={qixi} />
          </div>
          <div className={styles.dottedDivider} />
          <div className={styles.desc}>
            <span>Documents</span>
            <span>文档</span>
          </div>
          <div className={styles.descHover}>
            <span>记录平时积累的相关技术文档等</span>
          </div>
        </div>
        <div className={styles.footer}>
          <span>(MORE INFOMATIONS--)</span>
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
      <div>
        <div>
          <div className={styles.titleHeader}>
            <span className={styles.title}>S</span>
          </div>
          <div className={styles.dottedDivider} />
          <div className={styles.desc}>
            <span>Showcase</span>
            <span>示例</span>
          </div>
          <div className={styles.descHover}>
            <span>用来存放相关技术的demo</span>
          </div>
        </div>
        <div className={styles.footer}>
          <span>(MORE INFOMATIONS--)</span>
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
      <div>
        <div>
          <div className={styles.titleHeader}>
            <span className={styles.title}>M</span>
          </div>
          <div
            className={styles.dottedDivider}
            style={{ borderBottom: "1px dotted rgba(0, 0, 0, 0.2)" }}
          />
          <div className={styles.desc}>
            <span>My</span>
            <span>关于我</span>
          </div>
          <div className={styles.descHover}>
            <span>关于我的相关</span>
          </div>
        </div>
        <div className={styles.footer}>
          <span>(MORE INFOMATIONS--)</span>
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
    </div>
  );
};

export default HomePage;
