const mongoose = require('mongoose')

const refereeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            default: ""
        }
    }
);

mongoose.model("Referee", refereeSchema);