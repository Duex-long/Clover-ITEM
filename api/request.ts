import { checkFunction, checkObject } from "@/interface/shop/goods"

const BASE_URL = '/'

// --> creat Request -> request_intercept -> send -> response -> response_intercept -> finally
//                                        |-> fasle                                 |-> fasle

const request = (method : Extract<UniApp.RequestOptions, 'method'>, option : any) => {
	const { url } = option
	const requestPromise = new Promise((resolve, reject) => {
		uni.request({
			method,
			url,
			success: resolve,
			fail: reject,
		})
	})
	return requestPromise
}




export class Http {
	request_intercept = []
	request_intercept_callback = []
	response_intercept = []
	request_queue = []
	BASE_URL : string
	constructor(options : any) {
		const { BASE_URL = '/' } = options
		this.BASE_URL = BASE_URL
	}
	requestGet(url : string, options : any) {
		url = this.BASE_URL + url
		if (checkObject(options)) {
			options = {
				...options,
				url
			}
		} else {
			options = {
				url
			}
		}
		this.request_intercept.push({
			method: 'GET',
			options
		})
	}

	_get(url : string, options : any) {
		url = this.BASE_URL + url
		if (checkObject(options)) {
			options = {
				...options,
				url
			}
		} else {
			options = {
				url
			}
		}
		this.request_intercept.push({
			method: 'GET',
			options
		})
	}



	// 
	flush() {
		Promise.resolve().then(() => {
			const callBackList:Array<()=>Promise<unknown>> = []
			this.request_intercept.forEach(config => {
				this.request_intercept_callback.forEach((callbackItem) => {
					callBackList.push(async () => await callbackItem(config))
				}
				)
			})
			Promise.all(callBackList)
		})

	}




}

