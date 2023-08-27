
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { User, DataDisplayResponse } from '../types/Types';
import { getDataDisplay } from '../apis/DataDisplayApi';

const DataDisplayScreen: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      console.log('Calling getDataDisplay'); // Log the getDataDisplay call
      const response: DataDisplayResponse = await getDataDisplay();
      console.log('Data Display Response:', response); // Log the data display response
      setUsers(response.userDetailsList);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <View>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <View>
            <Text>{item.firstName} {item.lastName}</Text>
            <Text>Email: {item.email}</Text>
            <Text>Phone: {item.phoneNumber}</Text>
            <Text>Address: {item.address}</Text>
          </View>
        )}
        keyExtractor={(item) => item.userId}
      />
    </View>
  );
};

export default DataDisplayScreen;