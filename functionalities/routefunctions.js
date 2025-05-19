import axios from 'axios';

 const BASE_URL = 'https://madassigmentnabihanasir-default-rtdb.firebaseio.com';

export const createRoute = async (newRoute) => {
  try {
    const response = await axios.post(`${BASE_URL}/routes.json`, newRoute);
    return response.data;
  } catch (error) {
    console.error('Error creating route:', error);
    throw error;
  }
};


export const getAllRoutes = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/routes.json`);
    const data = response.data;
    if (!data) return [];

    return Object.entries(data).map(([id, route]) => ({ id, ...route }));
  } catch (error) {
    console.error('Error fetching routes:', error);
    throw error;
  }
};


export const updateRoute = async (id, updatedRoute) => {
  try {
    await axios.put(`${BASE_URL}/routes/${id}.json`, updatedRoute);
    return true;
  } catch (error) {
    console.error('Error updating route:', error);
    throw error;
  }
};


export const deleteRoute = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/routes/${id}.json`);
    return true;
  } catch (error) {
    console.error('Error deleting route:', error);
    throw error;
  }
};
import axios from 'axios';


export const createMultipleRoutes = async (routes) => {
  try {
    const promises = routes.map((route) => {
      const routeData = {
        address: route.locationName,
        pickupTime: route.pickupTime,
      };
      return axios.post(`${BASE_URL}/routes.json`, routeData);
    });

    const responses = await Promise.all(promises);
    console.log('All routes created:', responses.map(res => res.data));
    return responses.map(res => res.data);
  } catch (error) {
    console.error('Error creating multiple routes:', error);
    throw error;
  }
};
