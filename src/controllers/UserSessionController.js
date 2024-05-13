const UserSessionServices = require("../services/UserSessionServices");
const userSessionServices = new UserSessionServices();

class UserSessionController {

    static async login(req, res) {

        const {email} = req.body;

        try {
            const login = await userSessionServices.login({email});
            res.status(201).json({
                login
            })
        } catch (error) {
            res.status(401).json({
                message: "Erro 401: tente novamente mais tarde"
            })
        }

    }

    static async logout(req, res) {
        
    }
    
}

module.exports = UserSessionController;