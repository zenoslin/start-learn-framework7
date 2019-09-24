import AboutPage from "./view/About.vue";
import LoginPage from "./view/Login.vue";

const routes = [
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
