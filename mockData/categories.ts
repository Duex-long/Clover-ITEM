import { CategoryInterface } from "@/interface/base"
import MenuIcon from '@/static/icon/menu.svg'


let id = 0
class Category implements CategoryInterface{
	icon: string
	name: string
	id: string
	constructor(config:Partial<CategoryInterface>) {
		this.id = config.id || `${id++}`
		this.name = config.name
		this.icon = config.icon || MenuIcon
	}

}

const mockCategoryFactory = (config:Partial<CategoryInterface>) => {
	return new Category(config)
} 

const categoryConfigList = [
	{
		name:'crisps',
	},
	{
		name:'drink'
	},{
		name:'instant'
	},{
		name:'biscuit'
	},{
		name:'alcohol'
	},{
		name:'other'
	}
]


const Categories = categoryConfigList.map((config)=> mockCategoryFactory(config))

export  const getBaseInfo = () => Promise.resolve({Categories,bannerList:[]})
