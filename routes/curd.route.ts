import express from 'express';
import curd from '../db/models/curd'; // Adjust the import path as needed
import db from '../db/config';

const curdrouter = express.Router();

curdrouter.use(express.json()); // Middleware to parse JSON request bodies

// POST request to create a new record
curdrouter.post('/', async (req, res) => {
  try {
    const reqData = req.body;
    const { name, age } = reqData;

    
    const createcurdObject = { name, age };
    await curd.create(createcurdObject);

    return res.status(201).send({ message: "Crud created successfully" });
  } catch (error: any) {
    console.error('Error creating record:', error);
    return res.status(500).send({ message: 'Internal server error' });
  }
});

// GET request to retrieve all records
curdrouter.get('/', async (req, res) => {
  try {
    const curds = await curd.findAll();
    return res.status(200).send(curds);
  } catch (error) {
    console.error('Error fetching records:', error);
    return res.status(500).send({ message: 'Internal server error' });
  }
});

export default curdrouter;

