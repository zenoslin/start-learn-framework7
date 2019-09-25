import Home from "./page/Home";
import About from "./page/About";
import Accordion from "./page/Accordion";
import Actions from "./page/Actions";

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
  },
  {
    path: "/Actions/",
    component: Actions
  }
];

export default routes;
