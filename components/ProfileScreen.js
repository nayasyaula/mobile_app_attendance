import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ProfileScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <LinearGradient colors={['#00509F', '#001D39']} style={styles.header}>
                <Image
                    source={require('../assets/profile.jpeg')} // Replace with the path to your profile picture
                    style={styles.profileImage}
                />
                <Text style={styles.name}>MUHAMAD ABDULAH</Text>
                <Text style={styles.school}>SMK WIKRAMA BOGOR</Text>
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
                        <Ionicons name="arrow-forward" size={20}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Password1')}>
                    <Ionicons name="key" size={24} color="#000" style={styles.menuIcon} />
                    <Text style={styles.menuText}>Kata sandi</Text>
                    <View style={{ flexDirection: 'row-reverse', flex: 1 }}>
                        <Ionicons name="arrow-forward" size={20} />
                    </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.logoutButton} onPress={() => { /* Add your logout logic here */ }}>
                <Text style={styles.logoutText}>Log out</Text>
            </TouchableOpacity>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Home')}>
                    <Ionicons name="home" size={30} color="#666666" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('AttendanceScreen')}>
                    <Ionicons name="newspaper" size={30} color="#666666" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Fingerprint')}>
                    <Ionicons name="barcode-sharp" size={30} color="#666666" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('ToDoList')}>
                    <Ionicons name="book" size={30} color="#666666" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Profile')}>
                    <Ionicons name="person" size={30} color="#000" />
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
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
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
        marginTop: -30,
        marginBottom: 20,
        alignItems: 'center'
    },
    statItem: {
        alignItems: 'center',
    },
    statValue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    statLabel: {
        fontSize: 13,
        color: '#808080',
    },
    body: {
        flex: 1,
        backgroundColor: '#EDF3FF',
        borderRadius: 15,
        marginHorizontal: 20,
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginBottom: 30,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    menuIcon: {
        marginRight: 10,
    },
    menuText: {
        fontSize: 16,
        color: '#000',
    },
    logoutButton: {
        backgroundColor: '#EDF3FF',
        paddingVertical: 10,
        borderRadius: 25,
        alignItems: 'center',
        marginHorizontal: 20,
        marginBottom: 40,
    },
    logoutText: {
        color: 'red',
        fontSize: 16,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
    },
    iconContainer: {
        alignItems: 'center',
    },
    separator: {
        width: 1,
        height: '50%',
        backgroundColor: '#d3d3d3',
        marginHorizontal: 10,
    },
});
