import { observable, action, computed, makeAutoObservable } from 'mobx'

class Store {
	constructor() {
		makeAutoObservable(this)
	}

	@observable shoes: string[] = ['444', '18']

	@action addShoe = (shoe: string) => {
		this.shoes = [...this.shoes, shoe]
	}

	@computed get shoesCount() {
		return this.shoes.length
	}
}

export const store = new Store()
