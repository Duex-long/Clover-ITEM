import { defineStore } from 'pinia'

export const useUserinfo = defineStore("user", {
	state:() => ({
		name:'Eduardo',
		userinfo:null
	}),
	actions:{
		setUserInfo(info: any) {
				this.userinfo = info
		}
	}
})