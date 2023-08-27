
import axios from 'axios';
import { DataDisplayRequest, DataDisplayResponse } from '../types/Types';

const BASE_URL = 'https://0fg9aos700.execute-api.ap-south-1.amazonaws.com/asdfasdf/sample-route-key'; // Replace with your actual API base URL

export const getDataDisplay = async (): Promise<DataDisplayResponse> => {
  try {
    const response = await axios.get<DataDisplayResponse>(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching data display:', error);
    throw new Error('Failed to fetch data display');
  }
};

export const dataDisplayApi = async (request: DataDisplayRequest): Promise<DataDisplayResponse> => {
  try {
    // Perform any necessary data transformations or validations before making the API call
    const response = await getDataDisplay();
    return response;
  } catch (error) {
    console.error('Error processing data display request:', error);
    throw new Error('Failed to process data display request');
  }
};