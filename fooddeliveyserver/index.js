const express=require('express')

const server=express()

const cors = require('cors')

const logic = require('./logic')

server.use(cors({origin:'http://localhost:3000'}))

server.use(express.json())

server.listen(8000,()=>{
    console.log("server started at port 8000");
})

server.get('/getAllFoods', (req,res)=>{
    logic.getAllFoods().then(result=>{
        res.status(result.statusCode).json(result)
    })
})

server.get('/viewFood/:id',(req,res)=>{
    logic.viewFood(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

server.post('/login',(req,res)=>{
    logic.login(req.body.email,req.body.password).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

server.post('/register',(req,res)=>{
    logic.register(req.body.firstName,req.body.lastName,req.body.email,req.body.password).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

server.post('/addToCart',(req,res)=>{
    logic.addToCart(req.body.meal,req.body.email).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

server.post('/cartItems',(req,res)=>{
    logic.cartItems(req.body.email).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

server.post('/deleteItem',(req,res)=>{
    logic.deleteItem(req.body.item).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

server.post('/placeOrder',(req,res)=>{
    logic.placeOrder(req.body.body,req.body.email).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

server.post('/getOrders',(req,res)=>{
    logic.getOrders(req.body.email).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

server.post('/clearOrders',(req,res)=>{
    logic.clearOrders(req.body.email).then(result=>{
        res.status(result.statusCode).json(result)
    })
})