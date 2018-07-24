var {User} = require('../models')

module.exports = {
    async register (request, response) {
        try{
            console.log(request.body)
            console.log(User)
            const ss = await User.create(request.body)
            response.send( ss.toJSON() )
        }catch(err){
            response.status(400).send({
                message: 'krl q babaca'
            })
        }
    }
}