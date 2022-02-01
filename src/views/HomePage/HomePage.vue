<template>
  <div>
    <the-application-shell >
      <div class="grid grid-cols-3 gap-6">
        <TheJobListingComponent class="col-span-1"/>
        <TheJobListingComponent class="col-span-1"/>
        <TheJobListingComponent class="col-span-1"/>
        <TheJobListingComponent class="col-span-1"/>
        <TheJobListingComponent class="col-span-1"/>
        <TheJobListingComponent class="col-span-1"/>
        <TheJobListingComponent class="col-span-1"/>
        <TheJobListingComponent class="col-span-1"/>
        <TheJobListingComponent class="col-span-1"/>
        <TheJobListingComponent class="col-span-1"/>
        <TheJobListingComponent class="col-span-1"/>
      </div>
    </the-application-shell>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import TheApplicationShell from "@/components/TheApplicationShell.vue";
import TheJobListingComponent from "@/components/TheJobListingComponent.vue";
@Component({
  components: {TheJobListingComponent, TheApplicationShell, }
})
export default class HomePage extends Vue{}
</script>
