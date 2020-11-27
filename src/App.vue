<template>
  <div id="app">
    <div
      id="nav"
      class="navbar navbar-dark bg-primary d-flex justify-content-around"
    >
      <router-link class="text-light" to="/">New Blog Post</router-link>
      <router-link class="text-light" to="/blog">Blog</router-link>
    </div>
    <transition
      name="router-anim"
      enter-active-class="animate__animated animate__fadeInDown"
      leave-active-class="animate__animated animate__fadeOutDown"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../node_modules/animate.css/animate.css";
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");
* {
  font-family: "Poppins", sans-serif;
}
#nav a {
  font-size: 1.5rem;
}

.paper {
  position: fixed;
  width: 100%;
}
</style>
