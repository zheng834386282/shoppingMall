<template>
  <div id="category">
		<category-nav-bar />
		<div class="content">
			<category-left class="category-left"></category-left>
			<category-right class="category-right"></category-right>
		</div>
		
  </div>
</template>
<script>
import CategoryNavBar from './childComps/CategoryNavBar.vue'
import CategoryLeft from "./childComps/CategoryLeft.vue";
import CategoryRight from "./childComps/CategoryRight.vue";
import Scroll from "components/common/better-scroll/Scroll.vue";
export default {
  data() {
    return {
			
    };
  },
  created() {},
  mounted() {
    
  },
  components: {
		CategoryNavBar,
    CategoryLeft,
    CategoryRight,
		Scroll
  },
  methods: {
    
  }
};
</script>
<style scoped>
  .content{
		display: flex;
	}
	
	.category-right{
		flex:1;
		background-color: white;
	}
	
</style>
