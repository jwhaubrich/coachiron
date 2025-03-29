import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, Image, StyleSheet } from 'react-native'
import WorkoutScreen from '../components/WorkoutScreen';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Avatar */}
      <Image
        source={{ uri: 'https://example.com/avatar.png' }} // Replace with the user's avatar
        style={styles.avatar}
      />

      <Text style={styles.welcomeText}>Welcome to Coach Iron!</Text>

      <View style={styles.statsContainer}>
        <Text style={styles.statsText}>Active: 15 minutes today</Text>
        <Text style={styles.statsText}>Calories: 350/2500</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Go to Workout"
          onPress={() => navigation.navigate('Workout')}
          color="#FF9900" // Yellow button
        />
        <Button
          title="Go to Nutrition"
          onPress={() => navigation.navigate('Nutrition')}
          color="#FF9900" // Yellow button
        />
        <Button
          title="Go to Chat"
          onPress={() => navigation.navigate('Chat')}
          color="#FF9900" // Yellow button
        />
      </View>
    </View>
  );
};


// function WorkoutScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text style={{ fontSize: 24 }}>Workout Tracker</Text>
//     </View>
//   );
// }

function NutritionScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Nutrition Log</Text>
    </View>
  );
}

function ChatScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Chat with Coach Iron</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F4F4', // Iron White background
    padding: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#FFCC00', // Coach Yellow border around the avatar
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333', // Iron Gray text
    marginBottom: 20,
  },
  statsContainer: {
    marginBottom: 20,
  },
  statsText: {
    fontSize: 18,
    color: '#333333', // Iron Gray text
    marginVertical: 5,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 30,
  },
});

export default function App() {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Workout" component={WorkoutScreen} />
        <Stack.Screen name="Nutrition" component={NutritionScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator> 
  );
}
