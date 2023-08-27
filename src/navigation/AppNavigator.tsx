
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DataInputScreen from '../screens/DataInputScreen';
import DataDisplayScreen from '../screens/DataDisplayScreen';

const Tab = createBottomTabNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="DataInput" component={DataInputScreen} />
      <Tab.Screen name="DataDisplay" component={DataDisplayScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;