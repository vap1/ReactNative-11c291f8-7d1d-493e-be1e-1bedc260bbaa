
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DataInputScreen from '../screens/DataInputScreen';
import DataDisplayScreen from '../screens/DataDisplayScreen';

const Tab = createBottomTabNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="DataInput" component={DataInputScreen} />
        <Tab.Screen name="DataDisplay" component={DataDisplayScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;