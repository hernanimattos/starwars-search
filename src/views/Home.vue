<template>
	<main>
		<search/>
		<result/>
		<paginate/>
		<!-- <form @submit.prevent="searchTerms" class="form-search" :class="{'top':(resultSearchCount > 0)}">
			<input type="text" name="" id="" placeholder="Ex: re2" v-model="search">
			<input type="submit" value="Buscar">
		</form>
			<span>Total: {{this.resultSearchCount}}</span>
		<section class="result" :style="[style]">
			<ul>
				<li class="result-item" v-for="(result, index) in resultSearch">
					<details>
						<summary><h2> {{ result.name }}</h2></summary>
						<div class="result-item--infos">
							<p>Gender: {{result.gender}}</p>
						</div>
					</details>
				</li>
			</ul>
		</section>
		<article>
			<a @click.prevent="changePage(result.previous, 'page')" v-if="result.previous"> PREVIOUS</a>
			<a @click.prevent="changePage(result.next, 'page')" v-if="result.next"> NEXT</a>
		</article> -->
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

