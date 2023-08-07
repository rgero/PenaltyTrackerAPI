const dayjs = require('dayjs');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Penalty = mongoose.model('Penalty');
const Player = mongoose.model('Player');
const Referee = mongoose.model('Referee');
const credentials = require('../credentials');

let exclusionString = '-_id -__v';

router.get('/penalties', async (req, res) => {
    const penalties = await Penalty.find({}, exclusionString).populate("player", exclusionString).populate("refereeList", exclusionString);
    res.send(penalties);
})

router.post('/penalties', async (req, res) => {
    const {authKey, player, penalty, opponent, isHome, date, refereeList, seasonType, season} = req.body;

    if (authKey != credentials["authKey"])
    {
        return res.status(422).send({error: "Error. Invalid Access"});
    }

    try {
        
        let targetPlayer = await Player.findOneAndUpdate(player, player, {upsert: true, new: true});

        let refIDList = []
        for(let ref of refereeList)
        {
            let targetRef = await Referee.findOneAndUpdate(ref, ref, {upsert: true, new: true});
            refIDList.push(targetRef)
        }

        let gameDate = dayjs(date);

        let inputParams = {
            player: targetPlayer,
            penalty: penalty,
            opponent: opponent,
            home: isHome ? "Home" : "Away",
            date: gameDate,
            refereeList: refIDList,
            seasonType: seasonType,
            season: season
        }

        const targetPenalty = new Penalty(inputParams);
        await targetPenalty.save();
        res.send(targetPenalty);
    } catch (err)
    {
        return res.status(422).send({error:err.message});
    }
})

module.exports = router;