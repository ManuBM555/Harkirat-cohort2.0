const express = require('express')
const jwt = require('jsonwebtoken')
const jwtPassword = '123456'

const app = express()
app.use(express.json())

const ALL_USERS = [
    {
        username: "harkirat@gmail.com",
        password: "123",
        name: "Harkirat singh"
    },
    {
        username: "raman@gmail.com",
        password: "123321",
        name: "Raman singh"
    },
    {
        username: "priya@gmail.com",
        password: "123321",
        name: "Priya kumari"
    }
];

function userExists(username, password) {
    // wrirte logic to return true or false if user exists
    // in ALL_USERS array
    let userExists = false;
    for (let i = 0; i < ALL_USERS.length; i++) {
        if(ALL_USERS[i].username == username && ALL_USERS[i].password == password ) {
            userExists = true;
        }
    }
    return userExists;
}

app.post('/signin', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    if (!userExists(username, password)) {
        return res.status(404).json({
            msg: "User does not exist in our in memory db"
        })
    } else {
        var token =  jwt.sign({ username: username}, jwtPassword);
        return res.json({
            token
        })
    }
})

app.get('/users', (req, res) => {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword)
        const username = decoded.username
        // return a list of users other than this user
        res.json({
            users: ALL_USERS.filter(function(value) {
                if(value.username == username) {
                    return false
                } else {
                    return true
                }
            })
        })
    } catch(err) {
        return res.status(403).json({
            msg: "Invalid token"
        })
    }
})


app.listen(3000)