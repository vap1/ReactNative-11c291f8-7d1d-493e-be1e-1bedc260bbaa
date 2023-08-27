
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { DataInputRequest, User } from '../types/Types';
import { postDataInput } from '../apis/DataInputApi';

const DataInputForm: React.FC = () => {
  const [user, setUser] = useState<User>({
    userId: Math.random().toString(36).substring(7), // Set a random userId before submitting
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
  });

  const handleDataInput = async () => {
    try {
      const requestData: DataInputRequest = {
        user: user,
      };

      console.log('Data Input Request:', requestData); // Log the data input request

      // Call the API to submit the data input
      const response = await postDataInput(requestData);

      console.log('Data Input Response:', response); // Log the data input response

      // Display a success message
      Alert.alert('Success', 'Data input submitted successfully.');

      // Reset the form fields
      setUser({
        userId: Math.random().toString(36).substring(7), // Set a new random userId
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
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
        value={user.phoneNumber}
        onChangeText={(value) => setUser({ ...user, phoneNumber: value })}
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