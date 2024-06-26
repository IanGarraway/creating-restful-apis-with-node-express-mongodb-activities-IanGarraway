// require('dotenv').config();

// const express = require('express');
// const { default: mongoose } = require('mongoose');
// const app = express();

// const PORT = 4000;
// const HOST = `localhost`;

import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

dotenv.config();

import { router as allTodos } from './routes/alltodos.js';
import { router as singleTodo } from './routes/singleTodo.js';
import { router as addTodo } from './routes/addTodo.js';


const port = process.env.PORT;
const host = process.env.HOST;
const app = express();

app.use(bodyParser.json());

const main = async () => {
    console.log(`Connecting to DB @ $${process.env.DB_URI}`);
    await mongoose.connect(process.env.DB_URI);
}



main().catch(err => console.log(err))

//app.get('/', (req, res) => res.send(`Hello World`));
app.use(`/add`, addTodo);
app.use(`/todo`, singleTodo);
app.use(`/`, allTodos);

const server = app.listen(port, host, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`Server is running on http://${SERVERHOST}:${SERVERPORT}`);
});