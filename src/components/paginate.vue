<template>
	<section class="paginate">
		<article>
			<button @click.prevent="changePage(result.previous, 'page')" v-show="result.previous" :disabled="result.previous <= 0"> PREVIOUS</button>
			<button @click.prevent="changePage(result.next, 'page')" v-show="result.next"> NEXT</button>
		</article>
	</section>
</template>

<script>
export default {
  name: 'Paginate',
  data() {
	  return {
		  search: '',
	  };
  },
  computed: {
    result() {
      return this.$store.state.searchResult;
    },
  },
  methods: {
    seachParamUrl(url, term) {
      const query = url.split('?')[1].split('&');
	  const valueQuery = query.map((q) => {
        const queryArray = q.split('=');
        if (queryArray.indexOf(term) === 0) {
          return queryArray[1];
        }
	  });
      return valueQuery[1] || valueQuery[0];
    },
    changePage(url, query) {
      const searchParam = {
      	  page: this.seachParamUrl(url, query),
      	  term: this.search,
      };
      this.$store.dispatch('CHANGE_PAGE', searchParam);
    },
  },
  mounted() {
	  this.$root.$on('search', (payload) => {
		  this.search = payload;
	  });
  },
};
</script>

