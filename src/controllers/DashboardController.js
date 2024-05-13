const DashboardService = require("../services/DeshboardServices");
const dashboardService = new DashboardService();

class DashboardController {

    static async dashboard(req, res) {

        const { user_id } = req.headers;

        try {
            const dashboard = await dashboardService.dashboard({user_id})

            res.status(200).json({dashboard})
        } catch (error) {
            res.status(401).json({
                "error": error.message
            })
        }
        
    }

}

module.exports = DashboardController;