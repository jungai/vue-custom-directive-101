<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div
      v-resize="someFunction"
      :style="{ width: '300px', height: '300px', backgroundColor: 'wheat', textAlign: 'center' }"
    >
      {{ msg }}
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import resize from './directives/resize';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  directives: {
    resize,
  },
  data() {
    return {
      msg: 'โกมุนยอง',
    };
  },
  methods: {
    someFunction(event) {
      console.log(event);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
