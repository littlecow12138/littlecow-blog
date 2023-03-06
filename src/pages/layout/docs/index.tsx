import MDXPlayground from "../components/mdx-playground";
import styles from "./index.module.less";

/**
 * 展示高级文档列表，点击后弹出Content内容， List再变为侧边简单列表
 */
const DocsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.docList}></div>
      <div className={styles.content}>{/* <MDXPlayground /> */}</div>
    </div>
  );
};

export default DocsPage;
