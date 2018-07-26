const {Books} = require('../models')

module.exports = {
    async register (request, response) {
        try{
            const book = await Books.create(request.body)
            response.send(book)
        } catch (err){
            response.send('Something wrong on create a book')
        }
    },
    async getAllBooks (request, response) {
        try{
            const books = await Books.findAll ({
                limit: 10
            })
            response.send(books)
        } catch (err){
            response.send("Cannot fetch any book")
        }
    }
}