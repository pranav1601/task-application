const request=require('supertest')
const jwt=require('jsonwebtoken')
const mongoose=require('mongoose')
const app=require('../src/app')
const User=require('../src/models/user')

const userOneId=new mongoose.Types.ObjectId()
const userOne={
    _id:userOneId,
    name:'Mike',
    email:'mike@example.com',
    password:'thisismike',
    tokens:[{
        token:jwt.sign({_id:userOneId},process.env.JWT_SECRET)
    }]
}

beforeEach(async()=>{
    await User.deleteMany()
    await new User(userOne).save()
})

test('Should signup a new user',async()=>{
    await request(app).post('/users').send({
        name:'Pranav',
        email:'pranav@gmail.com',
        password:'pranavagarwal'
    }).expect(201)
})

test('Should login existing user',async()=>{
    await request(app).post('/users/login').send({
        email:userOne.email,
        password:userOne.password
    }).expect(200)
})

test('Should not login existing user',async()=>{
    await request(app).post('/users/login').send({
        email:'hello',
        password:'helloitsme'
    }).expect(400)
})

test('should get profile for user',async()=>{
    await request(app).get('/users/me').set('Authorization',`Bearer ${userOne.tokens[0].token}`).send().expect(200)
})

test('should not get profile for unauthenticated user',async()=>{
    await request(app).get('/users/me').send().expect(401)
})

test('should delete account for user',async()=>{
    await request(app).delete('/users/me').set('Authorization',`Bearer ${userOne.tokens[0].token}`).send().expect(200)
})

test('should delete account for user',async()=>{
    await request(app).delete('/users/me').send().expect(401)
})