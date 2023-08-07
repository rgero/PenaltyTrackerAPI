require('./models/Player');
require('./models/Referee');
require('./models/Penalty');

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('./mongooseStarter');

const penaltyRoutes = require('./routes/penaltyRoutes')
const playerRoutes = require('./routes/playerRoutes')
const refereeRoutes = require('./routes/refereeRoutes')

mongoose.start();
const app = express();

//Body Parser has to be first.
app.use(bodyParser.json());
app.use(cors());
app.use(penaltyRoutes);
app.use(playerRoutes);
app.use(refereeRoutes);

/* Express Set-up */
app.get('/', async (req, res) => {
    res.send("Go to penalties.")
})

app.listen(9000, ()=>{
    console.log("Server started, listening on port 9000");
})