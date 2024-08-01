const mongoose = require('mongoose')
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DATABASE_URI, {
        })
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB