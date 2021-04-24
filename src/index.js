const express=require('express')
require('./db/mongoose')
const User=require('./models/user')
const Task=require('./models/task')
const userRouter=require('./routers/user')
const taskRouter=require('./routers/task')


const app=express()
const port = process.env.PORT || 3000

const multer=require('multer')
const { Error } = require('mongoose')
const upload=multer({
    dest:'images',
    limits:{
        fileSize:1000000
    },
    fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(doc|docx)$/)){
            return cb(new Error('please upload a doc'))
        }
        cb(undefined,true)
        
        // cb(new Error('File must be a pdf'))
        // cb(undefined,true)
        // cb(undefined,false)
    }
})

app.post('/upload',upload.single('upload'),(req,res)=>{
    res.send()
})

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port,()=>{
    console.log('server is up on port '+port)
})