import {request} from './request'
//根据id获取详情页基本信息
export function getDetailData(iid) {
    return request({
        url:'/detail',
        params:{
           iid
        }
    })
}
//推荐信息
export function getRecommend() {
    return request({
        url:'/recommend'
    })
}



export class Goods {
    constructor(itemInfo,columns,services){
        this.title=itemInfo.title
        this.desc=itemInfo.desc
        this.newPrice=itemInfo.price
        this.oldPrice=itemInfo.oldPrice
        this.realPrice=itemInfo.oldPrice
        this.discount=itemInfo.discountDesc
        this.discountBgColor=itemInfo.discountBgColor
        this.columns=columns
        this.services=services
        this.realPrice=itemInfo.lowNowPrice
    }
}
export class Shop {
    constructor(shopInfo){
        this.logo=shopInfo.shopLogo;
        this.name=shopInfo.name;
        this.fans=shopInfo.cFans;
        this.sells=shopInfo.cSells;
        this.score=shopInfo.score;
        this.goodsCount=shopInfo.cGoods
    }
}
export class Params{
    constructor(itemParams){
        this.set=itemParams.info.set
        this.images=itemParams.info.images?itemParams.info.images:''
        this.tables=itemParams.rule.tables
    }
}














