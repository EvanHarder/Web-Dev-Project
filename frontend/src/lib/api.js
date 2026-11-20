import axios from 'axios';

const ROUTE = "http://127.0.0.1:8000/";

export const backendAPI = axios.create({
    baseURL: ROUTE,
    headers: {
        'Content-Type': 'application/json',
    },
});

// get car all brands
export const getCarBrands = async () => {
    try {
        const response = await backendAPI.get('/api/makes/');
        return response.data;
    } catch (error) {
        console.error('Error fetching car brands:', error);
        throw error;
    }
};

// get car models for a specific make
export const getCarModels = async (make) => {
    try {
        const response = await backendAPI.get(`/api/${make}/models`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching models for ${make}:`, error);
        throw error;
    }
};