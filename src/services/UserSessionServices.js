const db = require("../models");

class UserSessionServices {

    async login(dto) {

        try {
            const emailExiste = await db.User.findOne({where:{email:dto.email}})

            if(emailExiste) {
                return emailExiste;
            }
    
            const createUser = await db.User.create({
                email: dto.email
            })
    
            return createUser;
        } catch (error) {
            return error
        }
       
    }

}

module.exports = UserSessionServices;