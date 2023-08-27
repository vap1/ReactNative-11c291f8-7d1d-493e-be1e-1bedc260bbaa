
export type User = {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
};

export type DataInputRequest = {
  user: User;
};

export type DataInputResponse = void;

export type SearchRequest = {
  keyword: string;
};

export type SearchResponse = {
  searchResults: User[];
};

export type DataDisplayRequest = void;

export type DataDisplayResponse = {
  users: User[];
};