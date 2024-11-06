import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import BookDetailScreen from './screens/BookDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: 'Book Reader' }}
        />
        <Stack.Screen 
          name="BookDetail" 
          component={BookDetailScreen}
          options={{ title: 'Book Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}