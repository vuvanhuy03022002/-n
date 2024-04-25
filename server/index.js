import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import connectDB from './config/db/db.js'

import ProductRouter from './routers/ProductRouter.js'
import UserRouter from './routers/UserRouter.js'
import OrderRouter from './routers/OrderRouter.js'

import {createServer} from 'http'
// import {Server} from 'socket.io'

import cloudinary from './config/cloudinary/cloudinary.js'
import ListTypeProductRouter from './routers/ListTypeProductRouter.js'
import ContactRouter from './routers/ContactRouter.js'

dotenv.config();
process.env.TOKEN_SECRET;

const app = express()
const PORT = process.env.PORT || 4000
const server = createServer(app)

connectDB()

app.use(cors())
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use('/contact', ContactRouter)
app.use('/products', ProductRouter)
app.use('/user', UserRouter)
app.use('/order', OrderRouter)
app.use('/typeList', ListTypeProductRouter)

app.post('/api/upload', async (req, res) => {
    try {
        const fileStr = req.body.data;
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'dev_setups',
        });
        res.json({ msg: 'yaya' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
});

server.listen(PORT, () => console.log(`server running on port ${PORT}`))