import express from 'express';
export const router = express.Router();

import Todo from '../todo.model.js';

router.route(`/`).get(async (req, res) => {
        // Todo.find((error, todos) => {
        //     error ? res.status(404).send(`Not found`) : res.json(todos);
    // });    
    
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        res.status(500).send(`Server error: ${error.message}`);
    }
});