<template>
	<section class="result">
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
</template>

<script>
export default {
  name: 'Result',
  computed: {
    resultSearch() {
      return this.$store.state.searchResult.results;
    },
  },
};
</script>

