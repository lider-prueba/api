const { DB } = require('./app/utils/db')
const mongoose = require('mongoose')
const cors = require('cors')
const express = require('express')
const app = express()
//log solicitudes http
const morgan = require('morgan')
//agrega put, etc
const methodOverride = require('method-override')
const routes = require('./routes')
const port = process.env.PORT || 8095

const initApp = async () => {
    await DB.start({ dbUri: process.env.DB_URI })

    app.use(
        cors({
            methods: ['GET', 'POST']
        })
    )
    app.use(morgan('dev'))
    app.use(express.json({ limit: '50mb' }))
    app.use(express.urlencoded({ limit: '50mb', extended: true }))
    app.use(methodOverride())

    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
        next()
    })

    app.use('/', routes)
    app.listen(port)

    console.log('\x1b[32m%s\x1b[0m', `back-end ready, running on port \x1b[36m${port.toString()}`)
}

initApp()
