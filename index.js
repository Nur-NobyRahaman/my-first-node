const express = require('express')
const cors=require('cors')
const app =express()
const port=process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.get('/' , (req, res)=>{
    res.send('Hello world ')
})
const users=[
    {id:1 ,name:'savana', email:'savana@gmail.com', phone:'01712587456'},
    {id:2 ,name:'sokhina', email:'sokhina@gmail.com', phone:'01712587456'},
    {id:3 ,name:'shokhi', email:'shokhi@gmail.com', phone:'01712587456'},
    {id:4 ,name:'lokhi', email:'lokhi@gmail.com', phone:'01712587456'},
    {id:5 ,name:'shabnur', email:'shabnur@gmail.com', phone:'01712587456'},
    {id:6 ,name:'bobita', email:'bobita@gmail.com', phone:'01712587456'},
    {id:7 ,name:'kobita', email:'kobita@gmail.com', phone:'01712587456'},
    {id:8 ,name:'popi', email:'popi@gmail.com', phone:'01712587456'},
]

app.get('/users', (req, res)=>{
    if(req.query.name){
        const search = req.query.name.toLowerCase()
        const matched=users.filter(user=>user.name.toLocaleLowerCase().includes(search))
        res.send(matched)

    }
    else{
        res.send(users)

    }
   
    
})
app.get('/user/:id', (req,res)=>{
    console.log(req.params);
    const id=parseInt(req.params.id);
    const user=users.find(u=>u.id === id);
    res.send(user)
})

app.post('/user' , (req,res)=>{
    console.log(req.body)
    const user=req.body;
    user.id=users.length+1;
    users.push(user)

    res.send(user)
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})