
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { DataInputRequest } from '../types/Types';
import { postDataInput } from '../apis/DataInputApi';

const DataInputForm: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleDataInput = async () => {
    try {
      const requestData: DataInputRequest = {
        user: {
          firstName,
          lastName,
          email,
          phone,
          address,
        },
      };

      // Call the API to submit the data input
      const response = await postDataInput(requestData);

      // Display a success message
      Alert.alert('Success', 'Data input submitted successfully.');

      // Reset the form fields
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setAddress('');
    } catch (error) {
      // Display an error message
      Alert.alert('Error', 'Failed to submit data input. Please try again.');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      <Button title="Submit" onPress={handleDataInput} />
    </View>
  );
};

export default DataInputForm;