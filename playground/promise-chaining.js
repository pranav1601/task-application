require('../src/db/mongoose')
const User=require('../src/models/user')

//607a1ed07980e18e79556921

// User.findByIdAndUpdate('607a6bcd64f291bb5557a3b1',{age:1}).then((user)=>{
//     console.log(user)
//     return User.countDocuments({age:1})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const updateAgeAndCount=async(id,age)=>{
    const user=await User.findByIdAndUpdate(id,{age})
    const count= await User.countDocuments({age})
    return count
}

updateAgeAndCount('607a6bcd64f291bb5557a3b1',4).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})