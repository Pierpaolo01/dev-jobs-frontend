<template>
  <div class="relative p-6 bg-blue-50 rounded-md">
    <button class="absolute top-4 right-4" @click="deleteJob">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
           stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    </button>
    <button class="absolute top-12 right-4" @click="$router.push({name: 'update', params: {jobId: job.id}})">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    </button>
    <div class="flex flex-col">
      <img class="absolute -top-4 max-w-10 max-h-10" src="https://logos-world.net/wp-content/uploads/2020/12/Lays-Logo.png" alt="logo">
      <div class="mb-6">
        <span class="text-sm font-light">{{job.employmentType}} hours ago</span> * <span class="text-sm font-light"> {{(job.employmentType >= 40)? 'Parttime' : 'Fulltime' }}</span>
        <h3 class="font-bold text-lg">{{job.position}}</h3>
        <span class="text-sm font-light">{{job.company}}</span>
      </div>
      <span class="text-blue-500 text-sm font-light">{{job.location}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from "vue-property-decorator";
import Services from "@/services";

@Component
export default class TheJobListingComponent extends Vue {
  @Prop() readonly job!: any;

  public deleteJob():void {
    Services.deleteJobListing(this.job.id)
    .then((response) => {
      if(response.status === 204) {
        this.listingDeleted();
      }
    })
  }

  @Emit()
  public listingDeleted():void {
    return;
  }
}
</script>
