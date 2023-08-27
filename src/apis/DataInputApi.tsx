
import axios, { AxiosResponse } from 'axios';
import { DataInputRequest, DataInputResponse } from '../types/Types';

const BASE_URL = 'YOUR_API_BASE_URL';

const DataInputApi = {
  postDataInput: async (request: DataInputRequest): Promise<DataInputResponse> => {
    try {
      const response: AxiosResponse<DataInputResponse> = await axios.post(`${BASE_URL}/data-input`, request);
      return response.data;
    } catch (error) {
      throw new Error('Failed to perform data input');
    }
  },
};

export default DataInputApi;