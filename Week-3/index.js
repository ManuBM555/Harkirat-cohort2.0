const express = require('express');

const app = express();

app.use(express.json());


app.post('/health-checkup', (req, res) => {
    // kidneys = [1, 2]
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send('you have ' + kidneyLength + ' kidneys');
})





// global catches
app.use(function(err, req, res, next) {
    res.json({
        msg: "sorry something is up with our server"
    })
})



app.listen(3000);