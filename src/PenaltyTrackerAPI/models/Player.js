const mongoose = require('mongoose')

const playerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            default: ""
        },
        nhlID: {
            type: String,
            default: ""
        },
        url: {
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