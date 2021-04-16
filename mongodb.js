const {MongoClient,ObjectID}=require('mongodb')

const connectionURL='mongodb://127.0.0.1:27017'
const databaseName='task-application'

const id=new ObjectID()
console.log(id.id.length)

MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
    if(error){
        return console.log('Unable to connect to database!')
    }

    const db=client.db(databaseName)

    db.collection('users').findOne({_id: new ObjectID("6078dc1bf7a62d72040e75ec")},(error,user)=>{
        if(error){
            return console.log('unable to fetch')
        }
        console.log(user)
    })

    db.collection('users').find({name:'Pranav'}).toArray((error,users)=>{
        console.log(users)
    })

    

})