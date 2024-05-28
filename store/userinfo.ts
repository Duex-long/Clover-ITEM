import { defineStore } from 'pinia'

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
		}
	}),
	actions: {
		setBaseInfo(info : any) {
			this.baseInfo = info
		},
	}
})

export const strategyInfo = defineStore("strategy",{
	state:() => ({
		pageinfo:{
			path:'/home',
			query:{},
			nodelist:{head:'home',next:null}
		}
	}),
	actions:{
		push(path:string,query?:{[x:string]:string}){
			if(query){
				this.pageinfo.query = query
			}
			this.pageinfo.path = path
		}
	}
})