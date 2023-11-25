import express, { Express } from "express";
const Apartments = require('./routes/apartments');
var bodyParser = require('body-parser');
var cors = require('cors');
import './models/apartment';
// Application Setup
const app: Express = express();
const port = 3000;


app.use(cors({ allowedHeaders: 'Content-Type, Cache-Control' }));
app.options('*', cors());

app.use(bodyParser.json());

app.use('/apartments', Apartments);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});