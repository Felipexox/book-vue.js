const Joi = require('joi')

module.exports = {
    register (request, response, next) {
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        }
        const {error, value} = Joi.validate(request.body, schema)
        
        if(error){
            switch(error.details[0].context.key){
                case 'email':
                    response.status(400).send({
                        error: '<br>you must a valid email<br><br>'
                    })
                break
                case 'password':
                    response.status(400).send({
                        error: `<br>
                                you must a password with fallows rules:
                                <br>
                                1 - Only characters or numbers 
                                <br><br>
                                `
                    })
                break
                default:
                    response.status(400).send({
                        error: 'something wrong'
                    })
                break
            }
        }else{
            next()
        }
    }
}