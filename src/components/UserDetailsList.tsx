
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput } from 'react-native';
import { User, SearchRequest, SearchResponse } from '../types/Types';
import { searchApi } from '../apis/SearchApi';

const UserDetailsList: React.FC = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchResults, setSearchResults] = useState<User[]>([]);

  useEffect(() => {
    if (searchKeyword) {
      performSearch();
    } else {
      setSearchResults([]);
    }
  }, [searchKeyword]);

  const performSearch = async () => {
    try {
      const request: SearchRequest = {
        keyword: searchKeyword,
      };

      const response: SearchResponse = await searchApi(request);
      setSearchResults(response.searchResults);
    } catch (error) {
      console.error('Failed to perform search:', error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Search keyword"
        value={searchKeyword}
        onChangeText={setSearchKeyword}
      />
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.userId}
        renderItem={({ item }) => (
          <View>
            <Text>{item.firstName} {item.lastName}</Text>
            <Text>Email: {item.email}</Text>
            <Text>Phone: {item.phone}</Text>
            <Text>Address: {item.address}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default UserDetailsList;