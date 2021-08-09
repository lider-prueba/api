const Discount = require('../../models/discounts')

class GetDiscountsService {
    async getDiscounts() {
        return await Discount.find().select('brand threshold _id discount').exec()
    }
}

exports.GetDiscountsService = GetDiscountsService
