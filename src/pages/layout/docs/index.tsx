import { useState } from "react";
import Deck from "./deck";
import MDXPlayground from "../components/mdx-playground";
import styles from "./index.module.less";

/**
 * 展示文档卡片，双击翻转卡片进入文档列表和内容页面
 */
const DocsPage = () => {
  const [collapse, setCollapse] = useState<boolean>(false);
  const [blogKey, setBlogKey] = useState<number>(-1);

  return (
    <div className={styles.container}>
      双击卡片进入
      <div className={styles.docList}></div>
      <div className={styles.content}>
        {blogKey < 0 ? (
          <Deck setBlogKey={setBlogKey} />
        ) : (
          <MDXPlayground blogKey={blogKey} />
        )}
      </div>
    </div>
  );
};

export default DocsPage;
