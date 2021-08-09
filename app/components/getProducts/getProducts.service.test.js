const { GetProductsService } = require('./getProducts.service')
const Product = require('../../models/products')
const { request } = require('../../utils/request')
const { DB } = require('../../utils/db')

beforeEach(() => {})

/** @test {GetProductsService} */
describe('getProducts Service', () => {
    /** @test {GetProductsService.getProducts} */
    test('retorna operación exitosa: getProducts', async () => {
        this.getProductsService = new GetProductsService()
        DB.start()
        Product.paginate = jest.fn().mockReturnValue({
            status: 200
        })

        const service = await this.getProductsService.getProducts(request)
        console.log(service)
        expect(service.status).toBe(200)
    })
    // /** @test {CreateCategoryService.createCategory} */
    // test('retorna operación exitosa para desactivar: createBrand', async () => {
    //     this.createCategoryService = new CreateCategoryService()
    //     DB.Query = jest.fn().mockReturnValue({
    //         status: 200
    //     })

    //     const service = await this.createCategoryService.createCategory(request)
    //     expect(service.status).toBe(200)
    // })
    // /** @test {CreateCategoryService.getInsertedRegister} */
    // test('retorna operación exitosa para desactivar: getInsertedRegister', async () => {
    //     this.createCategoryService = new CreateCategoryService()
    //     DB.Query = jest.fn().mockReturnValue({
    //         status: 200
    //     })

    //     const service = await this.createCategoryService.getInsertedRegister(request, 1)
    //     expect(service.status).toBe(200)
    // })
})
