/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />
/// <reference types="@react-three/fiber" />
/// <reference types="@react-three/drei" />
/// <reference types="@react-spring/rapier" />
/// <reference types="@react-spring/three" />
/// <reference types="@react-spring/postprocessing" />
/// <reference types="react-router-dom" />
/// <reference types="three/examples/jsm/loaders/GLTFLoader" />
/// <reference types="@mdx-js/react" />
/// <reference types="react-use-gesture" />
/// <reference types="@antv/x6" />

// declare module "three/examples/jsm/loaders/GLTFLoader";

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: "development" | "production" | "test";
    readonly PUBLIC_URL: string;
  }
}

declare module "*.avif" {
  const src: string;
  export default src;
}

declare module "*.bmp" {
  const src: string;
  export default src;
}

declare module "*.gif" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.webp" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  import * as React from "react";

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  const src: string;
  export default src;
}

declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.module.scss" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.module.sass" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.less" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.glb" {
  const content: string | string[];
  export default content;
}
