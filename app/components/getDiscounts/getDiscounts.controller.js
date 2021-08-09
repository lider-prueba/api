const { GetDiscountsFacade } = require('./getDiscounts.facade')
const { ParserResponse } = require('../../utils/parserResponse')
const { schema } = require('./schema')

class GetDiscountsController {
    constructor() {
        this.getDiscountsFacade = new GetDiscountsFacade()
    }

    async getDiscounts(req, res) {
        let resp = ParserResponse.validate(req, schema)
        resp.status ? resp : (resp = await this.getDiscountsFacade.getDiscounts(req))
        res.status(resp.status).send(resp)
    }
}

exports.GetDiscountsController = GetDiscountsController
