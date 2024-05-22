/* 商品基类 用于描述商品内容*/

class Goods {
	/* id */
	id:string
	/* 名称 */
	name:string
	/* 品牌 */
	brand: string
	/* 库存 */
	stock:number
	/* 原价格 */
	price: number
	
	/* method 获取价格*/
	getSellPrice(preferential=0) {
		if(preferential > this.price) return 0
		return this.price - preferential
	}
	
	constructor(config: any){
		
	}
}