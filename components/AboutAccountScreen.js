import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator, Modal, TextInput, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AboutAccountScreen({ navigation }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [editableField, setEditableField] = useState(null);
    const [editableValue, setEditableValue] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = await AsyncStorage.getItem('authToken');
                const response = await axios.get('http://192.168.1.110:8000/api/users/profile', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });
                setUser(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch user data:', error);
                setLoading(false);
            }
        };
        fetchUser();
    }, []);

    const handleEdit = (field, value) => {
        setEditableField(field);
        setEditableValue(value);
        setModalVisible(true);
    };

    const handleSave = async () => {
        const updatedUser = { ...user, [editableField]: editableValue };
        try {
            const token = await AsyncStorage.getItem('authToken');
            const response = await axios.put('http://192.168.1.110:8000/api/users/update', updatedUser, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            setUser(response.data);
            setModalVisible(false);
        } catch (error) {
            console.error('Failed to update user data:', error);
        }
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#00509F" />
            </View>
        );
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Ionicons name="arrow-back" size={24} onPress={() => navigation.goBack()} />
                    <Text style={styles.headerText}>Tentang Akun</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.title}>Informasi Pribadi</Text>
                </View>
                <View style={styles.card}>
                    <View style={styles.inputContainer}>
                        <Ionicons name="person" size={20} color="#666" style={styles.icon} />
                        <Text style={styles.label}>Nama Lengkap</Text>
                        <Text style={styles.value} onPress={() => handleEdit('name', user.name)}>{user.name}</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <Ionicons name="mail" size={20} color="#666" style={styles.icon} />
                        <Text style={styles.label}>Email</Text>
                        <Text style={styles.value} onPress={() => handleEdit('email', user.email)}>{user.email}</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <Ionicons name="call" size={20} color="#666" style={styles.icon} />
                        <Text style={styles.label}>No. Telepon</Text>
                        <Text style={styles.value} onPress={() => handleEdit('telp', user.telp || 'N/A')}>{user.telp || 'N/A'}</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <Ionicons name="calendar" size={20} color="#666" style={styles.icon} />
                        <Text style={styles.label}>Tanggal Lahir</Text>
                        <Text style={styles.value} onPress={() => handleEdit('tanggal_lahir', user.tanggal_lahir || 'N/A')}>{user.tanggal_lahir || 'N/A'}</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <Ionicons name="location" size={20} color="#666" style={styles.icon} />
                        <Text style={styles.label}>Tempat Lahir</Text>
                        <Text style={styles.value} onPress={() => handleEdit('tempat_lahir', user.tempat_lahir || 'N/A')}>{user.tempat_lahir || 'N/A'}</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <Ionicons name="transgender" size={20} color="#666" style={styles.icon} />
                        <Text style={styles.label}>Jenis Kelamin</Text>
                        <Text style={styles.value} onPress={() => handleEdit('jenis_kelamin', user.jenis_kelamin || 'N/A')}>{user.jenis_kelamin || 'N/A'}</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <Ionicons name="information-circle" size={20} color="#666" style={styles.icon} />
                        <Text style={styles.label}>Status</Text>
                        <Text style={styles.value} onPress={() => handleEdit('status', user.status || 'N/A')}>{user.status || 'N/A'}</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <Ionicons name="people" size={20} color="#666" style={styles.icon} />
                        <Text style={styles.label}>Agama</Text>
                        <Text style={styles.value} onPress={() => handleEdit('agama', user.agama || 'N/A')}>{user.agama || 'N/A'}</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <Ionicons name="home" size={20} color="#666" style={styles.icon} />
                        <Text style={styles.label}>Alamat</Text>
                        <Text style={styles.value} onPress={() => handleEdit('alamat', user.alamat || 'N/A')}>{user.alamat || 'N/A'}</Text>
                    </View>
                </View>

                <Modal visible={modalVisible} animationType="slide">
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Edit {editableField}</Text>
                        <TextInput
                            style={styles.modalInput}
                            value={editableValue}
                            onChangeText={setEditableValue}
                        />
                        <View style={styles.modalButtons}>
                            <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
                                <Text style={styles.modalButtonText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButton} onPress={handleSave}>
                                <Text style={styles.modalButtonText}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDF3FF',
    },
    scrollContainer: {
        flex: 1,
        padding: 15,
        backgroundColor: '#EDF3FF',  
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerText: {
        marginLeft: 110,
        fontSize: 18,
        fontWeight: 'bold',
    },
    section: {
        marginBottom: 20,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 30,
        padding: 20,
        marginBottom: 20,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 30,

    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    label: {
        fontSize: 14,
        marginBottom: 5,
        color: '#333',
        flex: 1,
    },
    value: {
        fontSize: 14,
        color: '#666',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        flex: 2,
    },
    icon: {
        marginRight: 10,
        color: '#00509F'
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    modalInput: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        marginBottom: 20,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    modalButton: {
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#00509F',
        alignItems: 'center',
        flex: 1,
        marginHorizontal: 5,
    },
    modalButtonText: {
        color: '#fff',
    },
});
