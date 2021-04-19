require('../src/db/mongoose')
const Task=require('../src/models/task')

// Task.findByIdAndDelete('607a1aba9084ee8c705cd214').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({completed:false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const deleteTaskAndCount=async(id)=>{
    const task=await Task.findByIdAndDelete(id)
    const count=await Task.countDocuments({completed:false})
    return {task,count}
}

deleteTaskAndCount('607babaa4c3a820e7f9ae615').then(({task,count})=>{
    console.log(task,count)
}).catch((e)=>{
    console.log(e)
})
