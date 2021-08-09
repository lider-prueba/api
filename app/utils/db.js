const mongoose = require('mongoose')

class DB {
    static async start({ dbUri }) {
        let db = undefined
        db = await mongoose.connect(dbUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('- Connected to MongoDB')
    }

    static async close() {
        let db = undefined
        if (db) await db.disconnect()
        console.log('- Closed MongoDB connection')
    }
}

exports.DB = DB
