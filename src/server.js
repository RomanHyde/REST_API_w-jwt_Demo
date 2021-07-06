require('./db/connection');
const express = require('express');
const app = express();
const cors = require('cors');
// const { allowedNodeEnvironmentFlags } = require('process');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is listening on ${port}`)
});