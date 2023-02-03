import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Task from "./screens/Task"
import Details from "./screens/Details"
import InitialScreen from "./screens/InitialScreen"
import NewTask from "./screens/NewTask"

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Task'>
        <Stack.Screen name="Task" component={Task} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="InitialScreen" component={InitialScreen} />
        <Stack.Screen name="NewTask" component={NewTask} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
