import { RouteObject } from "react-router-dom";
import IndexPage from "../pages/layout/index";
import Layout from "../pages/index";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "/index",
    element: <IndexPage />,
  },
];

export default routes;
