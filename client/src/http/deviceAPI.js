import { $authHost, $host } from "./index";

export const createType = async (type) => {
    try {
        const { data } = await $authHost.post('api/type', type);
        return data
    } catch (error) {
        error.message.split(' ')[5] === '403' ?
            alert('Ви не маєте доступу до цієї функції') : console.log(error.message);
    }
}

export const fetchTypes = async () => {
    const { data } = await $host.get('api/type');
    return data
}

export const createBrand = async (brand) => {
    try {
        const { data } = await $authHost.post('api/brand', brand);
        return data        
    } catch (error) {
        error.message.split(' ')[5] === '403' ?
            alert('Ви не маєте доступу до цієї функції') : console.log(error.message);
    }
}

export const fetchBrands = async () => {
    const { data } = await $host.get('api/brand');
    return data
}

export const createDevice = async (device) => {
    try {
        const { data } = await $authHost.post('api/device', device);
        return data        
    } catch (error) {
        error.message.split(' ')[5] === '403' ?
            alert('Ви не маєте доступу до цієї функції') : console.log(error.message);
    }
}

export const fetchDevices = async (typeId, brandId, page, limit = 3) => {
    const { data } = await $host.get('api/device', {params: {
        typeId, brandId, page, limit
    }});
    return data
}

export const fetchOneDevice = async (id) => {
    const { data } = await $host.get(`api/device/${id}`);
    return data
}