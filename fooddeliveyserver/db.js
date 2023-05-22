const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/FoodOrder')

const Food = mongoose.model('Food',{
    strMeal:String,
    strCategory:String,
    strArea:String,
    strMealThumb:String,
    id:String,
    description:String,
    price:String
})

const User = mongoose.model('User',{
    email:String,
    password:String,
    firstName:String,
    lastName:String,
    cart:[],
    myOrders:[]
})


module.exports={
    Food,
    User
}