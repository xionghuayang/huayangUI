<!--
 * @Author: huayang
 * @Description: 
 * @Date: 2022-09-01 17:43:29
 * @LastEditTime: 2022-09-01 18:00:23
 * @FilePath: \huayang_ui\src\Card\Card.vue
-->
<template>
	<div
		class="px-20px py-20px bg-#f2f2f2 cursor-pointer transition duration-300 ease-in-out hover:shadow-lg"
	>
		<slot> 默认文本 </slot>
	</div>
</template>
<script>
export default {
	name: "hCard"
};
</script>
<script setup lang="ts"></script>
<style scoped lang="scss"></style>
