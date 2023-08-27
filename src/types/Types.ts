
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


// {"userDetailsList":[{"userId":"vap1","firstName":"vaibhav","lastName":"vasant","email":"v@gmail.com","phoneNumber":"7633824597","address":"None"}
// ,{"userId":"vap2","firstName":"vaibhav","lastName":"vasant","email":"v@gmail.com","phoneNumber":"7633824597","address":"None"}]}
export interface DataDisplayResponse {
  userDetailsList: User[];
}

export interface DataDisplayRequest {}

export interface SearchResponse {
  searchResults: User[];
}
