
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { DataInputRequest, User } from '../types/Types';
import { postDataInput } from '../apis/DataInputApi';

const DataInputForm: React.FC = () => {
  const [user, setUser] = useState<User>({
    userId: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleDataInput = async () => {
    try {
      const requestData: DataInputRequest = {
        user: user,
      };

      // Call the API to submit the data input
      const response = await postDataInput(requestData);

      // Display a success message
      Alert.alert('Success', 'Data input submitted successfully.');

      // Reset the form fields
      setUser({
        userId: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
      });
    } catch (error) {
      // Display an error message
      Alert.alert('Error', 'Failed to submit data input. Please try again.');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="User ID"
        value={user.userId}
        onChangeText={(value) => setUser({ ...user, userId: value })}
      />
      <TextInput
        placeholder="First Name"
        value={user.firstName}
        onChangeText={(value) => setUser({ ...user, firstName: value })}
      />
      <TextInput
        placeholder="Last Name"
        value={user.lastName}
        onChangeText={(value) => setUser({ ...user, lastName: value })}
      />
      <TextInput
        placeholder="Email"
        value={user.email}
        onChangeText={(value) => setUser({ ...user, email: value })}
      />
      <TextInput
        placeholder="Phone"
        value={user.phone}
        onChangeText={(value) => setUser({ ...user, phone: value })}
      />
      <TextInput
        placeholder="Address"
        value={user.address}
        onChangeText={(value) => setUser({ ...user, address: value })}
      />
      <Button title="Submit" onPress={handleDataInput} />
    </View>
  );
};

export default DataInputForm;