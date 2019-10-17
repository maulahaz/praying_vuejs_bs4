// import HelloWorld from "@/components/HelloWorld";
import Home from "@/components/Home";
import About from "@/components/About";
import Contact from "@/components/Contact";

const routes = [
  // {
  //   path: "/",
  //   name: "HelloWorld",
  //   component: HelloWorld
  // },
  { path: "/home", name: "Home", component: Home },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/about", name: "About", component: About }
];
export default routes;
