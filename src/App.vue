<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
	position: relative;
	max-width: 1200px;
	padding-right: 15px;
	padding-left: 15px;
	margin: 0 auto;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-size: 1rem;
	color: #2c3e50;
}

:focus {
	outline: none;
}

.form-search *{
	box-sizing: border-box;
	vertical-align: top;
}

.form-search {
	position: relative;
	margin-top: 50vh;
	display: grid;
	transition: margin-top  700ms;
	margin-bottom: 1rem;

	@media (min-width:'520px') {
	 grid-template-columns: 80% 20%;

	}
}

.top {
	margin-top: 2vh;
	transition: margin-top  700ms;
}

.form-search input{
	display: inline-block;
	padding: 0px;
	border: 0px;
	border: 1px solid #ccc;
	padding-left: 0.5rem;
	padding-right: 0.5rem;
	padding-top: 1rem;
	padding-bottom: 1rem;
	font-size: 1rem;
	-webkit-appearance: none;
}

.form-search input[type="submit"] {
	background-color:#26716c;
	color: #fff;
	border: none;
	text-transform: uppercase;
}

.form-search input[type="submit"]:hover {
	opacity: 0.9;
}

details summary::-webkit-details-marker {
	display: none;
}

details summary {
	border-bottom: 1px solid #ccc;
	padding: 1.25rem;
	background-color: #26716c;
	color: #fff;
}
summary h2 {
	display: inline-block;

}
summary:before {
	content: '+';
	padding: 0.2rem;
}

details[open] summary:before {
	content: "-";
	transition: all .2s ease;
}

.result-item {
	display: block;
	margin-bottom: .25rem;
	transform: scale(1);
	box-shadow: 0 4px 3px 0 rgba(0, 0, 0, 0), 0 2px 1px 0 rgba(0, 0, 0, 0.19);
	transition: background-color 1s;
	transition: transform 1s;
}

.result-item--infos {
	margin-top: 1rem;
	padding: 1.25rem;
}

.result-total {
	padding-bottom: 1rem;
	display: block;
}

.result-item--infos {
	display: grid;
	grid-template-columns: auto auto;
}

.result-item--infos p {
	display: block;
	padding-top: 1rem;
	padding-bottom: 1rem;
}

.result-item--infos p span {
	font-weight: bold;
}

.paginate {
	padding-top:1rem;
	padding-bottom: 1rem;
}

.paginate article {
	display: grid;
	grid-template-columns: auto auto;
	grid-column-gap: 2rem;
	text-align: center;

}

button {
	padding-top:1rem;
	padding-bottom: 1rem;
	border: none;
	outline: none;
	box-sizing: border-box;
	cursor: pointer;
	background-color: #26716c;
	color: #fff;
	font-weight: bold;
	-webkit-appearance: none;
	border-radius: 0;
}

button:hover {
	opacity: 0.9;
}
</style>
