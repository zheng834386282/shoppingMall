<template>
  <div class="cart_list_item">
    <check-button @click.native="checkClick" :isChecked="item.checked"/>
    <div class="item_img" >
      <img :src="item.img" alt="" />
    </div>
    <div class="item_info" >
      <p class="item_title">{{ item.title }}</p>
      <p class="item_desc">{{ item.desc }}</p>
      <span class="item_price">￥{{ item.realPrice }}</span>
      <span class="item_count">x{{ item.count }}</span>
    </div>
  </div>
</template>
<script>
import CheckButton from "components/content/checkButton/CheckButton.vue";
export default {
  props: {
    item: Object
  },
  components: {
    CheckButton
  },
	mounted() {
		// console.log(this.item)
	},
	methods:{
		checkClick(){
			this.item.checked=!(this.item.checked)
		}
	}
};
</script>

<style scoped>
.cart_list_item {
  width: 100%;
  height: 88px;
  border-bottom: 0.64px solid rgba(128, 128, 128, 0.4);
  display: flex;
  padding: 6.4px;
  padding-left: 0px;
}

.item_img {
  width: 56px;
  height: 100%;
}
.item_img img {
  width: 100%;
  height: 100%;
  border-radius: 6.4px;
}

.item_info {
  position: relative;
  width: calc(100% - 56px - 19.2px - 6.4px);
  margin-left: 0.4rem;
}
.item_info p {
  display: inline-block;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.item_title {
  font-size: 12px;
  padding-bottom: 8px;
}
.item_desc {
  font-size: 9.6px;
  color: gray;
}
.item_price {
  position: absolute;
  left: 0;
  bottom: 6.4px;
  font-size: 12px;
  color: orangered;
}
.item_count {
  position: absolute;
  right: 6.4px;
  bottom: 6.4px;
  font-size: 12px;
}

</style>
