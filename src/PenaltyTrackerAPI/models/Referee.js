const mongoose = require('mongoose')

const refereeSchema = new mongoose.Schema(
    {
        nhlID: {
            type: String,
            default: ""
        },
        name: {
            type: String,
            default: ""
        }
    }
);

mongoose.model("Referee", refereeSchema);