import { MDXProvider } from "@mdx-js/react";
import Post from "../../../../blogs/@use-gesture.mdx";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import styles from "./index.module.less";

const MDXPlayground = () => {
  function code({ className, ...props }: any) {
    const match = /language-(\w+)/.exec(className || "");
    return match ? (
      <SyntaxHighlighter language={match[1]} PreTag="div" {...props} />
    ) : (
      <code className={className} {...props} />
    );
  }
  return (
    <MDXProvider>
      <Post components={{ code }} />
    </MDXProvider>
  );
};

export default MDXPlayground;
