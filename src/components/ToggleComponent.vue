<template>
  <div
    class="inline-flex relative flex-shrink-0 w-11 h-6 bg-gray-200 rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    :class="toggleState? 'bg-indigo-600' : 'bg-gray-200' "
    role="switch"
    aria-checked="false"
    @click="toggleState = !toggleState; buttonClicked"
  >
    <span class="sr-only">toggle</span>
    <span
      class="inline-block relative w-5 h-5 bg-white rounded-full ring-0 shadow transition duration-200 ease-in-out transform pointer-events-none"
      :class="toggleState? 'translate-x-5' : 'translate-x-0' "
    >
      <span
        v-if="hasIcons"
        class="flex absolute inset-0 justify-center items-center w-full h-full transition-opacity"
        :class="toggleState? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200' "
        aria-hidden="true"
      >
        <svg
          class="w-3 h-3 text-gray-400"
          fill="none"
          viewBox="0 0 12 12"
        >
          <path
            d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
      <span
        v-if="hasIcons"
        class="flex absolute inset-0 justify-center items-center w-full h-full opacity-0 transition-opacity duration-100 ease-out"
        :class="toggleState? 'opacity-100 ease-in duration-200': 'opacity-0 ease-out duration-100'"
        aria-hidden="true"
      >
        <svg
          class="w-3 h-3 text-indigo-600"
          fill="currentColor"
          viewBox="0 0 12 12"
        >
          <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
        </svg>
      </span>
    </span>
  </div>
</template>

<script lang="ts">
import {
  Component, Emit, Prop, Vue,
} from 'vue-property-decorator';

@Component
export default class ToggleComponent extends Vue {
  @Prop() readonly value!: boolean;

  @Prop({ default: () => false }) readonly hasIcons!: boolean;

  public toggleState = this.value;

  @Emit('input')
  public buttonClicked(): boolean {
    return this.toggleState;
  }
}
</script>
