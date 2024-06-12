import { createStore } from 'vuex'

export default createStore({
	state() {
		return {
			isDropdownOpen: false,
		}
	},
	mutations: {
		toggleDropdown(state) {
			state.isDropdownOpen = !state.isDropdownOpen
		},
		closeDropdown(state) {
			state.isDropdownOpen = false
		},
	},
})
