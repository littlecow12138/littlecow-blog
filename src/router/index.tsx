import { RouteObject } from "react-router-dom";
import IndexPage from "../pages/layout1/index";
import Layout from "../pages/layout";
import MyPage from "../pages/my";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "/index",
    element: <IndexPage />,
  },
  // {
  //   path: "layout",
  //   element: <Layou />
  // }
];

export default routes;
