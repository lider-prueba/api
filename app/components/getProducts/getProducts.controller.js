const { GetProductsFacade } = require('./getProducts.facade')
const { ParserResponse } = require('../../utils/parserResponse')
const { schema } = require('./schema')

class GetProductsController {
    constructor() {
        this.getProductsFacade = new GetProductsFacade()
    }

    async getProducts(req, res) {
        let resp = ParserResponse.validate(req, schema)
        resp.status ? resp : (resp = await this.getProductsFacade.getProducts(req))
        res.status(resp.status).send(resp)
    }
}

exports.GetProductsController = GetProductsController
