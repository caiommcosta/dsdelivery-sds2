import axios from "axios";

// http://192.168.1.2:8080
// https://caio-costa-sds2.herokuapp.com

const API_URL = 'https://caio-costa-sds2.herokuapp.com';

export function fetchOrders() {
    return axios(`${API_URL}/orders`)
}

export function confirmDelivery(orderId: number) {
    return axios.put(`${API_URL}/orders/${orderId}/delivered`);
}