const {User} = require('../models')
const config = require('../config/config')
const jwt = require('jsonwebtoken')

function jwtSingUser(user){
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}
module.exports = {
    async register (request, response) {
        try{
            console.log(User)
            const user = await User.create(request.body)
            const userJson = user.toJSON()
            return response.send({
                user: userJson,
                token: jwtSingUser(userJson)
            })
        }catch(err){
            response.status(400).send({
                error: '<br>Email ja cadastrado<br><br>'
            })
        }
    },
    async login (request, response) {
        try{
            const {email, password} = request.body
            const user = await User.findOne ({
                where: {
                    email: email
                }
            })
            if(!user){
                return reponse.status(403).send({
                    error: 'incorrect login'
                })
            }
         
            const isValidPassword = await user.comparePassword(password)
       
            if(!isValidPassword){
                return reponse.status(403).send({
                    error: 'incorrect login'
                })
            } 
        
            const userJson = user.toJSON()
            return response.send({
                user: userJson,
                token: jwtSingUser(userJson)
            })
           
        } catch (err) {
            return response.status(404).send({
                error: 'error'
            })
        }
    }
}