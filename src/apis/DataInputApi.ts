
import axios from 'axios';
import { DataInputRequest, DataInputResponse } from '../types/Types';

const BASE_URL = 'https://75iaqg7l2j.execute-api.ap-south-1.amazonaws.com/prod'; // Replace with your actual API base URL

export const postDataInput = async (request: DataInputRequest): Promise<DataInputResponse> => {
  try {
    const response = await axios.post<DataInputResponse>(BASE_URL, request);
    console.log('Data Input Response:', response.data); // Log the data input response
    return response.data;
  } catch (error) {
    console.error('Error performing data input:', error); // Log the error
    throw new Error('Failed to perform data input');
  }
};