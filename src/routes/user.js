const {Router} = require("express");
const UserSessionController = require("../controllers/UserSessionController");
const HouseController = require("../controllers/HouseController");
const auth = require("../middleware/verificaUser");
const DashboardController = require("../controllers/DashboardController");

const router = new Router();

router.post("/user/login", UserSessionController.login);

router.get("/house", HouseController.findAllHouses);
router.get("/house/:id", HouseController.findOne);
router.post("/house",auth, HouseController.create);
router.put("/house/:id",auth, HouseController.updates);
router.delete("/house/:id",auth, HouseController.deleteHouse);

router.get("/dashboard", auth, DashboardController.dashboard);

module.exports = router;