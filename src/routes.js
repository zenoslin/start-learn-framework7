import Home from "./page/Home";
import About from "./page/About";
import Accordion from "./page/Accordion";

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/about/",
    component: About
  },
  {
    path: "/accordion/",
    component: Accordion
  }
];

export default routes;
