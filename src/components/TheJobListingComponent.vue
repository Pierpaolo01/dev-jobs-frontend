<template>
  <div class="relative p-6 bg-blue-50 rounded-md">
    <div class="flex flex-col">
      <img class="absolute -top-4 max-w-10 max-h-10" src="https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png" alt="logo">
      <div class="mb-6">
        <span class="text-sm font-light">X hours ago</span> * <span class="text-sm font-light">FTE</span>
        <h3 class="font-bold text-lg">Position role</h3>
        <span class="text-sm font-light">Company</span>
      </div>
      <span class="text-blue-500 text-sm font-light">The Netherlands</span>
    </div>

  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class TheJobListingComponent extends Vue {}
</script>
