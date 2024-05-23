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