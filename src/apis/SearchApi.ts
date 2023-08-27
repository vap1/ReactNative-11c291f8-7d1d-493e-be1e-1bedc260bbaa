
import axios from 'axios';
import { SearchRequest, SearchResponse } from '../types/Types';

const BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export const search = async (keyword: string): Promise<SearchResponse> => {
  try {
    const response = await axios.get<SearchResponse>(`${BASE_URL}/search/${keyword}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to search for user details.'); // Handle error based on your app's requirements
  }
};