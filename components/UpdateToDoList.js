import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRoute, useNavigation } from '@react-navigation/native';
import moment from 'moment';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UpdateToDoList = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { todo } = route.params || {};

  const [title, setTitle] = useState(todo?.content || '');
  const [description, setDescription] = useState(todo?.keterangan || '');
  const [status, setStatus] = useState(todo?.status || 'Pending');
  const [pesan, setPesan] = useState(todo?.pesan || '');
  const [date, setDate] = useState(todo?.date ? moment(todo.date).format('YYYY-MM-DD') : '');
  const [loading, setLoading] = useState(false);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [isEditingDate, setIsEditingDate] = useState(false);

  useEffect(() => {
    if (todo) {
      setTitle(todo.content);
      setDescription(todo.keterangan);
      setPesan(todo.pesan);
      setDate(todo.date ? moment(todo.date).format('YYYY-MM-DD') : '');
      setStatus(todo.status);
    }
  }, [todo]);

  const formatDate = (dateString) => {
    return moment(dateString).format('ddd, DD MMMM YYYY');
  };

  const saveUpdates = async () => {
    setLoading(true);
    try {
      const token = await AsyncStorage.getItem('authToken');
      if (!token) {
        Alert.alert('Error', 'Please log in first');
        navigation.navigate('Login');
        return;
      }

      const response = await axios.put(`http://192.168.0.122:8000/api/todolist/${todo.id}/update`, {
        content: title,
        status,
        date: moment(date).format('YYYY-MM-DD'),
        keterangan: description,
        pesan: pesan,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        Alert.alert('Success', 'To-Do List successfully updated');
        navigation.goBack();
      } else {
        throw new Error('Failed to update To-Do List');
      }
    } catch (error) {
      console.error('Error updating To-Do List:', error.response ? error.response.data : error.message);
      Alert.alert('Error', 'Failed to update To-Do List. Please Try Again.');
    } finally {
      setLoading(false);
    }
  };

  const toggleStatus = () => {
    setStatus(status === 'Pending' ? 'Completed' : 'Pending');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {isEditingTitle ? (
          <TextInput
            style={styles.titleInput}
            value={title}
            onChangeText={setTitle}
            onBlur={() => setIsEditingTitle(false)}
            autoFocus
          />
        ) : (
          <TouchableOpacity onPress={() => setIsEditingTitle(true)}>
            <Text style={styles.title}>{title}</Text>
          </TouchableOpacity>
        )}
      </View>
      {isEditingDate ? (
        <TextInput
          style={styles.dateInput}
          value={date}
          onChangeText={setDate}
          onBlur={() => setIsEditingDate(false)}
          keyboardType="numeric"
          placeholder="YYYY-MM-DD"
          autoFocus
        />
      ) : (
        <TouchableOpacity onPress={() => setIsEditingDate(true)}>
          <Text style={styles.date}>{date ? formatDate(date) : 'Tanggal tidak tersedia'}</Text>
        </TouchableOpacity>
      )}
      <LinearGradient colors={['#00509F', '#001D39']} style={styles.line} />

      {isEditingDescription ? (
        <TextInput
          style={styles.descriptionInput}
          value={description}
          onChangeText={setDescription}
          onBlur={() => setIsEditingDescription(false)}
          multiline
          autoFocus
        />
      ) : (
        <TouchableOpacity onPress={() => setIsEditingDescription(true)}>
          <Text style={styles.description}>{description}</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity
        style={[styles.statusButton, status === 'Completed' && styles.completedButton]}
        onPress={toggleStatus}
      >
        <Text style={styles.statusButtonText}>{status}</Text>
      </TouchableOpacity>

      {/* Pesan ditampilkan menggunakan Text */}
      <View style={styles.pesanContainer}>
        <Text style={styles.pesanLabel}>Pesan : {pesan}</Text>
        {/* <Text style={styles.pesan}>{pesan}</Text> */}
      </View>

      <TouchableOpacity
        style={styles.createButton}
        onPress={saveUpdates}
        disabled={loading}
      >
        <LinearGradient
          colors={['#001D39', '#00509F']}
          style={styles.gradientButton}
        >
          <Text style={styles.buttonText}>
            {loading ? 'Menyimpan...' : 'Simpan'}
          </Text>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  titleInput: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00509F',
    borderBottomWidth: 1,
    borderBottomColor: '#00509F',
  },
  date: {
    fontSize: 16,
    color: '#00509F',
    marginBottom: 16,
  },
  dateInput: {
    fontSize: 16,
    color: '#00509F',
    borderBottomWidth: 1,
    borderBottomColor: '#00509F',
    marginBottom: 16,
  },
  line: {
    height: 2,
    width: '100%',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: 'black',
    marginBottom: 16,
  },
  descriptionInput: {
    fontSize: 16,
    color: 'black',
    borderBottomWidth: 1,
    borderBottomColor: '#00509F',
    marginBottom: 16,
  },
  pesanContainer: {
    marginBottom: 16,
  },
  pesanLabel: {
    fontSize: 16,
    color: '#00509F',
    marginBottom: 4,
  },
  pesan: {
    fontSize: 16,
    color: 'black',
  },
  statusButton: {
    backgroundColor: '#D3D3D3',
    paddingVertical: 6,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 16,
    width: 150,
    alignSelf: 'flex-start',
  },
  completedButton: {
    backgroundColor: '#00509F',
  },
  statusButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  createButton: {
    alignSelf: 'center',
    borderRadius: 25,
    position: 'absolute',
    bottom: 20,
  },
  gradientButton: {
    width: 330,
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

export default UpdateToDoList;
