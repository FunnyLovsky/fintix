import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log('Server start on port:', PORT);
        });
    } catch (error) {
        console.log(error);
    }
console.log();
};

start();
