import { RouteObject } from "react-router-dom";
import IndexPage from "../pages/layout1/index";
import Layout from "../pages/layout";
import MyPage from "../pages/my";
import HomePage from "../pages/layout/home";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        // path: "/home-page",
        index: true,
        element: <HomePage />,
      },
    ],
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
