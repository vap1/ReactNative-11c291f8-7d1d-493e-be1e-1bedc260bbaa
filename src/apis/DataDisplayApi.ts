
import axios from 'axios';
import { DataDisplayRequest, DataDisplayResponse } from '../types/Types';

const BASE_URL = 'https://api.example.com'; // Replace with your API base URL

export const getDataDisplay = async (): Promise<DataDisplayResponse> => {
  try {
    const response = await axios.get<DataDisplayResponse>(`${BASE_URL}/data-display`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data display');
  }
};

export const dataDisplayApi = async (request: DataDisplayRequest): Promise<DataDisplayResponse> => {
  try {
    // Perform any necessary data transformations or validations before making the API call
    const response = await getDataDisplay();
    return response;
  } catch (error) {
    throw new Error('Failed to process data display request');
  }
};