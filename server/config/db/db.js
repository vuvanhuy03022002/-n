import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

async function connectDB(){
    const url = 'mongodb://127.0.0.1:27017/store'
    
   
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        console.log("connected to db")
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;