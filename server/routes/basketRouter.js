const Router = require("express");
const router = new Router();
const basketController = require("../controllers/basketController");
const authMiddleware = require("../middleware/authMiddleWare");

router.post('/', authMiddleware, basketController.addToCart);
router.put('/', authMiddleware, basketController.updateDeviceInCart);
router.get('/', authMiddleware, basketController.getAll);
router.delete('/', authMiddleware, basketController.removeFromCart)

module.exports = router