import { ReactNode, useEffect } from "react";
import { Graph, ToolsView, EdgeView } from "@antv/x6";
import { Dropdown, Menu, MenuProps, Space } from "antd";
import ReactDOM from "react-dom";
import { createRoot, Root } from "react-dom/client";
import styles from "./index.module.less";

export interface ContextMenuToolOptions extends ToolsView.ToolItem.Options {
  menu: any;
  onCopy: any;
}

class ContextMenuTool extends ToolsView.ToolItem<
  EdgeView,
  ContextMenuToolOptions
> {
  private knob!: HTMLDivElement;
  private timer!: number;

  render() {
    if (!this.knob) {
      this.knob = ToolsView.createElement("div", false) as HTMLDivElement;
      this.knob.style.position = "absolute";
      this.container.appendChild(this.knob);
    }
    return this;
  }

  private toggleContextMenu(visible: boolean) {
    // this.root.unmount();
    ReactDOM.unmountComponentAtNode(this.knob);
    document.removeEventListener("mousedown", this.onMouseDown);
    console.log(this.cell, this.options);

    if (visible) {
      ReactDOM.render(this.options.menu, this.knob);
      document.addEventListener("mousedown", this.onMouseDown);
    }
  }

  private updatePosition(e?: MouseEvent) {
    const style = this.knob.style;
    if (e) {
      const pos = this.graph.clientToGraph(e.clientX, e.clientY);
      style.left = `${pos.x}px`;
      style.top = `${pos.y}px`;
    } else {
      style.left = "-1000px";
      style.top = "-1000px";
    }
  }

  private onMouseDown = () => {
    this.timer = window.setTimeout(() => {
      this.updatePosition();
      this.toggleContextMenu(false);
    }, 200);
  };

  private onContextMenu({ e }: { e: MouseEvent }) {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = 0;
    }
    this.updatePosition(e);
    this.toggleContextMenu(true);
  }

  delegateEvents() {
    this.cellView.on("cell:contextmenu", this.onContextMenu, this);
    return super.delegateEvents();
  }

  protected onRemove(): void {
    this.cellView.off("cell:contextmenu", this.onContextMenu, this);
  }
}

ContextMenuTool.config({
  tagName: "div",
  isSVGElement: false,
});

const onCopy = () => {
  console.log("onCopy");
};

let graph: Graph;
const AntvRightClickMenu = () => {
  const menu = (
    <Menu className={styles.menuWrapper}>
      <Menu.Item
        key={0}
        onClick={(props) => {
          console.log(props);

          console.log("剪切");
        }}
      >
        剪切
      </Menu.Item>
      <Menu.Item
        key={1}
        onClick={() => {
          console.log("复制");
        }}
      >
        复制
      </Menu.Item>
      <Menu.Item
        key={2}
        onClick={() => {
          console.log("粘贴");
        }}
      >
        粘贴
      </Menu.Item>
      <Menu.Item
        key={3}
        danger
        onClick={() => {
          console.log("粘贴");
        }}
      >
        删除
      </Menu.Item>
    </Menu>
  );
  useEffect(() => {
    graph = new Graph({
      container: document.getElementById("right-click-menu-demo") || undefined,
      autoResize: true,
      grid: true,
      background: {
        color: "#EFF4FB",
      },
    });
    // 注册工具
    Graph.registerEdgeTool("contextmenu", ContextMenuTool, true);
    Graph.registerNodeTool("contextmenu", ContextMenuTool, true);
    const source = graph.addNode({
      x: 180,
      y: 60,
      width: 100,
      height: 40,
      attrs: {
        body: {
          stroke: "#5F95FF",
          fill: "#EFF4FF",
          strokeWidth: 1,
        },
      },
      tools: [
        {
          name: "contextmenu",
          args: {
            menu,
          },
        },
      ],
    });
    const target = graph.addNode({
      x: 320,
      y: 250,
      width: 100,
      height: 40,
      attrs: {
        body: {
          stroke: "#5F95FF",
          fill: "#EFF4FF",
          strokeWidth: 1,
        },
      },
      tools: [
        {
          name: "contextmenu",
          args: {
            menu,
          },
        },
      ],
    });
    graph.addEdge({
      source,
      target,
      attrs: {
        line: {
          stroke: "#A2B1C3",
          strokeWidth: 2,
        },
      },
      tools: [
        {
          name: "contextmenu",
          args: {
            // menu,
            onCopy: onCopy,
          },
        },
      ],
    });
  }, []);
  return <div id="right-click-menu-demo"></div>;
};

export default AntvRightClickMenu;
