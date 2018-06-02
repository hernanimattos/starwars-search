<template>
	<section class="result">
		<ul>
			<li class="result-item" v-for="(result, index) in resultSearch">
				<details>
					<summary><h2> {{ result.name }}</h2></summary>
					<div class="result-item--infos">
						<p><span>Gender:</span> {{result.gender}}</p>
						<p><span>Eye Color:</span> {{result.eye_color}}</p>
						<p><span>Height:</span> {{result.height}}</p>
						<p><span>Hair color: </span>{{result.hair_color}}</p>
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

