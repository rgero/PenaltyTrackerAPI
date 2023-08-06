const mongoose = require('mongoose')

const refereeSchema = new mongoose.Schema(
    {
        id: {
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