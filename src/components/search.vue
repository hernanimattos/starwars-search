<template>
  <main>
    <form
      @submit.prevent="searchTerms"
      class="form-search"
      :class="{'top':(resultSearchCount > 0)}"
      id="search"
    >
      <input type="text" name id placeholder="Ex: r2" v-model="search" />
      <input type="submit" value="Buscar" />
    </form>
    <span class="result-total" v-if="this.resultSearchCount > 0">Total: {{this.resultSearchCount}}</span>
  </main>
</template>

<script>
var mixpanel = require('mixpanel-browser');
mixpanel.init('45a7d4fbb212809648303d8e177fc118');

console.log(mixpanel);
export default {
  name: 'Search',
  data() {
    return {
      search: '',
    };
  },
  computed: {
    resultSearchCount() {
      return this.$store.state.searchResult.count;
    },
  },
  methods: {
    searchTerms() {
      this.trackingFormSubmit();
      this.$root.$emit('search', this.search.replace(/\s/g, '+'));
      this.$store.dispatch('SEARCH', this.search.replace(/\s/g, '+'));
      this.search = '';
    },
    trackingFormSubmit() {
      console.log('form enviado');
      mixpanel.track_forms('#search', 'sendForm', {
        referrer: document.referrer,
      });
    },
  },
};
</script>

