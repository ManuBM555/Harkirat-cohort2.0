//  creating http server
// using express
// create in memory hospital


/*
    GET - User can check how many kidneys they have and their health
    POST - User can add a new kidney
    PUT - User can replace a kidney, make it healthy
    DELETE - User can remove a kidney
*/
const express = require('express');
const app = express();

const users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}];

// Will discuss later
app.use(express.json());


app.get('/', function(req, res) {
    const johnKidneys = users[0].kidneys;
    const numOfKidneys = johnKidneys.length;
    let numOfHealthyKidneys = 0;
    for (let  i = 0;  i < johnKidneys.length;  i++) {
        if(johnKidneys[i].healthy) {
            numOfHealthyKidneys = numOfHealthyKidneys + 1;
        }
        
    }
    const numOfUnhealthyKidneys = numOfKidneys - numOfHealthyKidneys;

    res.json({
        numOfKidneys,
        numOfHealthyKidneys,
        numOfUnhealthyKidneys
    })
})


// In post requests u send data in the "body"
app.post('/', function(req, res) {
    console.log(req.body);
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

// Converts all unhealthy kidneys to healthy
app.put('/', function(req, res) {
    if (!isThereAtleastOneUnhealthyKidney()) {
        res.status(411).json({msg:"There is no unhealthy kidney to make it healthy"})
    } else {
        for (let i = 0; i < users[0].kidneys.length; i++) {
            users[0].kidneys[i].healthy = true;
        }
        res.status(200).json({
            msg: "All unhealthy kidneys are now healthy"
        });
    }
    
})

// remove all unhealthy kidney
app.delete('/', function(req, res) {
    // you should return 411 when wrong input
    // Only if onw unhealthy kidney is there do this, else return 411
    if(isThereAtleastOneUnhealthyKidney()) {
        const newKidneys = [];
        for (let i = 0; i < users[0].kidneys.length; i++) {
        if (users[0].kidneys[i].healthy) {
            newKidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({msg: "Done!"});
    } else {
        res.status(411).json({
            msg: "You have no bad kidneys"
        });
    }
    

    
})



//function to check is there atleast one unhealthy kidney.
function isThereAtleastOneUnhealthyKidney() {
    let atLeastOneUnhealthyKidney = false;
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healthy) {
            atLeastOneUnhealthyKidney = true;
        }
    }
    return atLeastOneUnhealthyKidney;
}



app.listen(3000);




