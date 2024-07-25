import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const DetailToDoList = () => {
  const navigation = useNavigation();
  const [title, setTitle] = useState('Membuat desain poster dan compro');
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [description, setDescription] = useState(
    'Poster yang efektif adalah poster yang mampu menarik perhatian, menyampaikan pesan dengan jelas, dan mendorong tindakan dari audiens yang ditargetkan. Berikut adalah beberapa elemen kunci yang harus dipertimbangkan saat membuat deskripsi desain poster.'
  );
  const [isEditingDescription, setIsEditingDescription] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {isEditingTitle ? (
          <TextInput style={styles.titleInput} value={title} onChangeText={setTitle} onBlur={() => setIsEditingTitle(false)} autoFocus/>
        ) : (
          <TouchableOpacity onPress={() => setIsEditingTitle(true)}>
            <Text style={styles.title}>{title}</Text>
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.date}>Wed, 17 July 2024</Text>
      <LinearGradient colors={['#00509F', '#001D39']} style={styles.line} />
      {isEditingDescription ? (
        <TextInput style={styles.descriptionInput} value={description} onChangeText={setDescription} onBlur={() => setIsEditingDescription(false)} multiline autoFocus/>
      ) : (
        <TouchableOpacity onPress={() => setIsEditingDescription(true)}>
          <Text style={styles.description}>{description}</Text>
        </TouchableOpacity>
      )}
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
    color: '#00509F',
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
  line: {
    height: 2,
    width: '100%',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: 'black',
  },
  descriptionInput: {
    fontSize: 16,
    color: 'black',
    borderBottomWidth: 1,
    borderBottomColor: '#00509F',
  },
});

export default DetailToDoList;