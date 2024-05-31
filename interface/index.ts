import { CategoryInterface as Category } from "@/interface/base"

/* 商品基类 用于描述商品内容*/
export const checkObject = (target : unknown) => typeof target == 'object' && !!target
export const checkFunction = (target : unknown) => typeof target == 'function'


export const freezeProperties = <T extends Object>(target : T, keys : string[]) => {
	if (!checkObject(target)) return
	const result = {}
	keys.forEach(item => {
		result[item] = {
			writable: false
		}
	})
	Object.defineProperties(target, result)
}

export interface KeywordInterface {
	id : string
	name : string
}

/* banner interface */
export interface Carousel {
	id:string
	/* 宣传图 */
	img:string
	/* 目标地址 */
	target:string
	/* 品牌 */
	brand:string
	/* 来源 */
	source:string
	/* 开始日期 */
	startTime:number
	/* 结束日期 */
	endTime:number
}

/* 类别 */
export interface CategoryInterface {
	id:string
	/* 名称 */
	name:string
	/* 图标 */
	icon:string
	/* */
}




export class Goods {
	/* id */
	id : string
	/* 名称 */
	name : string
	/* 品牌 */
	brand : string
	/* 类别 */
	category : Category
	/* 库存 */
	stock : number
	/* 原价格 */
	price : number

	/* method 获取价格*/
	getSellPrice(preferential = 0) {
		if (preferential > this.price) return 0
		return this.price - preferential
	}

	constructor(config : any) {
		Object.assign(this, config)
		freezeProperties(this, ['id', 'name', 'brand', 'price'])
	}
}



// goods  brands  category