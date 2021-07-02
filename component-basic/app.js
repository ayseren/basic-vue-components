/*
Vue.component('click-counter',{
	//template:'<button @click="count++">{{count}}</button>',
	//bu sekilde de yapilabilir
	template:'#click-counter-template',
	data(){
		return {
			count: 0
		}
	}
})
*/

/*
there are 2 ways to register a component. globally and locally.
Vue.component seklinde yazmak yerine bir degiskene atayabiliriz.
*/

/*
Vue.component('plan-picker',{
	template:'#plan-picker-template',
	data() {
		return {
			plans:['The Single', 'The Addict']
		}
	}
})

Vue.component('plan',{
	template:'#plan-template',
	//props: ['name']
	//array olarak degil de asagidaki gibi yazarak konsoldan hatalari alabiliriz.
	//mesela htmlde :name icerisine true yazdik diyelim;
	//konsolda bize kizacak String istiyorum diye
	props: {
		name: {
			type: String,
			default: 'Alex',
			required: true
		},
		price: Number
	}
})
*/

let PlanPickerItemComponent = {
	template:'#plan-picker-item-template',
	props: {
		name: {
			type: String,
			required: true
		},
	    selectedPlan: {
	      type: String
	    }
	},
	computed: {
	    isSelected() {
	      return this.name === this.selectedPlan
	    }
	},
	methods:{
		select(){
			this.$emit('select', this.name)
		}
	}
}

let PlanPickerComponent = {
	template:'#plan-picker-template',
	components: {
		'plan-picker-item': PlanPickerItemComponent
	},
	data() {
		return {
			plans:['The Single', 'The Addict'],
			selectedPlan: null
		}
	},
	methods: {
	    selectPlan(plan) {
	      this.selectedPlan = plan
	    }
	}
}

new Vue({
	el: '#app',
	//plan-picker componentinin icine yazdik
	// data:{
	// 	plans:['The Single', 'The Addict']
	// }
	components: {
		'plan-picker': PlanPickerComponent
	}
})