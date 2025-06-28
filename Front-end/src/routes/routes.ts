import {
  type RouteConfig,
  route,
} from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";
import Fresh from '../components/Fresh';

export default [
  route("/", "./home.tsx")
,

  ...(await flatRoutes()),
] satisfies RouteConfig;