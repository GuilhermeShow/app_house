const { where } = require("sequelize");
const db = require("../models");

class ReservaServices {

    async reservar(dto) {

        const house = await db.Houses.findOne({

            where: {},
            include: [
                {
                    model: Houses,
                }
            ]

        })

    }

}

module.exports = ReservaServices;