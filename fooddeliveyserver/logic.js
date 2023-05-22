const db = require('./db')

const getAllFoods = () => {
    return db.Food.find().then(result => {
        if (result) {
            return {
                statusCode: 200,
                foods: result
            }
        } else {
            return {
                statusCode: 401,
                message: "no data available"
            }
        }
    })
}

const viewFood = (id) => {
    return db.Food.findOne({ id }).then(result => {
        if (result) {
            return {
                statusCode: 200,
                food: result
            }
        } else {
            return {
                statusCode: 401,
                message: "no data available"
            }
        }
    })
}

const login = (email, password) => {
    return db.User.findOne({ email, password }).then(result => {
        if (result) {
            firstName = result.firstName,
                lastName = result.lastName,
                currentmail = email
            return {
                status: true,
                statusCode: 200,
                message: "Login Success",
                firstName,
                lastName,
                currentmail
            }
        } else {
            return {
                status: false,
                statusCode: 401,
                message: "invalid account"
            }
        }
    })
}

const register = (firstName, lastName, email, password) => {
    return db.User.findOne({ email }).then(result => {
        if (result) {
            return {
                statusCode: 401,
                message: "user already exist"
            }
        } else {
            const newuser = new db.User({
                firstName,
                lastName,
                email,
                password
            })

            newuser.save()

            return {
                statusCode: 200,
                message: "Registered Successfully"
            }
        }
    })
}

const addToCart = (meal, email) => {
    return db.User.findOne({ email }).then(result => {
        if (result) {
            result.cart.push(meal)
            
            result.save()

            return {
                statusCode: 200,
                message: 'added to cart'
            }
        } else {
            return {
                statusCode: 401,
                message: "error"
            }
        }
    })
}

const cartItems = (email) => {
    return db.User.findOne({ email }).then(result => {
        if (result) {
            
            // firstName = result.firstName,
            // lastName = result.lastName,
            // currentmail = email

            return{
                statusCode:200,
                cartItems:result.cart
                
            }
        }else{
            return{
                statusCode:401,
                message:'error'
            }
        }
    })
}

const deleteItem = (item)=>{
    return db.User.findOne({Id:item}).then(result=>{
        if(result){
            result.cart.pop(item)
            result.save()
            return{
                statusCode:200,
                message:"deleted"
            }
        }else{
            return{
                statusCode:401,
                message:"error"
            }
        }
    })
}

const placeOrder = (body,email) =>{
    return db.User.findOne({email}).then(result=>{
        if(result){
            result.cart=[]
            result.myOrders.push(body)
            result.save()
            return{
                statusCode:200,
                message:'Order Placed'
            }
        }else{
            return{
                statusCode:401,
                message:'error'
            }
        }
    })
}

const getOrders=(email)=>{
    return db.User.findOne({email}).then(result=>{
        if(result){
            return{
                statusCode:200,
                orders:result.myOrders,
                message:'success'
            }
        }else{
            return{
                statusCode:401,
                message:'error'
            }
        }
    })
}

const clearOrders = (email)=>{
    return db.User.findOne({email}).then(result=>{
        if(result){
            result.myOrders=[]
            result.save()
            return{
                statusCode:200,
                message:"order list cleared"
            }
        }else{
            return{
                statusCode:401,
                message:"error"
            }
        }
    })
}

module.exports = {
    getAllFoods,
    viewFood,
    login,
    register,
    addToCart,
    cartItems,
    deleteItem,
    placeOrder,
    getOrders,
    clearOrders
}