import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, RefreshControl, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileScreen({ navigation }) {
    const [profile, setProfile] = useState(null);
    const [authToken, setAuthToken] = useState(null);
    const [refreshing, setRefreshing] = useState(false);
    const [user, setUser] = useState({ name: '', sekolah: '', profile: '' });

    useEffect(() => {
        const getTokenAndFetchUser = async () => {
            const token = await AsyncStorage.getItem('authToken');
            setAuthToken(token);
            fetchUser(token);
        };
        getTokenAndFetchUser();
    }, []);

    const fetchUser = async (token) => {
        try {
            const response = await axios.get('http://192.168.1.110:8000/api/users/profile', {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`,
                },
            });
            // console.log('User data fetched:', response);
            setUser(response.data);
            if (response.data.profile) {
                setProfile(response.data.profile);
            }
        } catch (error) {
            console.error('Failed to fetch user data:', error);
        }
    };

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        fetchUser(authToken).finally(() => setRefreshing(false));
    }, [authToken]);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            const uri = result.assets[0].uri;
            setProfile(uri);
            uploadImage(uri);
        }
    };

    const uploadImage = async (uri) => {
        const formData = new FormData();
        formData.append('profile_image', {
            uri,
            name: 'profile.jpg',
            type: 'image/jpeg',
        });

        try {
            const response = await axios.post('http://192.168.1.110:8000/api/users/profile-image', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${authToken}`,
                },
            });
            console.log('Response: ', response.data);
            fetchUser(authToken); // Refresh user data to update profile image
        } catch (error) {
            console.error('Upload failed:', error);
            Alert.alert('Upload Error', 'An error occurred while uploading the image. Please try again.');
        }
    };

    const handleLogout = async () => {
        try {
            const response = await axios.post('http://192.168.1.110:8000/api/logout', {}, {
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                },
            });

            if (response.data.message === 'Successfully logged out') {
                await AsyncStorage.removeItem('authToken');
                navigation.navigate('Login');
            } else {
                Alert.alert('Error', 'An error occurred while logging out.');
            }
        } catch (error) {
            console.error('Logout failed:', error.response ? error.response.data : error.message);
            Alert.alert('Error', 'An error occurred while logging out. Please try again.');
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                <LinearGradient colors={['#00509F', '#001D39']} style={styles.header}>
                    <View style={styles.profileContainer}>
                        <Image
                            source={user?.profile ? { uri: user.profile } : require('../assets/img/profil.jpeg')}
                            style={styles.profile}
                        />
                        <TouchableOpacity style={styles.editIcon} onPress={pickImage}>
                            <Ionicons name="pencil" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.name}>{user.name || 'Nama tidak ditemukan'}</Text>
                    <Text style={styles.school}>{user.sekolah || 'Not found'}</Text>
                </LinearGradient>
                <View style={styles.statsContainer}>
                    <View style={styles.statItem}>
                        <Text style={styles.statLabel}>Time of</Text>
                        <Text style={styles.statValue}>02</Text>
                    </View>
                    <View style={styles.separator} />
                    <View style={styles.statItem}>
                        <Text style={styles.statLabel}>Attendance</Text>
                        <Text style={styles.statValue}>31</Text>
                    </View>
                    <View style={styles.separator} />
                    <View style={styles.statItem}>
                        <Text style={styles.statLabel}>Overtime</Text>
                        <Text style={styles.statValue}>05</Text>
                    </View>
                </View>
                <View style={styles.body}>
                    <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('AboutAcc')}>
                        <Ionicons name="person" size={24} color="#000" style={styles.menuIcon} />
                        <Text style={styles.menuText}>Tentang akun</Text>
                        <View style={{ flexDirection: 'row-reverse', flex: 1 }}>
                            <Ionicons name="arrow-forward" size={20} color={'#6B6B6B'} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Password1')}>
                        <Ionicons name="key" size={24} color="#000" style={styles.menuIcon} />
                        <Text style={styles.menuText}>Kata sandi</Text>
                        <View style={{ flexDirection: 'row-reverse', flex: 1 }}>
                            <Ionicons name="arrow-forward" size={20} color={'#6B6B6B'} />
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                    <Text style={styles.logoutText}>Log out</Text>
                </TouchableOpacity>
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Home')}>
                    <Ionicons name="home" size={28} color="#666666" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('AttendanceScreen')}>
                    <Ionicons name="newspaper" size={28} color="#666666" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('ScanScreen')}>
                    <Ionicons name="qr-code-sharp" size={29} color="#666666" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('ToDoList')}>
                    <Ionicons name="book" size={28} color="#666666" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Profile')}>
                    <Ionicons name="person" size={28} color="#00509F" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 40,
        paddingTop: 80,
    },
    profileContainer: {
        position: 'relative',
    },
    profile: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    editIcon: {
        position: 'absolute',
        bottom: 5,
        right: 5,
        backgroundColor: '#EDF3FF',
        borderRadius: 20,
        padding: 4,
    },
    name: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    school: {
        fontSize: 14,
        color: '#fff',
        marginBottom: 20,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#fff',
        paddingVertical: 10,
        marginHorizontal: 20,
        borderRadius: 10,
        marginTop: -40,
        marginBottom: 20,
        alignItems: 'center'
    },
    statItem: {
        alignItems: 'center',
        marginTop: 10
    },
    statValue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    statLabel: {
        fontSize: 13,
        color: '#9FA0A4',
        fontWeight: 'bold',
    },
    body: {
        flex: 1,
        backgroundColor: '#EDF3FF',
        borderRadius: 15,
        marginHorizontal: 20,
        paddingHorizontal: 20,
        paddingVertical: 80,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        backgroundColor: '#fff',
        marginTop: 10,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    menuIcon: {
        marginRight: 10,
        color: '#6B6B6B'
    },
    menuText: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
    },
    logoutButton: {
        backgroundColor: '#EDF3FF',
        paddingVertical: 10,
        borderRadius: 25,
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 50,
    },
    logoutText: {
        color: '#FF0000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 18,
        backgroundColor: '#fff',
    },
    iconContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    separator: {
        width: 1,
        height: '50%',
        backgroundColor: '#d3d3d3',
        marginHorizontal: 10,
    },
});
