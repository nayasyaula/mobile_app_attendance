import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';
import UserContext from '../components/UserContext';

export default function RegisterScreen({ navigation }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [telp, setTelp] = useState('');
    const [tempatLahir, setTempatLahir] = useState('');
    const [tanggalLahir, setTanggalLahir] = useState('');
    const [jenisKelamin, setJenisKelamin] = useState('');
    const [status, setStatus] = useState('');
    const [agama, setAgama] = useState('');
    const [alamat, setAlamat] = useState('');
    const { setUser } = useContext(UserContext);

    const handleRegister = async () => {
        if (password !== confirmPassword) {
            Alert.alert('Error', 'Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('http://192.168.1.110:8000/api/register', {
                name,
                email,
                password,
                password_confirmation: confirmPassword,
                telp,
                tempat_lahir: tempatLahir,
                tanggal_lahir: tanggalLahir,
                jenis_kelamin: jenisKelamin,
                status,
                agama,
                alamat,
            });

            console.log('API Response:', response.data); // Debugging log
            if (response.data.success) {
                Alert.alert('Success', 'Registration successful');
                setUser({ name, email }); // Set user data to context
                navigation.navigate('Profile');
            } else {
                Alert.alert('Error', response.data.message || 'Registration failed');
            }
        } catch (error) {
            console.error('API Error:', error); // Debugging log
            if (error.response && error.response.data && error.response.data.errors) {
                const errorMessage = Object.values(error.response.data.errors).flat().join('\n');
                Alert.alert('Error', errorMessage);
            } else {
                Alert.alert('Error', 'An error occurred during registration');
            }
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={require('../assets/logo2.png')} style={styles.image} />
            <Text style={styles.heading}>Create your account</Text>
            <TextInput
                placeholder="Name"
                style={styles.input}
                value={name}
                onChangeText={setName}
            />
            <TextInput
                placeholder="Email"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                placeholder="Password"
                style={styles.input}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TextInput
                placeholder="Confirm Password"
                style={styles.input}
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />
            <TextInput
                placeholder="Phone"
                style={styles.input}
                value={telp}
                onChangeText={setTelp}
            />
            <TextInput
                placeholder="Place of Birth"
                style={styles.input}
                value={tempatLahir}
                onChangeText={setTempatLahir}
            />
            <TextInput
                placeholder="Date of Birth (YYYY-MM-DD)"
                style={styles.input}
                value={tanggalLahir}
                onChangeText={setTanggalLahir}
            />
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={jenisKelamin}
                    style={styles.picker}
                    onValueChange={(itemValue) => setJenisKelamin(itemValue)}
                >
                    <Picker.Item label="Select Gender" value="" />
                    <Picker.Item label="Perempuan" value="perempuan" />
                    <Picker.Item label="Laki-laki" value="laki_laki" />
                </Picker>
            </View>
            <TextInput
                placeholder="Status"
                style={styles.input}
                value={status}
                onChangeText={setStatus}
            />
            <TextInput
                placeholder="Religion"
                style={styles.input}
                value={agama}
                onChangeText={setAgama}
            />
            <TextInput
                placeholder="Address"
                style={styles.input}
                value={alamat}
                onChangeText={setAlamat}
            />
            <Text style={styles.confirmText}>Confirm your password</Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={handleRegister}>
                <LinearGradient
                    colors={['#00509F', '#001D39']}
                    style={styles.gradient}
                >
                    <Text style={styles.buttonText}>Register</Text>
                </LinearGradient>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 20,
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
    pickerContainer: {
        width: '90%',
        height: 50,
        borderColor: '#00509F',
        borderWidth: 1,
        borderRadius: 30,
        marginBottom: 15,
        justifyContent: 'center',
    },
    picker: {
        width: '100%',
        height: '100%',
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
});
