
import axios from 'axios';
import { DataInputRequest, DataInputResponse } from '../types/Types';

const BASE_URL = 'YOUR_API_BASE_URL'; // Replace with your actual API base URL

export const dataInputApi = async (request: DataInputRequest): Promise<DataInputResponse> => {
  try {
    const response = await axios.post<DataInputResponse>(`${BASE_URL}/data-input`, request);
    return response.data;
  } catch (error) {
    throw new Error('Failed to perform data input');
  }
};