
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
      const response: DataDisplayResponse = await getDataDisplay();
      setUsers(response.userDetailsList);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const renderItem = ({ item }: { item: User }) => (
    <View>
      <Text>{item.firstName} {item.lastName}</Text>
      <Text>Email: {item.email}</Text>
      <Text>Phone: {item.phoneNumber}</Text>
      <Text>Address: {item.address}</Text>
    </View>
  );

  return (
    <View>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.userId}
      />
    </View>
  );
};

export default DataDisplayScreen;