const express = require('express');
const router = express.Router();
const Event = require('../models/event')


router.get("/events", function (req, res) {

    Event.find({},(err,events) => {
        if(err) res.send(err);
        res.json(events)
    })
});

router.post("/events", function (req, res) {
    
    var newEvent = new Event(req.body);
    newEvent.save((err,event) => {
        if(err) {
            res.send(err)
        }else{
            res.json({message: "Event successfully added!", event });
        }
    })
});

module.exports = router;