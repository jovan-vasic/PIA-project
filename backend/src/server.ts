import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import korisnikRouter from './routes/korisnik.routes';
import knjigeRouter from './routes/knjiga.routes';

const app = express();
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/bibliotekaDB')
const connection = mongoose.connection
connection.once('open', ()=>{
    console.log('db connected')
})

const router = express.Router();
router.use('/korisnici', korisnikRouter);
router.use('/knjige', knjigeRouter);

app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));