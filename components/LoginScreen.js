import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://192.168.0.122:8000/api/login', {
                email,
                password,
            });
    
            const { token } = response.data;
            await AsyncStorage.setItem('authToken', token);
    
            // Verify stored token
            const storedToken = await AsyncStorage.getItem('authToken');
            console.log('Stored Token:', storedToken);
    
            navigation.navigate('Home');
        } catch (error) {
            console.error('Error details:', error.response ? error.response.data : error.message);
            
            if (error.response && error.response.status === 401) {
                Alert.alert('Login Failed', 'Session expired, please login again');
                await AsyncStorage.removeItem('authToken');
                navigation.navigate('Login');
            } else {
                Alert.alert('Login Failed', 'Invalid email or password');
            }
        }
    };
    
    
    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo2.png')} style={styles.image} />
            <Text style={styles.heading}>Welcome back!</Text>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                autoCompleteType="email"
                keyboardType="email-address"
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                style={styles.input}
                secureTextEntry
            />
            <Text style={styles.confirmText}>Please enter your credentials</Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
                <LinearGradient
                    colors={['#00509F', '#001D39']}
                    style={styles.gradient}
                >
                    <Text style={styles.buttonText}>Log in</Text>
                </LinearGradient>
            </TouchableOpacity>
            <Text style={styles.registerText}>
                Don't have an account? 
                <Text style={styles.registerLink} onPress={() => navigation.navigate('Register')}> Sign up</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    heading: {
        fontSize: 17,
        fontWeight: '600',
        marginBottom: 20,
        lineHeight: 21,
        letterSpacing: -0.32,
        color: '#00000099',
    },
    input: {
        width: '90%',
        height: 50,
        borderColor: '#00509F',
        borderWidth: 1,
        borderRadius: 30,
        paddingHorizontal: 15,
        marginBottom: 15,
    },
    confirmText: {
        alignSelf: 'flex-start',
        marginLeft: 25,
        marginBottom: 20,
        color: '#666',
    },
    buttonContainer: {
        width: '90%',
        borderRadius: 25,
        marginTop: 10,
    },
    gradient: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        paddingVertical: 15,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    registerText: {
        marginTop: 20,
        color: '#666',
    },
    registerLink: {
        color: '#00509F',
        fontWeight: 'bold',
    },
});
