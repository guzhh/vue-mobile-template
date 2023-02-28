<template>
	<router-view />
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import debug from "@/utils/debug";

const route = useRoute();

// 进入系统获取debug参数
onMounted(() => {
	debug.config(route.query.debug);
});
</script>

<style scoped></style>
