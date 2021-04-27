const request=require('supertest')
const app=require('../src/app')

test('Should signup a new user',async()=>{
    await request(app).post('/users').send({
        name:'Pranav',
        email:'pranav@gmail.com',
        password:'pranavagarwal'
    }).expect(201)
})