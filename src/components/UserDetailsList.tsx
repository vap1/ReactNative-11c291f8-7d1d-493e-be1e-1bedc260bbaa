
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput } from 'react-native';
import { User, SearchRequest, SearchResponse } from '../types/Types';
import SearchApi from '../apis/SearchApi';

const UserDetailsList: React.FC = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchResults, setSearchResults] = useState<User[]>([]);

  const handleSearch = async () => {
    const request: SearchRequest = {
      keyword: searchKeyword,
    };

    try {
      const response: SearchResponse = await SearchApi.searchKeyword(request);
      setSearchResults(response.searchResults);
    } catch (error) {
      console.error('Failed to perform search:', error);
      // Show error message to the user
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <View>
      <TextInput
        placeholder="Search keyword"
        value={searchKeyword}
        onChangeText={setSearchKeyword}
        onSubmitEditing={handleSearch}
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