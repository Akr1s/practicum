import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
var app = express();
var environmentPort = Number(process.env.PORT);
var port = environmentPort || 8080;
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
app.get('/api', function (req, res) {
    res.send('Api works');
});
app.listen(port);
