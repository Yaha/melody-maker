<template>
  <div v-if="fetching">Chargement, merci de patienter</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['fetching'])
  }
}
</script>
