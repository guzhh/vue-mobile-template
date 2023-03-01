<template>
	<div class="authErr">
		<svg
			t="1638335212627"
			class="icon"
			viewBox="0 0 1024 1024"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			p-id="2295"
			width="86"
			height="86"
		>
			<path
				d="M512 794.026667a44.8 44.8 0 1 1 44.8-44.8A44.8 44.8 0 0 1 512 794.026667z m-40.106667-563.2a40.106667 40.106667 0 0 1 80.213334 0v369.066666a40.106667 40.106667 0 0 1-79.786667 0zM512 0a512 512 0 1 0 512 512A512 512 0 0 0 512 0z"
				fill="#f1543f"
				p-id="2296"
			></path>
		</svg>
		<p>{{ errorMessage }}</p>
	</div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const errorMessage = ref(route.query.errorMessage);
</script>

<style scoped lang="less">
.authErr {
	text-align: center;
	padding-top: 80px;

	p {
		padding: 0px;
		margin-top: 50px;
	}
}
</style>
