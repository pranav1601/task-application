# Task-Application-only BACKEND

A nodejs backend run application that can be used to create users and tasks for them as well. It uses MongoDB for the provision of database. The application uses express for providing the server. It is authenticated on the client side using JWT tokens so that a user cannot retrieve another user's details or another user's task details. It is hosted on heroku.<br/><br/>


The project uses npm version 7.6.0 and Node.js v12.20.2.

Instructions to run and use the application are given below:

## Application Setup

* Ensure you have postman installed.

### How to use the application?
#### Create User
* Open postman and create a new request.
* Create a `POST` request -> `https://task-application-manager.herokuapp.com/users`
* Select Body, then select raw and JSON.
Enter a sample login like <br/>
```
{
    "name":"pranav",
    "email":"pranav.agarw@gmail.com",
    "password":"pranavagarwal"
}
```
* send it and a user will be created<br/>
In order to validate this, you will get an email from me!

#### Login
* Open postman and create a new request.
* Create a `POST` request -> `https://task-application-manager.herokuapp.com/login`
* Select Body, then select raw and JSON.
Enter a sample login like <br/>
```
{
    "email":"pranav.agarw@gmail.com",
    "password":"pranavagarwal"
}
```
* send it and you will be logged in

#### Logout
* Open postman and create a new request.
* Create a `GET` request -> `https://task-application-manager.herokuapp.com/users/me`
* send it and you will see your login details.

#### Logout
* Open postman and create a new request.
* Create a `POST` request -> `https://task-application-manager.herokuapp.com/users/logout`
* send it and you will be logged out

#### Create tasks
* Open postman and create a new request.
* Create a `POST` request -> `https://task-application-manager.herokuapp.com/tasks`
* Select Body, then select raw and JSON.
Enter a sample task like <br/>
```
{
    "description":"Finished learning backend?",
    "completed":false
}
```
* send it and a new task will be created.

#### Read tasks
* Open postman and create a new request.
* Create a `GET` request -> `https://task-application-manager.herokuapp.com/tasks`
* send it and you will see your created tasks details.

#### Update user details
* Open postman and create a new request.
* Create a `PATCH` request -> `https://task-application-manager.herokuapp.com/users/me`
* Select Body, then select raw and JSON.
Enter a sample update like <br/>
```{
    "name":"pranav agarwal"
}
```
* send it and the user will be updated.

#### delete user details
* Open postman and create a new request.
* Create a `DELETE` request -> `https://task-application-manager.herokuapp.com/users/me`
* send it and the user will be deleted.


### Coming up(Backend created, cant work without frontend)
* update task
* delete task