const app=require('./app')

port=process.env.PORT

app.listen(port,()=>{
    console.log('server is up on port '+port)
})