const Router = require("express");
const router = new Router();
const typeController = require("../controllers/typeController");
const checkRoleMiddleware = require("../middleware/checkRoleMiddleWare");

router.post('/', checkRoleMiddleware("ADMIN"), typeController.create);
router.get('/', typeController.getAll);

module.exports = router