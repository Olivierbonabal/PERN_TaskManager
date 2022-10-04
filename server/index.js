const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

//middlewares
app.use(cors());
app.use(express.json());

//ROUTES
/*===========================================*/
//CREATE task

app.post('/task', async (req, res) => {
    try {

        const { name } = req.body;
        const newtask = await pool.query('insert into todo (name) values ($1) returning *', [name]);
        res.json(newtask.rows);

    } catch (err) {
        console.log(err.message);
    }
});

/*================================================*/
//GET task

app.get('/task/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const task = await pool.query('select * from todo where todo_id = $1', [id]);
        res.json(task.rows[0]);

    } catch (err) {
        console.log(err.message);
    }
});

/*=====================================================*/
//GET ALL tasks

app.get('/task', async (req, res) => {
    try {

        const alltasks = await pool.query('select * from todo');
        res.json(alltasks.rows);

    } catch (err) {
        console.log(err.message);
    }
});

/*====================================================*/
//UPDATE task

app.put('/task/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const updatetask = await pool.query('update todo set name = $1 where todo_id=$2', [name, id]);
        res.json("todo updated successfully");

    } catch (err) {
        console.log(err.message);
    }
});

/*======================================================*/
//DELETE a task

app.delete('/task/:id', async (req, res) => {
    try {

        const { id } = req.params;
        const deletetask = await pool.query('delete from todo where todo_id=$1', [id]);
        res.json("deleted task successfully");

    } catch (err) {
        console.log(err.message);
    }
});

app.listen(5000, () => {
    console.log("listening on localhost:5000");
});
