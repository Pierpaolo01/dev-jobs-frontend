<template>
  <div class="grid grid-cols-12 gap-x-6">
    <div class="inline-flex col-span-6 bg-white rounded-md">
      <svg xmlns="http://www.w3.org/2000/svg" class="self-center mx-4 w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="purple">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input type="text" name="search" class="block p-4 w-full rounded-md border-none outline-none sm:text-sm" placeholder="Search by title, company or expertise">
    </div>

    <div class="inline-flex col-span-2 bg-white rounded-md">
      <svg xmlns="http://www.w3.org/2000/svg" class="self-center mx-4 w-6 h-6" viewBox="0 0 20 20" fill="purple">
        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
      </svg>
      <input type="text" name="search" class="block p-4 w-full rounded-md border-none outline-none sm:text-sm" placeholder="Filter by location">
    </div>

    <div class="inline-flex items-center justify-between col-span-2 bg-white rounded-md px-2">
      <div class="flex items-center">
        <ToggleComponent class="mr-2" v-model="fulltime"/>
        <span class="ml-2 font-bold">Fulltime only</span>
      </div>
    </div>

    <button class="col-span-2 flex px-4 h-full text-white justify-between items-center bg-purple-500 rounded-md self-end">
      <span>Search</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 self-center ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
  </button>
  </div>
</template>

<script lang="ts">
import {Vue} from "vue-property-decorator";
import Component from "vue-class-component";
import ToggleComponent from "@/components/ToggleComponent.vue";
@Component({
  components: {ToggleComponent}
})
export default class TheFilterBar extends Vue {
  public fulltime = false;

}
</script>
