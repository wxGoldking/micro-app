<template>
  <div id="app">
    <div id="nav">
      <router-link to="/micro_vue1">micro_vue1</router-link> |
      <router-link to="/micro_vue2">micro_vue2</router-link>
    </div>
    <!-- <router-view/> -->
    <div id="subapp-viewport"></div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
