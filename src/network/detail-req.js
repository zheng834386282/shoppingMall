import {request} from './request.js'

//1.获取详情页的数据
export function getDetailData(iid){
	return request({
		url:'/detail',
		params:{
			iid
		}
	})
}

//2.获取推荐数据
export function getRecommendData(){
	return request({
		url:'/recommend'
	})
}

//2.将商品详情信息整合到一个类中
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.oldPrice = itemInfo.oldPrice;
    this.lowNowPrice = itemInfo.lowNowPrice;
    this.price = itemInfo.price;
    this.discountBgColor = itemInfo.discountBgColor;
    this.discountDesc = itemInfo.discountDesc;
		this.topImages=itemInfo.topImages;

    this.columns = columns;

    this.services = services;
  }
}

//3.将店铺详情整合到一个类中
export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo; //字符串
    this.score = shopInfo.score; //数组
    //this.fans = shopInfo.cFans;
    this.goods = shopInfo.cGoods;
    this.sells = shopInfo.cSells;
    this.name = shopInfo.name;
  }
}

//4.将商品参数整合到一个类中
export class GoodsParam {
  constructor(info, rule) {
    this.image = info.images ? info.images[0] : "";
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}
