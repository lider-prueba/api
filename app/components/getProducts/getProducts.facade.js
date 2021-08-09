const { GetProductsService } = require('./getProducts.service')
const { ParserResponse } = require('../../utils/parserResponse')

class GetProductsFacade {
    constructor() {
        this.getProductsService = new GetProductsService()
    }

    async getProducts(req) {
        let resp
        try {
            const { page } = req.query
            resp = await this.getProductsService.getProducts(page)
        } catch (error) {
            resp = error
        }
        return ParserResponse.parse(resp)
    }
}

exports.GetProductsFacade = GetProductsFacade
