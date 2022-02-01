<template>
  <div class="bg-white px-4 py-5 border-gray-200 sm:px-6 rounded shadow border">
    <div class="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap border-b border-gray-200">
      <div class="ml-4 mt-4">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          {{title}}
        </h3>
        <p class="mt-1 text-sm text-gray-500 w-4/5 mb-4">
          {{description}}
        </p>
      </div>
      <div class="flex-shrink-0">
        <button type="button" class="relative inline-flex items-center self-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Create new job
        </button>
      </div>
    </div>
    <slot />
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class TheCardComponent extends Vue{
  @Prop() readonly title!: string;
  @Prop() readonly description!: string;

}
</script>
