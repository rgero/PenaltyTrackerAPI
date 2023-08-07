const mongoose = require('mongoose')

const penaltySchema = new mongoose.Schema(
    {
        player: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Player'
        },
        penalty: {
            type: String,
            default: ""
        },
        opponent: {
            type: String,
            default: ""
        },
        home: {
            type: String,
            default: ""
        },
        date: {
            type: Date,
            required: true
        },
        refereeList: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Referee'
            }
        ],
        seasonType: {
            type: String,
            default: ""
        },
        season: {
            type: String,
            default: ""
        }
    }
);

mongoose.model("Penalty", penaltySchema);