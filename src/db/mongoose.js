const mongoose=require('mongoose')
const validator=require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-application-api',{
    useNewUrlParser:true,
    useCreateIndex:true
})

// const User=mongoose.model('User',{
//     name: {
//         type: String,
//         required:true,
//         trim:true
//     },
//     email:{
//         type:String,
//         required:true,
//         trim:true,
//         lowercase:true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error('Email is invalid')
//             }
//         }
//     },
//     age:{
//         type:Number,
//         default:0,
//         validate(value){
//             if(value<0){
//                 throw new Error('Age must be a positive number')
//             }
//         }
//     },
//     password:{
//         type:String,
//         required:true,
//         trim:true,
//         minLength:7,
//         validate(value){
//             if(value.toLowerCase().includes('password')){
//                 throw new Error('Password sould not contain password')
//             }
//         }


//     }
// })

// const me=new User({
//     name:'Michael      ',
//     email:'michael@hello.com       ',
//     password:'mipasswordke'
// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log(error)
// })

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

const task=new Task({
    description:'    Finished studying     ',
})

task.save().then(()=>{
    console.log(task)
}).catch((error)=>{
    console.log(error)
})