import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

export default function PasswordOneScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="arrow-back" size={24} onPress={() => navigation.goBack()} />
                <Text style={styles.headerText}>Kata Sandi</Text>
            </View>
            <View style={styles.form}>
                <Text style={styles.label}>Kata Sandi</Text>
                <TextInput style={styles.input} placeholder="Masukan Email" />
                <Text style={styles.hint}>Masukkan sandi sebelumnya</Text>
            </View>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Password2')}>
                <LinearGradient
                    colors={['#00509F', '#001D39']}
                    style={styles.gradient}
                >
                    <Text style={styles.buttonText}>Lanjut</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
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
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        fontSize: 14,
        marginBottom: 10,
    },
    hint: {
        fontSize: 14,
        color: '#666',
    },
    buttonContainer: {
        width: '100%',
        borderRadius: 25,
        marginTop: 'auto',
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
