const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Referee = mongoose.model('Referee');
const credentials = require('../credentials');

let exclusionString = '-_id -__v';

router.get('/referees', async (req, res) => {
    const referees = await Referee.find({}, exclusionString);
    res.send(referees);
})

router.get('/referees/:refId', async (req, res) => {
    try {
        let referee = await Referee.findOne({nhlID: req.params.refId}, exclusionString)
        if (referee)
        {
            res.send(referee);
        } else {
            res.status(500).send("Invalid Request");
        }
    } catch (err)
    {
        console.log(err);
        res.status(500).send(err.message);
    }
})

router.post('/referees', async (req, res) => {
    const {authKey, name, nhlID} = req.body;

    if (authKey != credentials["authKey"])
    {
        return res.status(422).send({error: "Error. Invalid Access"});
    }

    if (!name || !nhlID)
    {
        return res.status(422).send({error: "Referee not fully completed"});
    }

    try {
        const referee = new Referee({name, nhlID})
        await referee.save();
        res.send(referee);
    } catch (err)
    {
        return res.status(422).send({error:err.message});
    }
})

module.exports = router;