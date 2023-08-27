
interface User {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
}

interface DataInputRequest {
  user: User;
}

interface DataInputResponse {}

interface SearchRequest {
  keyword: string;
}

interface SearchResponse {
  searchResults: User[];
}

interface DataDisplayRequest {}

interface DataDisplayResponse {
  users: User[];
}

export {
  User,
  DataInputRequest,
  DataInputResponse,
  SearchRequest,
  SearchResponse,
  DataDisplayRequest,
  DataDisplayResponse,
};