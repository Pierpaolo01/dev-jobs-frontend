<template>
      <div class="grid grid-cols-3 gap-x-8 gap-y-10">
        <TheJobListingComponent
            class="col-span-1"
            v-for="job in jobListings"
            :key="job.id"
            :job="job"
        />
      </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import TheApplicationShell from "@/components/TheApplicationShell.vue";
import TheJobListingComponent from "@/components/TheJobListingComponent.vue";
import Services from "@/services";
@Component({
  components: {TheJobListingComponent, TheApplicationShell, }
})
export default class HomePage extends Vue {
  public jobListings = []

  public created():void {
    this.getJobs();
  }

  public getJobs():void {
    Services.getJobs()
    .then((response) => {
      if(response.status === 200) {
        this.jobListings = response.data
      }
    })
  }
}
</script>
