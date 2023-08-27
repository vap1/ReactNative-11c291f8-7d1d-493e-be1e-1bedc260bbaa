
import axios from 'axios';
import { DataDisplayRequest, DataDisplayResponse } from '../types/Types';

const BASE_URL = 'YOUR_API_BASE_URL'; // Replace with your actual API base URL

export const dataDisplayApi = async (request: DataDisplayRequest): Promise<DataDisplayResponse> => {
  try {
    const response = await axios.get<DataDisplayResponse>(`${BASE_URL}/data-display`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to retrieve user details');
  }
};