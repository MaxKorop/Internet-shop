import { $authHost } from "./index";

export const addToCart = async (basketId, deviceId) => {
    const { data } = await $authHost.post('api/basket', { basketId, deviceId });
    return data
}

export const fetchCart = async (basketId, limit, offset) => {
    const { data } = await $authHost.get('api/basket', {params: {basketId}});
    return data
}