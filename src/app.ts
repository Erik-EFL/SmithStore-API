import express from 'express';

const app = express();

app.use(express.json());

export default app;

console.log('hello world')
