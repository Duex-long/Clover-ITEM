/* banner interface */
 interface Carousel {
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
interface CategoryInterface {
	id:string
	/* 名称 */
	name:string
	/* 图标 */
	icon:string
	/* */
}
export {
	Carousel,
	CategoryInterface
}