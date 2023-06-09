import About from "../pages/About";
import Contact from "../pages/Contact";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import News from "../pages/News";
import { RouteType } from "../types/RouteType";

export const routes: RouteType[] = [
  { path: "/", component: Home },
  { path: "/detail/:id", component: Detail },
  { path: "/news", component: News },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
];
