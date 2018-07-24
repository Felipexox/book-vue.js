var {User} = require('../models')

module.exports = {
    async register (request, response) {
        try{
            const user = await User.create(request.body)
            response.send( user.toJSON() )
        }catch(err){
            response.status(400).send({
                error: '<br>Email ja cadastrado<br><br>'
            })
        }
    }
}