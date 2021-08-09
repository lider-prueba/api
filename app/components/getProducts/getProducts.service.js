const Product = require('../../models/products')

class GetProductsService {
    async getProducts(pageTofind) {
        let resp
        const options = {
            page: pageTofind,
            limit: 9,
            collation: {
                locale: 'es'
            }
        }
        await Product.paginate({}, options, (err, result) => {
            const { docs, totalPages, page, hasPrevPage, hasNextPage, totalDocs, prevPage, nextPage, pagingCounter } = result
            resp = {
                totalPages,
                page,
                hasPrevPage,
                hasNextPage,
                totalDocs,
                prevPage,
                nextPage,
                pagingCounter,
                count: docs.length,
                products: docs.map((doc) => {
                    return {
                        brand: doc.brand,
                        description: doc.description,
                        image: doc.image,
                        price: doc.price,
                        _id: doc._id
                    }
                })
            }
        })

        return resp
    }
}

exports.GetProductsService = GetProductsService
