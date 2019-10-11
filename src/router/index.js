import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Home from "@/components/Home";
import About from "@/components/About";
import Contact from "@/components/Contact";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/foo",
      name: "Foo",
      component: Foo
    },
    { path: "/home", name: "Home", component: Home },
    { path: "/contact", name: "Contact", component: Contact },
    { path: "/about", name: "About", component: About }
  ]
});
