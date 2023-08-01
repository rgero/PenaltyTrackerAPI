require('./models/Player');
require('./models/Referee');
require('./models/Penalty');

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('./mongooseStarter');

const PenaltyFetcher = require('./utilities/PenaltyFetcher');

// mongoose.start();
// const app = express();

// //Body Parser has to be first.
// app.use(bodyParser.json());
// app.use(cors());

// /* Express Set-up */
// app.get('/', (req, res) => {
//     res.send(`Bonk`);
// })

// app.listen(9000, ()=>{
//     console.log("Server started, listening on port 9000");
// })

let penaltyFetcher = new PenaltyFetcher();
penaltyFetcher.setTargetDate("2022-02-22");
penaltyFetcher.FetchGameURLs();