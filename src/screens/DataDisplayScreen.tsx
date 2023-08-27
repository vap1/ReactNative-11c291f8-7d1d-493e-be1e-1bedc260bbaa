
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { User } from '../types/Types';
import { getDataDisplay } from '../apis/DataDisplayApi';
import { search } from '../apis/SearchApi';

const DataDisplayScreen: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getDataDisplay();
      setUsers(response.users);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await search(searchKeyword);
      setUsers(response.searchResults);
    } catch (error) {
      console.error('Error searching data:', error);
    }
  };

  const renderItem = ({ item }: { item: User }) => (
    <View>
      <Text>{item.firstName} {item.lastName}</Text>
      <Text>Email: {item.email}</Text>
      <Text>Phone: {item.phone}</Text>
      <Text>Address: {item.address}</Text>
    </View>
  );

  return (
    <View>
      <TextInput
        placeholder="Search keyword"
        value={searchKeyword}
        onChangeText={setSearchKeyword}
      />
      <TouchableOpacity onPress={handleSearch}>
        <Text>Search</Text>
      </TouchableOpacity>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.userId}
      />
    </View>
  );
};

export default DataDisplayScreen;