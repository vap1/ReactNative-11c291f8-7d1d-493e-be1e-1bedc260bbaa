
import React from 'react';
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { User, DataInputRequest } from '../types/Types';
import { dataInputApi } from '../apis/DataInputApi';

const DataInputScreen: React.FC = () => {
  const [user, setUser] = React.useState<User>({
    userId: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleInputChange = (field: keyof User, value: string) => {
    setUser((prevUser) => ({
      ...prevUser,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const request: DataInputRequest = {
        user: user,
      };

      await dataInputApi(request);
      Alert.alert('Success', 'Data input successful');
    } catch (error) {
      Alert.alert('Error', 'Failed to perform data input');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="User ID"
        value={user.userId}
        onChangeText={(value) => handleInputChange('userId', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={user.firstName}
        onChangeText={(value) => handleInputChange('firstName', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={user.lastName}
        onChangeText={(value) => handleInputChange('lastName', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={user.email}
        onChangeText={(value) => handleInputChange('email', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={user.phone}
        onChangeText={(value) => handleInputChange('phone', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={user.address}
        onChangeText={(value) => handleInputChange('address', value)}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    marginBottom: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
});

export default DataInputScreen;