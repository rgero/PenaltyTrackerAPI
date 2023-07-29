const mongoose = require('mongoose')

const penaltySchema = new mongoose.Schema(
    {
        playerID: {
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
        isHome: {
            type: String,
            default: ""
        },
        gameDate: {
            type: Date,
            required: true
        },
        refereeList: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Referee'
            }
        ]
    }
);

mongoose.model("Penalty", penaltySchema);