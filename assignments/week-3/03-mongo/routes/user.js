const { Router } = require("express");
const router = Router();
const {User, Course} = require("../db")
const userMiddleware = require("../middleware/user");

// User Routes
app.post('/user/signup', (req, res) => {
    // Implement user signup logic
    User.create({
        username: req.body.username,
        password: req.body.password
    });
    res.json({message: "User created successfully"})

});

app.get('/user/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find().then(courses => {
        res.json(courses)
    })
});

app.post('/user/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

app.get('/user/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});
