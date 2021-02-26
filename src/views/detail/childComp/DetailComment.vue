<template>
  <div id="detail_comment" v-if="Object.keys(comment).length != 0">
    <div class="comment_title">
      <span class="comment_name">用户评价</span>
      <span class="comment_more" @click="moreComment">更多</span>
    </div>
    <div class="comment_info">
      <div class="u_info">
        <img :src="comment.user.avatar" alt="" />
        <span>{{ comment.user.uname }}</span>
      </div>
      <div class="comment_content">
        <div class="content">{{ comment.content }}</div>
        <p class="content_info">
          {{ comment.created | dateShow }} {{ comment.style }}
        </p>
      </div>
    </div>
    <div class="shop_reply" v-if="comment.explain != null">
      {{ comment.explain }}
    </div>
    <div class="comment_img" v-if="comment.images != null">
      <img
        :src="item"
        alt=""
        v-for="(item, index) in comment.images"
        :key="index"
      />
    </div>
		
  </div>
</template>
<script>
import { formatDate } from "common/utils.js";
export default {
  props: {
    comment: {
      type: Object,
      default() {
        return {};
      }
    },
		iid:{
			type:String,
			default(){
				return ''
			}
		}
  },

  filters: {
    dateShow(value) {                       //过滤器会把 | 前面的值作为value并对value进行处理后返回
      let date = new Date(value * 1000);    //Date传进去的参数要求单位是ms
      return formatDate(date, "yyyy-MM-dd");//MM表示月份，为了和minutes - mm 分开所以大写，需要什么格式就在这修改,yy就显示19年
    }
  },
	methods:{
		moreComment(){
			// console.log('加载更多评论')
			//这里因为老师接口里面没有放推荐商品的id所以就做到这
			this.$router.push({
				path:'/detail/comments',
				query:{
					iid:this.iid
				}
			})	
		}
	}
	
};
</script>
<style scoped>
#detail_comment {
  font-size: 10.4px;
  padding: 6.72px 5.44px;
}
.comment_title {
  padding: 6.72px 0;
  padding-bottom: 12.8px;
  border-bottom: 1.28px solid rgba(128, 128, 128, 0.3);
  position: relative;
}

.comment_more {
  position: absolute;
  right: -4.16px;
  top: 0px;
}
.comment_more::after {
  content: "";
  background: url("~assets/img/detail/right_arrow.svg") 0 0/16.96px 16.96px;
  display: inline-block;
  position: relative;
  top: 4.16px;
  width: 16.96px;
  height: 16.96px;
}

.u_info {
  padding: 6.72px 0;
  line-height: 28.8px;
  display: flex;
}
.u_info img {
  width: 28.8px;
  height: 28.8px;
  border-radius: 50%;
  border: 0.64px solid rgba(128, 128, 128, 0.3);
}
.u_info span {
  margin-left: 6.72px;
}

.content {
  line-height: 16px;
  color: #666;
}
.content_info {
  color: #999;
  padding: 4.8px 0;
}

.shop_reply {
  border-top: 0.64px solid rgba(128, 128, 128, 0.4);
  padding: 8px 0;
  color: gray;
  line-height: 12.8px;
}

.comment_img img {
  margin-right: 3.36px;
  width: auto;
  height: 68.16px;
}
</style>
