
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { User, DataInputRequest } from '../types/Types';
import dataInputApi from '../apis/DataInputApi';

const DataInputScreen: React.FC = () => {
  const [user, setUser] = useState<User>({
    userId: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleInputChange = (key: keyof User, value: string) => {
    setUser((prevUser) => ({
      ...prevUser,
      [key]: value,
    }));
  };

  const handleSubmit = async () => {
    const request: DataInputRequest = {
      user: user,
    };

    try {
      await dataInputApi.postDataInput(request);
      // Show success message or navigate to another screen
    } catch (error) {
      console.error('Failed to perform data input:', error);
      // Show error message to the user
    }
  };

  return (
    <View>
      <TextInput
        placeholder="First Name"
        value={user.firstName}
        onChangeText={(value) => handleInputChange('firstName', value)}
      />
      <TextInput
        placeholder="Last Name"
        value={user.lastName}
        onChangeText={(value) => handleInputChange('lastName', value)}
      />
      <TextInput
        placeholder="Email"
        value={user.email}
        onChangeText={(value) => handleInputChange('email', value)}
      />
      <TextInput
        placeholder="Phone"
        value={user.phone}
        onChangeText={(value) => handleInputChange('phone', value)}
      />
      <TextInput
        placeholder="Address"
        value={user.address}
        onChangeText={(value) => handleInputChange('address', value)}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default DataInputScreen;