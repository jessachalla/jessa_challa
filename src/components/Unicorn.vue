<template>
  <v-data-table
    dense
    fixed-header
    :headers="headers"
    sort-by="name"
    :items="businesses"
    :loading="loading"
    :search="search"
    :items-per-page="100000"
    class="elevation-1 data-table"
  >
    <!-- v-if="this.businesses.length" -->
    <template v-slot:top>
      <div
        style="width: 100%;"
        class="d-flex align-center pt-4 px-2 flex-wrap"
      >
        <v-btn class="mx-4" color="primary" small href="https://docs.google.com/forms/d/e/1FAIpQLSctlAOkkbKRVIJ5VI6caHlK3eZX84R1hvrcCX98WPXQd7_zCw/viewform" target="_blank" outlined>CLick Here to Submit a Business</v-btn>
        <v-text-field
          v-model="search"
          label="Search Businesses"
          class="mx-4"
        ></v-text-field>
      </div>
    </template>

    <template #item.name="{ item }">
      <a target="_blank" :href="item.website">
        {{ item.name }}
      </a>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data () {
    return {
      dataLoaded: 0,
      apiData: undefined,
      page: 0,
      totalBusinesses: 0,
      numberOfPages: 0,
      businesses: [],
      loading: true,
      search: '',
      options: {},
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Industry', value: 'industry' },
        { text: 'About', value: 'about' },
        { text: 'Ownership', value: 'ownership' }
      ]
    }
  },
  created: function () {
    this.getBusinesses()
  },
  // this one will populate new data set when user changes current page.
  watch: {
    options: {
      handler () {
        this.getBusinesses()
      }
    },
    deep: true
  },
  methods: {
    getBusinesses () {
      this.loading = true
      const axios = require('axios')
      const url =
        'https://v1.nocodeapi.com/jessarose/google_sheets/lgyahkMFAKNvSyxs?tabId=Sheet1'
      axios
        .get(url, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then((response) => {
          this.businesses = response.data.data
          this.loading = false
        })
    }
  },
  // this will trigger in the onReady State
  mounted () {
    this.getBusinesses()
  }
}
</script>
