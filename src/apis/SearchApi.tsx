
import axios, { AxiosResponse } from 'axios';
import { SearchRequest, SearchResponse } from '../types/Types';

const BASE_URL = 'YOUR_API_BASE_URL';

const SearchApi = {
  searchKeyword: async (request: SearchRequest): Promise<SearchResponse> => {
    try {
      const response: AxiosResponse<SearchResponse> = await axios.get(`${BASE_URL}/search/${request.keyword}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to perform search');
    }
  },
};

export default SearchApi;