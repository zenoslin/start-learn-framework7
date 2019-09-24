import Home from "./page/Home.vue";
import AboutPage from "./page/About.vue";
import LoginPage from "./page/Login.vue";

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/about/",
    component: AboutPage
  },
  {
    path: "/login/",
    component: LoginPage
  }
];

export default routes;
