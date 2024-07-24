import express from 'express';
import db from '../db/config'
 // Adjust the import path as needed
import hospitalRoute from './hospital.route';
import curdrouter from './curd.route'

const routes = express.Router();
routes.use('/crud', curdrouter)
routes.use('/hospital', hospitalRoute)

export default routes;
