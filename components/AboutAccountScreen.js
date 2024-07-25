import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

export default function AboutAccountScreen({ navigation }) {
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.header}>
                    <Ionicons name="arrow-back" size={24} onPress={() => navigation.goBack()} />
                    <Text style={styles.headerText}>Tentang Akun</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.title}>Informasi Pribadi</Text>
                    <Text style={styles.subtitle}>Masukkan input sesuai dengan profil pribadi</Text>
                </View>
                <View style={styles.form}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Nama Lengkap <Text style={styles.required}>*</Text></Text>
                        <TextInput style={styles.input} placeholder="Masukkan nama lengkap" />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>No.Telepon <Text style={styles.required}>*</Text></Text>
                        <TextInput style={styles.input} placeholder="Nomor induk kependudukan" />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Tanggal Lahir</Text>
                        <TextInput style={styles.input} placeholder="Masukkan tanggal" />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Tempat Lahir</Text>
                        <TextInput style={styles.input} placeholder="Bogor" />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Jenis Kelamin</Text>
                        <TextInput style={styles.input} placeholder="Pilih" />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Status</Text>
                        <TextInput style={styles.input} placeholder="Status anda saat ini" />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Agama</Text>
                        <TextInput style={styles.input} placeholder="Pilih" />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Alamat Tempat Tinggal</Text>
                        <TextInput style={styles.input} placeholder="Masukkan Kata sandi" />
                    </View>
                </View>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => { /* Add your navigation logic here */ }}>
                    <LinearGradient
                        colors={['#00509F', '#001D39']}
                        style={styles.gradient}
                    >
                        <Text style={styles.buttonText}>Tambah</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContainer: {
        padding: 20,
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
    subtitle: {
        fontSize: 14,
        color: '#666',
    },
    form: {
        marginBottom: 20,
    },
    inputContainer: {
        marginBottom: 15,
    },
    label: {
        fontSize: 14,
        marginBottom: 5,
    },
    required: {
        color: 'red',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        fontSize: 14,
    },
    buttonContainer: {
        width: '100%',
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
