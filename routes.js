const express = require('express')
const methods = require('./app/utils/methods')
const jwt = require('./app/utils/token')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('running')
})

const determineClassMethod = (req) => {
    const classes = {}
    methods.forEach((name) => {
        classes[name.class] = {
            class: `${name.class}Controller`
        }
    })
    const path = req.originalUrl.split('?')[0].substring(1)
    const methodToFound = methods.find((name) => name.class.toLowerCase() === path)
    const capitalize = `${methodToFound.class.charAt(0).toLowerCase()}${methodToFound.class.slice(1)}`
    const importedClass = require(`./app/components/${capitalize}/${capitalize}.controller`)
    const className = Object.keys(importedClass)[0]
    const instance = new importedClass[className]()
    return {
        instance,
        method: methodToFound.method
    }
}

router.get('/:get', async (req, res) => {
    const { authorization = '' } = req.headers
    const { instance, method } = determineClassMethod(req)
    !authorization.length || authorization.split(' ')[1] === 'null' ? instance[method](req, res) : (await jwt.authentication(req, res)) && instance[method](req, res)
})

router.post('/:post', async (req, res) => {
    const { authorization = '' } = req.headers
    const { instance, method } = determineClassMethod(req)
    !authorization.length || authorization.split(' ')[1] === 'null' ? instance[method](req, res) : (await jwt.authentication(req, res)) && instance[method](req, res)
})

module.exports = router
