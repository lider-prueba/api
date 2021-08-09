const { GetDiscountsService } = require('./getDiscounts.service')
const { ParserResponse } = require('../../utils/parserResponse')

class GetDiscountsFacade {
    constructor() {
        this.getDiscountsService = new GetDiscountsService()
    }

    async getDiscounts() {
        let resp
        try {
            resp = await this.getDiscountsService.getDiscounts()
        } catch (error) {
            resp = error
        }
        return ParserResponse.parse(resp)
    }
}

exports.GetDiscountsFacade = GetDiscountsFacade
