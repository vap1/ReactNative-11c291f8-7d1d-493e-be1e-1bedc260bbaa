
import axios from 'axios';
import { SearchRequest, SearchResponse } from '../types/Types';

const BASE_URL = 'YOUR_API_BASE_URL'; // Replace with your actual API base URL

export const searchApi = async (request: SearchRequest): Promise<SearchResponse> => {
  try {
    const response = await axios.get<SearchResponse>(`${BASE_URL}/search/${request.keyword}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to perform search');
  }
};