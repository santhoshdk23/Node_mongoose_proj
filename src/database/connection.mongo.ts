

import { connect } from 'mongoose'


const initDb = async () => {
    const MONGODB_URI = process.env.MONGODB_URI ;
        if (MONGODB_URI) {
        await connect(MONGODB_URI, { autoCreate: true, autoIndex: true })
        console.log('Connected to mongodb')
    } else {
        throw new Error('Please provide a valid connection string!')
    }
}

export default initDb;