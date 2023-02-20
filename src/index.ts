import express from 'express';
import cors from 'cors';
import { executeCode } from './services/execCode/executeCode';

const app = express()
app.use(cors(), express.json());
const port = 3000

executeCode(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});