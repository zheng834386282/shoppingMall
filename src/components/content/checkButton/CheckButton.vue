<template>
  <div>
    <div class="check_button" :class="{checked:isChecked}">
			<!-- <img src="~assets/img/cart/yes.svg" alt="" :class="{checked:isChecked}"> -->
		</div>
  </div>
</template>

<script>
  export default {
    name: 'CheckButton',
		props:{
			isChecked:{
				type:Boolean,
				default(){
					return true
				}
			}
		},
		
  }
</script>

<style scoped>
  .check_button {
		position: relative;
		top: calc(50% - 0.35rem);
		width: 1.125rem;
		height: 1.125rem;
		margin: 0 auto;
		border-radius: 0.5rem;
		
		border: 0.04rem solid rgba(128, 128, 128, 0.4);
	}
	.checked{
		background: url("~assets/img/cart/yes.svg") -1px -1px no-repeat;
		background-size:1.125rem 1.125rem;
	}
</style>
