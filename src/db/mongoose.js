const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-application-api',{
    useNewUrlParser:true,
    useCreateIndex:true
})

const Task=mongoose.model('Tasks',{
    description:{
        type:String,
        trim:true,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    }
})