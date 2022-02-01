<template>
  <div id="app">
    <the-application-shell>
      <RouterView />
    </the-application-shell>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}
</style>
<script>
import TheApplicationShell from "@/components/TheApplicationShell";
import { Vue, Component } from "vue-property-decorator";
@Component({
  components: {TheApplicationShell}
})
export default class App extends Vue {
}
</script>
