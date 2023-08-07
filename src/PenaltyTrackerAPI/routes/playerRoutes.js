const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Player = mongoose.model('Player');
const credentials = require('../credentials');

let exclusionString = '-_id -__v';

router.get('/players', async (req, res) => {
    const players = await Player.find({}, exclusionString);
    res.send(players);
})

router.get('/players/:playerID', async (req, res) => {
    try {
        let player = await Player.findOne({nhlID: req.params.playerID}, exclusionString)
        if (player)
        {
            res.send(player);
        } else {
            res.status(500).send("Invalid Request");
        }
    } catch (err)
    {
        console.log(err);
        res.status(500).send(err.message);
    }
})

router.post('/players', async (req, res) => {
    const {authKey, name, nhlID, url, team} = req.body;

    if (authKey != credentials["authKey"])
    {
        return res.status(422).send({error: "Error. Invalid Access"});
    }

    if (!name || !nhlID || !url || !team)
    {
        return res.status(422).send({error: "Player not fully completed"});
    }

    try {
        const player = Player.findOneAndUpdate({name, nhlID, url, team}, {upsert: true, new: true});
        res.send(player);
    } catch (err)
    {
        return res.status(422).send({error:err.message});
    }
})

module.exports = router;