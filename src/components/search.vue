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
      console.log('jjjj');
      this.$root.$emit('search', this.search.replace(/\s/g, '+'));
      this.$store.dispatch('SEARCH', this.search.replace(/\s/g, '+'));
      this.search = '';
    },
    trackingFormSubmit() {
      console.log('form enviado');
      window.mixpanel.track_forms('#search', 'send form', {
        referrer: document.referrer,
      });
    },
  },
};
</script>

