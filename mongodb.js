const mongodb=require('mongodb')
const MongoClient=mongodb.MongoClient

const connectionURL='mongodb://127.0.0.1:27017'
const databaseName='task-application'

MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
    if(error){
        return console.log('Unable to connect to database!')
    }

    const db=client.db(databaseName)

    // db.collection('users').insertOne({
    //     name:'Pranav',
    //     age:21
    // },(error,result)=>{
    //     if(error){
    //         return console.log('Unavle to insert user')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([{
    //     name:'Pranav',
    //     age:21
    //     },{
    //         name:'Prabhat',
    //         age:25
    //     }
    // ],(error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert users')
    //     }
    //     console.log(result.ops)
    // })

    db.collection('tasks').insertMany([
        {
            description:'Finished studying',
            completed:false
        },{
            description:'Finshed playing',
            completed:true
        }
    ],(error,result)=>{
        if(error){
            return console.log('Unable to add tasks')
        }
        console.log(result.ops)
    })    
})