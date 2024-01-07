// Middlewares example2(Assignments to understand middlewares)

const express = require('express')
const app = express();

app.use(express.json());


// function that returns the boolean if age of the person is more than 14
function isOldEnough(age) {
    if(age >= 14) {
        return true
    } else {
        return false;
    }
}

function isOldEnoughMiddleware(req, res, next) {
    const age = req.query.age;
    if(age >= 14) {
        next();
    } else {
        res.json({
            msg: "Sorry you are not of age yet"
        })
    }
}

app.get('/ride1', isOldEnoughMiddleware, function(req, res) {
    res.json({
        msg: "You have successfully rided the ride 1"
    })
})

app.get('/ride2', isOldEnoughMiddleware, function(req, res) {
    res.json({
        msg: "You have successfully rided the ride 1"
    })
})
app.listen(3000)