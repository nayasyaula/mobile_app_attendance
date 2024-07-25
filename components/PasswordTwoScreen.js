import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PasswordTwoScreen = ({ navigation }) => {
    const [newPassword, setNewPassword] = useState('');
    const [resetPassword, setResetPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handlePasswordChange = () => {
        // Add logic to handle password change
        if (newPassword === resetPassword && resetPassword === confirmPassword) {
            // Password change logic
            console.log('Password changed successfully');
        } else {
            console.log('Passwords do not match');
        }
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.header}>
                    <Ionicons name="arrow-back" size={24} onPress={() => navigation.goBack()} />
                    <Text style={styles.headerText}>Kata Sandi</Text>
                </View>
                <View style={styles.form}>
                    <Text style={styles.label}>Kata Sandi Baru</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="kata sandi Baru"
                        value={newPassword}
                        onChangeText={setNewPassword}
                        secureTextEntry
                    />
                    <Text style={styles.label}>Atur Ulang</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Atur ulang"
                        value={resetPassword}
                        onChangeText={setResetPassword}
                        secureTextEntry
                    />
                    <Text style={styles.label}>Konfirmasi Kata Sandi</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Konfirmasi kata sandi"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry
                    />
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.buttonContainer} onPress={handlePasswordChange}>
                <LinearGradient
                    colors={['#00509F', '#001D39']}
                    style={styles.gradient}
                >
                    <Text style={styles.buttonText}>Ubah & Simpan</Text>
                </LinearGradient>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'space-between',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerText: {
        marginLeft: 120,
        fontSize: 18,
        fontWeight: 'bold',
    },
    form: {
        flex: 1,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    buttonContainer: {
        width: '100%',
        borderRadius: 25,
        marginBottom: 20,
        paddingHorizontal: 20,
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

export default PasswordTwoScreen;
