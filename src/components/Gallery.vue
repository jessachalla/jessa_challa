<template>
  <v-container>
    <a :href="link">{{ linkText }}</a>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    link: 'https://arcg.is/1viKzz0',
    linkText: 'Grand Rapids Area Minority Owned Businesses'
  })
}
</script>
