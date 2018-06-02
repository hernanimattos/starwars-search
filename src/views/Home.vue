<template>
	<main>
		<search/>
		<result/>
		<paginate/>
	</main>
</template>

<script>
import search from '@/components/search.vue';
import result from '@/components/result.vue';
import paginate from '@/components/paginate.vue';

export default {
  name: 'Home',
  components: {
	  search,
	  result,
	  paginate,
  },
  computed: {
    resultSearchCount() {
      return this.$store.state.searchResult.count;
    },
    resultSearch() {
      return this.$store.state.searchResult.results;
    },
    result() {
      return this.$store.state.searchResult;
    },
  },
  methods: {
    searchTerms() {
	  this.$store.dispatch('SEARCH', this.search);
	  this.search = '';
    },
    seachParamUrl(url, term) {
      const query = url.split('?')[1].split('&');
	  const valueQuery = query.map((q) => {
        const queryArray = q.split('=');
        if (queryArray.indexOf(term) === 0) {
          return queryArray[1] || [];
        }
	  });
      return valueQuery[0];
    },
    changePage(url, term) {
      const searchParam = {
      	  page: this.seachParamUrl(url, term),
      	  term: this.search,
      };
      this.$store.dispatch('CHANGE_PAGE', searchParam);
    },
  },
};
</script>

