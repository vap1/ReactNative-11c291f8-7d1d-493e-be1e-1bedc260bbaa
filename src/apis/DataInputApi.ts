
import axios from 'axios';
import { DataInputRequest, DataInputResponse } from '../types/Types';

const BASE_URL = 'https://api.example.com'; // Replace with your API base URL

export const postDataInput = async (request: DataInputRequest): Promise<DataInputResponse> => {
  try {
    const response = await axios.post<DataInputResponse>(`${BASE_URL}/data-input`, request);
    return response.data;
  } catch (error) {
    throw new Error('Failed to perform data input');
  }
};