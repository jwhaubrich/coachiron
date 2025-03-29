import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert, Button } from 'react-native';

export default function WorkoutScreen({ navigation }: any) {
  const [workouts, setWorkouts] = useState([]);
  const [exerciseName, setExerciseName] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');

  const handleAddWorkout = () => {
    if (exerciseName && sets && reps && weight) {
      const newWorkout = {
        id: Date.now().toString(),
        exerciseName,
        sets,
        reps,
        weight,
      };
      setWorkouts([...workouts, newWorkout]);
      setExerciseName('');
      setSets('');
      setReps('');
      setWeight('');
    } else {
      Alert.alert('Error', 'Please fill out all fields');
    }
  };

  const handleClearWorkouts = () => {
    setWorkouts([]);
  };

  const renderItem = ({ item }) => (
    <View style={styles.workoutItem}>
      <Text style={styles.workoutText}>
        💪 {item.exerciseName} - {item.sets} sets x {item.reps} reps @ {item.weight} lbs
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Track Your Workouts</Text>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Exercise Name"
        value={exerciseName}
        onChangeText={setExerciseName}
      />
      <TextInput
        style={styles.input}
        placeholder="Sets"
        value={sets}
        onChangeText={setSets}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Reps"
        value={reps}
        onChangeText={setReps}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Weight (lbs)"
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
      />

      {/* Add Workout Button */}
      <TouchableOpacity style={styles.addButton} onPress={handleAddWorkout}>
        <Text style={styles.addButtonText}>Add Workout</Text>
      </TouchableOpacity>

      {/* Clear Workouts Button */}
      {workouts.length > 0 && (
        <TouchableOpacity style={styles.clearButton} onPress={handleClearWorkouts}>
          <Text style={styles.clearButtonText}>Clear All Workouts</Text>
        </TouchableOpacity>
      )}

      {/* Workouts List */}
      <FlatList
        data={workouts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.workoutsList}
      />

    <Button
        title="Back to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F4F4F4',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#333',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  addButton: {
    backgroundColor: '#FF9900',
    padding: 12,
    marginVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  clearButton: {
    backgroundColor: '#FF5555',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    alignItems: 'center',
  },
  clearButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  workoutItem: {
    backgroundColor: '#FFD700',
    padding: 12,
    marginVertical: 5,
    borderRadius: 8,
  },
  workoutText: {
    fontSize: 18,
    color: '#333',
  },
  workoutsList: {
    marginTop: 20,
  },
});

