const db = require("../models");
const verificaHouseUser = require("../middleware/verificaUser");

class HouseService {


    async createHouse(dto) {

        try {
            const create = await db.Houses.create({
                image: dto.image,
                descricao: dto.descricao,
                localizacao: dto.localizacao,
                preco: dto.preco,
                user_id: dto.user_id,
                status: dto.status
            })

            return create;
        } catch (error) {
            throw new Error("Erro 401: tente novamente mais tarde");
        }

    }

    async findOneHouse(dto) {

        try {
            
            const house = await db.Houses.findOne({
                where: {id: dto.id}
            })

            if(!house) {
                throw new Error("Não foi possivel encontrar essa casa");
            }

            return house;

        } catch (error) {
            return "Erro 401: tente novamente mais tarde";
        }

    }

    async findAllHouses() {

        try {
        const houses = await db.Houses.findAll({
            order: [["id", "DESC"]]
        })
            return houses;
        } catch (error) {
            throw new Error(error.message);
        }

    }

    async updateHouse(dto) {

        const house = await db.Houses.findOne({where:{id:dto.id}});

        if(!house) {
            throw new Error("Imóvel não encontrado :(");
        }

        const user = dto.user_id;

        if(user !== house.user_id) {
            throw new Error("Você nao tem permissão paea editar esse imóvel");
        }

        try {
            
            house.image = dto.image,
            house.descricao = dto.descricao,
            house.localizacao = dto.localizacao,
            house.preco = dto.preco,
            house.status = dto.status

            await house.save();
            return await house.reload();
        } catch (error) {
            console.error('Message error: ', error.message)
            throw error
        }

    }

    async deleteHouse(dto) {
        const house = await db.Houses.findOne({ where: { id: dto.id }})

        if(!house) {
            throw new Error("Imóvel não encontrado :(");
        }
        // console.log(house.user_id)
        const usuario = dto.user_id
        const house_user = house.user_id
        
        if(usuario !== house_user) {
            throw new Error("Você não possui permissão para deletar esse imóvel")
        }

        try {
            const deleteHouse = await db.Houses.destroy({
                where: {id: house.id}
            })

            return deleteHouse;
        } catch (error) {
            
        }



    }

}

module.exports = HouseService;