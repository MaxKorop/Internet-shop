import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: "First"},
            { id: 2, name: "Second" },
            {id: 3, name: "Third"},
            {id: 4, name: "Fourth"},
        ];
        this._brands = [
            { id: 1, name: "Samsung" },
            { id: 2, name: "Apple" }
        ];
        this._devices = [
            { id: 1, name: "iPhone 14 Pro", price: 50000, rating: 5, img: "https://www.ipeople.in.ua/files/products/%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202022-09-09%20%D0%B2%2018.20.07.800x600.png" },
            { id: 2, name: "S23 Ultra", price: 50000, rating: 4, img: "https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/_/g/_global_version_sm-s918_galaxys23ultra_front_green_221122_1_1.jpg/w_600" }
        ];
        this._seletedType = {};
        this._selectedBrand = {};
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }

    setBrands(brands) {
        this._brands = brands;
    }

    setDevices(devices) {
        this._devices = devices;
    }

    setSelectedType(type) {
        this._seletedType = type;
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand;
    }

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }

    get devices() {
        return this._devices;
    }

    get selectedType() {
        return this._seletedType;
    }

    get selectedBrand() {
        return this._selectedBrand;
    }
}