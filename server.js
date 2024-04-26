import express from 'express';
import ViteExpress from 'vite-express';
import { Sequelize } from "sequelize";

const sql = new Sequelize("postgres:///book_app")

let app = express();

app.use(express.json())

