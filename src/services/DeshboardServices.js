const db = require("../models");

class DashboardService {

    async dashboard(dto) {

        const house = await db.Houses.findAll({
            where: {user_id: dto.user_id}
        });

        if(!house) {
            throw new Error("Imóvel não encontrado");
        }
 
        try {
            
            return await house;

        } catch (error) {
            throw new Error("Nao encontrado");
        }
    }

    async verificaUser(dto, db) {

        if(dto !== db) {
            throw new Error("Não foi possivel acessar dashboard");
        }

    }

}

module.exports = DashboardService;