import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

mongoose.connect(process.env.MONGDB_CONNECTION, { useNewUrlParser: true })

export default mongoose