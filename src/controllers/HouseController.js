const HouseService = require("../services/HouseServices");
const houseServices = new HouseService();

class HouseController {

    static async create(req, res) {

        const {user_id} = req.headers;
        const {image, descricao, localizacao, preco, status} = req.body;

        try {
            const createHouse = await houseServices.createHouse({
                user_id, image, descricao, localizacao, preco, status
            })
            res.status(201).json({
                createHouse
            });
        } catch (error) {
            res.status(401).json({
                "error": error
            })
        }
        

    }

    static async findOne(req, res) {

        const {id} = req.params;

        try {
            const house = await houseServices.findOneHouse({id});
            res.status(200).json({house});
        } catch (error) {
            res.status(401).json({error});
        }
        
    }

    static async updates(req, res) {

        const { user_id } = req.headers;
        const { id } = req.params;
        const { image, descricao, localizacao, preco, status } = req.body;

        try {
            
            await houseServices.updateHouse({
                id, user_id, image, descricao, localizacao, preco, status
            })
            res.status(200).json({
                "message": "Imóvel atualizado com sucesso!"
            })
        } catch (error) {
            res.status(401).json({
                "error": error.message
            })
        }   


    }

    static async deleteHouse(req, res) {

        const {id} = req.params;
        const {user_id} = req.headers;
        try {
            const deletes = await houseServices.deleteHouse({id, user_id});
            res.status(200).json({
                "message": "Imóvel deletado com sucesso!"
            })
        } catch (error) {
            res.status(400).json({
                "error": error.message
            })
        }
        

    }

    static async findAllHouses(req, res) {

        try {
            const houses = await houseServices.findAllHouses();
            res.status(200).json({houses});
        } catch (error) {
            res.status(401).json({"error": "Imóvel não encontrado"})
        }

    }

}

module.exports = HouseController;