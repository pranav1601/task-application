const {MongoClient,ObjectID}=require('mongodb')

const connectionURL='mongodb://127.0.0.1:27017'
const databaseName='task-application'

MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
    if(error){
        return console.log('Unable to connect to database!')
    }

    const db=client.db(databaseName)

    db.collection('users').updateOne({
        _id:new ObjectID("6078dc1bf7a62d72040e75ec")
    },{
        $set:{
            name:'Mike'
        },
        $inc:{
            age:21
        }

    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })

    db.collection('users').updateMany({
        name:'Prabhat'
    },{
        $set:{
            name:'Mike'
        },
        $inc:{
            age:21
        }

    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })

    

})