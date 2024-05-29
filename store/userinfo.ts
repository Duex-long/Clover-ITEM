import { defineStore } from 'pinia'
import HomeComponent from '@/strategy/home.vue'
import { getBaseInfo } from '@/mockData/categories'

const showLoading = (title:string) => {
	uni.showLoading({
		title,
		mask:true
	})
	return ()=> {
		uni.hideLoading()
	}
}

export const useUserinfo = defineStore("user", {
	state: () => ({
		userinfo: {
			avatar: 'https://avatars.githubusercontent.com/u/73820715?v=4',
			name: 'Eduardo',
		},
	}),
	actions: {
		setUserInfo(info : any) {
			this.userinfo = info
		}
	}
})

export const useBaseInfo = defineStore("base", {
	state: () => ({
		baseInfo: {
			bannerList: [],
			categoryCollection:[]
		},
		initState:false,
	}),
	actions: {
		setBaseInfo(info : any) {
			this.baseInfo = info
		},
		async init(){
			const closeLoading = showLoading("loading")
			
			//  request
			const baseInfo = await getBaseInfo()
			console.log(baseInfo,'baseInfo')
			this.setBaseInfo({
				categoryCollection:baseInfo.Categories
			})
			setTimeout(closeLoading,2000)
			setTimeout((state) => this.initState = state,2010,true)
			
		}
	}
})

const COMPONENT_LIST = {
	'home':HomeComponent
}

export const useStrategyInfo = defineStore("strategy",{
	state:() => ({
		pageinfo:{
			name:'home',
			component:HomeComponent,
			query:{},
			// nodelist:{head:'home',next:null}
		}
	}),
	actions:{
		push(name:string,query?:{[x:string]:string}){
			if(query){
				this.pageinfo.query = query
			}
			this.pageinfo.name = name
			this.pageinfo.component = COMPONENT_LIST[name]
		}
	}
})