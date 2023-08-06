const mongoose = require('mongoose');
const credentials = require('./credentials');

module.exports = {
    start: () => {
        const desiredUsername = credentials["username"]
        const desiredPassword = credentials["password"]
        
        /* Mongoose connection */
        const mongoURI = `mongodb+srv://${desiredUsername}:${desiredPassword}@penaltytracker.myhmkw6.mongodb.net/?retryWrites=true&w=majority`
        mongoose.connect(mongoURI)
        
        mongoose.connection.on("connected", ()=> {
            console.log("Connected to Mongo Instance")
        })
        
        mongoose.connection.on('error', (err)=> {
            console.error("Error connecting to mongo", err);
        })
    }
}