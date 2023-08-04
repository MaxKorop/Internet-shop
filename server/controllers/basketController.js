const uuid = require("uuid");
const path = require("path");
const { Basket, BasketDevice, Device } = require("../models/models");
const ApiError = require("../error/ApiError");

class BasketController{
    async addToCart(req, res) {
        const { basketId, deviceId } = req.body;
        const basketDevice = await BasketDevice.create({ basketId, deviceId });
        return res.status(200).json(basketDevice);
    }

    async updateDeviceInCart(req, res) {
        
    }

    async getAll(req, res) {
        const { basketId, limit, offset } = req.query;
        const basketDevices = (await BasketDevice.findAll({ where: { basketId } })).map(record => record.deviceId);
        const devices = await Device.findAndCountAll({ where: { id: basketDevices }, limit, offset });
        return res.json(devices)
    }

    async removeFromCart(req, res) {
        
    }

    async create(req, res, next) {
        try {
            let { name, price, brandId, typeId, info } = req.body;
            const { img } = req.files;
            let fileName = uuid.v4() + ".jpg";
            img.mv(path.resolve(__dirname, '..', 'static', fileName));

            const device = await Device.create({ name, price, brandId, typeId, img: fileName });

            if (info) {
                info = JSON.parse(info);
                info.forEach(i => {
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    });
                });
            }

            return res.status(200).json(device);
        } catch (error) {
            next(ApiError.badRequest(error.message));
        }
    }

    /*async getAll(req, res) {
        let { brandId, typeId, limit, page } = req.query;
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;
        console.log(page, limit, offset)
        let devices;
        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({ limit, offset });
        }
        if (brandId && !typeId) {
            devices = await Device.findAndCountAll({ where: { brandId }, limit, offset });
        }
        if (!brandId && typeId) {
            devices = await Device.findAndCountAll({ where: { typeId }, limit, offset });
        }
        if (brandId && typeId) {
            devices = await Device.findAndCountAll({ where: { brandId, typeId }, limit, offset });
        }
        return res.status(200).json(devices)
    }*/

    async getOne(req, res) {
        const { id } = req.params;
        const device = await Device.findOne({
            where: { id },
            include: [{ model: DeviceInfo, as: 'info' }]
        });
        return res.status(200).json(device);
    }
}

module.exports = new BasketController();