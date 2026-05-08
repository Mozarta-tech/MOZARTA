const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const connnect = await mongoose.connect(process.env.MONGO_URI)
        console.log('MongoDB connected: ${connect.conection.host}')
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}
module.exports = connectDB