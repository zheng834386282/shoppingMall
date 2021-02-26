<template>
  <div id="detail_goods_info" v-if="Object.keys(detailInfo).length != 0">
    <div class="goods_info_desc">
      <div style="float: left;" class="desc_line">
        <i class="desc_dot"></i>
      </div>
      <div class="desc_text">
        {{ detailInfo.desc }}
      </div>
      <div style="float: right;" class="desc_line">
        <i style="right: 0px;" class="desc_dot"></i>
      </div>
    </div>
    <div class="goods_info_key">
      {{ detailInfo.detailImage[0].key }}
    </div>
    <div class="goods_info_imgs">
      <img
        :src="item"
        alt=""
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :keys="index"
        @load="loadImg"
      />
    </div>
  </div>
</template>
<script>
import {deBounce} from 'common/utils.js'
export default {
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      }
    },
		
  },
	data(){
		return{
			timer:null
		}
	},
  methods: {
    loadImg() {
			//利用防抖使发射只进行一次
			if(this.timer)clearTimeout(this.timer);
			this.timer=setTimeout(()=>{
				this.emitLoad()
			},500)
			//这里不使用下面的方法是因为放在deBounce里的return Function中可能找不到this了
    },
		emitLoad(){
			this.$emit("loadImgEvent")
		}
		
  }
	
};
</script>
<style scoped>
#detail_goods_info {
  font-size: 10.88px;
}
.goods_info_desc {
  font-size: 9.6px;
  padding: 6.72px 5.44px;
}
.desc_line {
  width: 56px;
  height: 0.64px;
  background-color: gray;
  position: relative;
}

.desc_dot {
  position: absolute;
  top: -1.6px;
  display: inline-block;
  width: 3.36px;
  height: 3.36px;
  background-color: black;
  border-radius: 50%;
}

.desc_text {
  padding: 13.6px 0;
  color: gray;
}

.goods_info_key {
  padding: 6.72px 5.44px;
}
.goods_info_imgs img {
  width: 100%;
}
</style>
