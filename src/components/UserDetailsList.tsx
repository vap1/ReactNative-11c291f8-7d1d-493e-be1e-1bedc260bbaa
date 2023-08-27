
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { User } from '../types/Types';
import { SearchRequest, SearchResponse } from '../apis/SearchApi';

interface UserDetailsListProps {
  users: User[];
}

const UserDetailsList: React.FC<UserDetailsListProps> = ({ users }) => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchResults, setSearchResults] = useState<User[]>([]);

  useEffect(() => {
    // Function to fetch search results based on the search keyword
    const fetchSearchResults = async () => {
      try {
        const searchRequest: SearchRequest = {
          keyword: searchKeyword,
        };

        // Make API call to search for specific information within the user's profile
        const response: SearchResponse = await searchApiCall(searchRequest);

        setSearchResults(response.searchResults);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    // Call the fetchSearchResults function when the searchKeyword state changes
    fetchSearchResults();
  }, [searchKeyword]);

  return (
    <View>
      <TextInput
        placeholder="Search..."
        value={searchKeyword}
        onChangeText={setSearchKeyword}
      />

      <FlatList
        data={searchKeyword ? searchResults : users}
        keyExtractor={(item) => item.userId}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Text>{item.firstName} {item.lastName}</Text>
            <Text>Email: {item.email}</Text>
            <Text>Phone: {item.phone}</Text>
            <Text>Address: {item.address}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default UserDetailsList;