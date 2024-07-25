import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const CreateToDoList = () => {
  const navigation = useNavigation(); // Mendapatkan objek navigation
  const [content, setContent] = useState('');
  const [description, setDescription] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tambah ToDoList</Text>
      
      <View style={styles.formContainer}>
        <Text style={styles.label}>Content</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter content"
          value={content}
          onChangeText={setContent}
        />

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter description"
          value={description}
          onChangeText={setDescription}
        />

        <Text style={styles.label}>Date</Text>
        <TouchableOpacity style={styles.dateButton} disabled>
          <Text style={styles.dateText}>Select a date</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.createButton}
        onPress={() => navigation.navigate('ToDoList')} // Navigasi ke ToDoList
      >
        <LinearGradient
          colors={['#001D39', '#00509F']}
          style={styles.gradientButton}
        >
          <Text style={styles.buttonText}>Create</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20, // Geser teks ke atas
    marginBottom: 30, // Tambahkan jarak antara teks dan form
    color: 'black',
    textAlign: 'center',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 45,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 10,
    marginBottom: 16,
    fontSize: 16,
  },
  dateButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 10,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  dateText: {
    fontSize: 16,
    color: '#666666',
  },
  createButton: {
    alignSelf: 'center',
    borderRadius: 25,
  },
  gradientButton: {
    width: 330, // Memperbesar lebar button
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CreateToDoList;
