<template>
  <div>
    <the-card-component class="mx-auto max-w-2xl space-y-8" title="Update a job posting" description="This will be shown on our homepage for all developers on the internet to see">
      <div>
        <label class="block text-sm font-medium text-gray-700">Company Logo</label>
        <div class="mt-1">
          <input
              v-model="company_name"
              type="text"
              name="company_logo"
              class="block p-4 w-full rounded-md border border-gray-500 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="https://your-logo.com"
          >
        </div>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700">Job title</label>
        <div class="mt-1">
          <input v-model="job_title" type="text" name="job_title" class="block p-4 w-full rounded-md border border-gray-500 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Head of Tech">
        </div>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700">Country</label>
        <div class="mt-1">
          <input v-model="location" type="text" name="location" id="email" class="block p-4 w-full rounded-md border border-gray-500 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="The Netherlands">
        </div>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700">Position is fulltime or part-time</label>
        <ToggleComponent class="mt-1" v-model="isFullTime"/>
      </div>

      <div class="flex justify-between">
        <button class="relative inline-flex items-center self-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
          Cancel
        </button>
        <button @click="update" class="relative inline-flex items-center self-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          update job
        </button>
      </div>
    </the-card-component>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import TheApplicationShell from "@/components/TheApplicationShell.vue";
import TheCardComponent from "@/components/TheCardComponent.vue";
import ToggleComponent from "@/components/ToggleComponent.vue";
import Services from "@/services";
@Component({
  components: {ToggleComponent, TheCardComponent, TheApplicationShell}
})
export default class UpdatePage extends Vue {
  public company_name = ''
  public job_title = ''
  public location = ''
  public isFullTime = false;

  public created():void {
    Services.getAJobListing(this.$route.params.jobId)
    .then((response) => {
      if(response.status === 200) {
        this.company_name = response.data.company;
        this.job_title = response.data.position;
        this.isFullTime = response.data.employmentType
        this.location = response.data.location;
      }
    })
  }
  public update():void {
    const newJob = {
      position: this.job_title,
      company: this.company_name,
      location: this.location,
      employmentType: this.isFullTime,
    }
    Services.updateJobListing(this.$route.params.jobId, newJob)
    .then((response) => {
      if (response.status === 202) {
        this.$router.push({name: 'home'})
      }
    })

  }
}
</script>
