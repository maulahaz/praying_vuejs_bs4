<template>
  <div id="app">
    <router-view/>
    <HelloWorld/>
    <!-- <Home/>
    <Contact/>
    <About/>-->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
// import Home from "./components/Home";
// import Contact from "./components/Contact";
// import About from "./components/About";

export default {
  name: "App",
  components: {
    HelloWorld
    // Home, Contact, About
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
