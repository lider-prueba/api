const jwt = require('jsonwebtoken')
require('dotenv').config()

class Authentication {
    static async sign(shopData) {
        const { user_email, shop_id } = shopData
        return jwt.sign({ user_email, shop_id }, process.env.TOKENKEY, { expiresIn: '1h' })
    }

    static async authentication(req, res) {
        const { authorization = '' } = req.headers
        const decodedToken = authorization.replace('Bearer ', '')
        try {
            return jwt.verify(decodedToken, process.env.TOKENKEY)
        } catch (error) {
            res.status(401).send({ response: 'Token inválido' })
            return false
        }
    }
}

module.exports = Authentication
