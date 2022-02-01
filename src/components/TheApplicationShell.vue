<template>
  <div class="min-h-full">
    <div class="pb-32 bg-gray-800">
      <nav class="bg-gray-800">
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="border-b border-gray-700">
            <div class="flex justify-between items-center px-4 h-16 sm:px-0">
              <div class="flex items-center">
                <img class="flex-shrink-0 mr-3 w-8 h-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">
                <h1 class="text-xl font-bold text-white">Dev Jobs</h1>
                <div class="hidden md:block">
                  <div class="flex items-baseline ml-10 space-x-4">
                      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                    <router-link :to="{name: 'home'}" class="px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-md" aria-current="page">Home page</router-link>
                  </div>
                </div>
              </div>
              <button class="flex">
                <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 w-5 h-5" viewBox="0 0 20 20" fill="white">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
                <span class="text-white">Dark mode</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile menu, show/hide based on menu state. -->
        <div class="border-b border-gray-700 md:hidden" id="mobile-menu">
          <div class="px-2 py-3 space-y-1 sm:px-3">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <router-link :to="{name: 'home'}" class="block px-3 py-2 text-base font-medium text-white bg-gray-900 rounded-md" aria-current="page">Dashboard</router-link>
          </div>
        </div>
      </nav>
      <header class="py-10">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <TheFilterBar />
        </div>
      </header>
    </div>

    <main class="-mt-32">
      <div class="px-4 pb-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="px-5 py-8 bg-white rounded-lg shadow sm:px-6">
          <slot/>
        </div>
        <!-- /End replace -->
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import TheFilterBar from "@/components/TheFilterBar.vue";
@Component({
  components: {TheFilterBar}
})
export default class TheApplicationShell extends Vue {}
</script>
