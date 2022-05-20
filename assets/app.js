Vue.createApp({
    data() {
      return {
        message: 'Hello Vue!',
        burgerOptions:[
            {id:'1', topping:'Salad:',price:'0.50',activeCount:[]},
            {id:'2',topping:'Bacon:',price:'0.30',activeCount:[]},
            {id:'3',topping:'Cheese:',price:'0.70',activeCount:[]},
            {id:'4',topping:'Meat:',price:'1.30',activeCount:[]}
        ],
        addToppings:[
            {
                'salad':[]
            },
            {
                'bacon':[]
            },
            {
                'cheese':[]
            },
            {
                'meat':[]
            }    
        ],
        totalPrice:'',
        topping:'',
        totalPrice:'3.50',
        saladIndex:0,
        baconIndex:0,
        cheeseIndex:0,
        meatIndex:0,
      }
    },
    methods:{
        addTopping(e){
    
            let toppings =  this.burgerOptions.filter((item)=>{
                return item.id == e.currentTarget.getAttribute('data-id')
            }) 
            let topping = toppings[0]
            console.log(topping.topping)
            if(topping.topping == 'Salad:'){
                this.addToppings[0].salad.push({
                            id:this.saladIndex++,
                            active:true,
                            price:topping.price,
                            topping:topping.topping,
                })
            }
            if(topping.topping == 'Bacon:'){
                console.log(this.addToppings)
                
                this.addToppings[1].bacon.push({
                            id:this.baconIndex++,
                            active:true,
                            price:topping.price,
                            topping:topping.topping,
                })
            }
            if(topping.topping == 'Cheese:'){
                this.addToppings[2].cheese.push({
                            id:this.cheeseIndex++,
                            active:true,
                            price:topping.price,
                            topping:topping.topping,
                })
            }
            if(topping.topping == 'Meat:'){
                this.addToppings[3].meat.push({
                            id:this.meatIndex++,
                            active:true,
                            price:topping.price,
                            topping:topping.topping,
                })
            }
            this.totalPrice = parseFloat(topping.price) +  parseFloat(this.totalPrice)
       
            this.burgerOptions[topping.id -1].activeCount.push('true')
    
        },
        formatPrice(value) {
            // let val = (value/1).toFixed(2).replace('.', ',')
            let val = (value/1).toFixed(2)
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        removeTopping(top,id){
                    // console.log(id)
                if(top == 'Salad:'){
                         this.addToppings[0].salad.splice(this.saladIndex-1,1)
                         this.burgerOptions[id-1].activeCount.pop()
                         this.totalPrice =  parseFloat(this.totalPrice) - parseFloat('0.50') 
                         this.saladIndex--
                }

                if(top == 'Bacon:'){
                    this.addToppings[1].bacon.splice(this.baconIndex-1,1)
                    this.burgerOptions[id-1].activeCount.pop()
                    this.totalPrice =  parseFloat(this.totalPrice) - parseFloat('0.30') 
                    this.baconIndex--
                }

                if(top == 'Cheese:'){
                    this.addToppings[2].cheese.splice(this.cheeseIndex-1,1)
                    this.burgerOptions[id-1].activeCount.pop()
                    this.totalPrice =  parseFloat(this.totalPrice) - parseFloat('0.70')
                    this.cheeseIndex--
                }
                if(top == 'Meat:'){
                    this.addToppings[3].meat.splice(this.meatIndex-1,1)
                    this.burgerOptions[id-1].activeCount.pop()
                    this.totalPrice =  parseFloat(this.totalPrice) - parseFloat('1.30')
                    this.meatIndex--
                }
          
        },
    }
  }).mount('#app')