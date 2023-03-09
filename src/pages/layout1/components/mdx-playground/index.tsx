import { MDXProvider } from "@mdx-js/react";
import Post from "../../../../blogs/antv-x6.mdx";
import Post1 from "../../../../blogs/threejs.mdx";
import Post2 from "../../../../blogs/qiankun.mdx";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import styles from "./index.module.less";
import { useEffect } from "react";

const MDXPlayground = ({ blogKey }: { blogKey: number }) => {
  function code({ className, ...props }: any) {
    const match = /language-(\w+)/.exec(className || "");
    return match ? (
      <SyntaxHighlighter language={match[1]} PreTag="div" {...props} />
    ) : (
      <code className={className} {...props} />
    );
  }
  const blogList = [
    <Post components={{ code }} />,
    <Post1 components={{ code }} />,
    <Post2 components={{ code }} />,
  ];
  useEffect(() => {
    console.log(blogKey);
  }, [blogKey]);
  return <MDXProvider>{blogList[blogKey || 0]}</MDXProvider>;
};

export default MDXPlayground;
