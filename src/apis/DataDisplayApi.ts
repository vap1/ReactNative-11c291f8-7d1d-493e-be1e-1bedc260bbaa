
import axios from 'axios';
import { DataDisplayRequest, DataDisplayResponse } from '../types/Types';

const BASE_URL = 'YOUR_API_BASE_URL';

const DataDisplayApi = {
  getDataDisplay: async (request: DataDisplayRequest): Promise<DataDisplayResponse> => {
    try {
      const response = await axios.get(`${BASE_URL}/data-display`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to retrieve data display');
    }
  },
};

export default DataDisplayApi;