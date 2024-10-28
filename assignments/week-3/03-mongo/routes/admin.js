const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
app.post('/admin/signup', (req, res) => {
    // Implement admin signup logic
    Admin.create({
        username: req.body.username,
        password: req.body.password
    });
    res.json({message: "User created successfully"})
});

app.post('/admin/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    Course.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image
    });
    res.json({message: "Course created successfully"})
});

app.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find().then(courses => {
        res.json(courses)
    })
});

module.exports = router;