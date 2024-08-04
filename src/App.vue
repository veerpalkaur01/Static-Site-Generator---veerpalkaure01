<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
  padding-top: 60px;
  padding-bottom: 60px;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  line-height: 1.5;
}
</style>
