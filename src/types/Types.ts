
export interface SearchRequest {
  keyword: string;
}

export interface User {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
}

export interface DataInputRequest {
  user: User;
}

export interface DataInputResponse {}

export interface DataDisplayResponse {
  userDetailsList: User[];
}

export interface DataDisplayRequest {}

export interface SearchResponse {
  searchResults: User[];
}