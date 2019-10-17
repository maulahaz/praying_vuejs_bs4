<template>
  <nav>
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo">Home</router-link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact Us</router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  }
};
</script>

<style>
</style>