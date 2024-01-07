const express = require('express');
const zod = require('zod');
const app = express();

function validate(obj) {
    const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
})

const respose = schema.safeParse(obj)
console.log(respose);


}

app.use(express.json());

app.post('/login', (req, res) => {
    const inputs = req.body;
    const respose = validate(inputs);
    if(!respose.success) {
        res.json({
            msg: "Invalid input"
        })
        return 
    }

    /*



    */
})


