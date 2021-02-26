<template>
  <div id="detail_goods" v-if="Object.keys(goods).length != 0">
    <div class="title">{{ goods.title }}</div>

    <div class="info">
      <span class="n_price">￥{{ goods.lowNowPrice }}</span>
      <del>
        <span class="o_price">{{ goods.oldPrice }}</span>
      </del>
      <span :style="{ backgroundColor: goods.discountBgColor }" class="discount"
        >{{ goods.discountDesc }}
      </span>
    </div>

    <div class="columns">
      <span v-for="(item, index) in goods.columns" :key="index">{{
        item
      }}</span>
    </div>

    <div class="services">
      <div
        v-for="(item, index) in goods.services"
        v-if="itemShow(item)"
        :key="index"
      >
        <img :src="item.icon" alt="" class="item-icon"/>
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    goods: {}
  },
  computed: {
    itemShow() {
      return function(item) {
        return item.icon && item.name !== "72小时发货";
      };
    }
  }
};
</script>
<style scoped>
#detail_goods {
  padding: 6.72px;
}
.title {
  font-size: 12.288px;
}

.info {
  margin: 6.72px 0;
}
.n_price {
  font-size: 13.6px;
  color: var(--color-high-text);
}
.o_price {
  margin: 0 3.36px;
  font-size: 8.192px;
  color: gray;
}
.discount {
  color: white;
  font-size: 9.6px;
  padding: 2.048px;
  border-radius: 3.36px;
  position: relative;
  top: -3.36px;
}

.columns {
  display: flex;
  justify-content: space-between;
  padding-bottom: 6.72px;
  border-bottom: 0.672px solid rgba(128, 128, 128, 0.3);
  /* 孩子span继承下面2个样式 */
  font-size: 9.6px;
  color: gray;
}

.services {
  display: flex;
  font-size: 12.8px;
  justify-content: space-between;
  padding: 13.6px 0;
  border-bottom: 2.048px solid rgba(128, 128, 128, 0.2);
}
.services img {
  width: 11.392px;
	height: 12.8px;
	margin-right: 5px;
}

</style>
