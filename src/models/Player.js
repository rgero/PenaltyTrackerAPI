const mongoose = require('mongoose')

const playerSchema = new mongoose.Schema(
    {
        playerName: {
            type: String,
            default: ""
        },
        team: {
            type: String,
            default: ""
        }
    }
);

mongoose.model("Player", playerSchema);