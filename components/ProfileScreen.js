import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';
import UserContext from '../components/UserContext';

export default function ProfileScreen({ navigation }) {
    const { user } = useContext(UserContext);
    const [profileImage, setProfileImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setProfileImage(result.assets[0].uri);
        }
    };

    return (
        <View style={styles.container}>
            <LinearGradient colors={['#00509F', '#001D39']} style={styles.header}>
                <View style={styles.profileImageContainer}>
                    <Image
                        source={profileImage ? { uri: profileImage } : require('../assets/profile.jpeg')} // Replace with the path to your profile picture
                        style={styles.profileImage}
                    />
                    <TouchableOpacity style={styles.editIcon} onPress={pickImage}>
                        <Ionicons name="pencil" size={20} color="black" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.name}>{user ? user.name : 'Nama tidak ditemukan'}</Text>
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
            <TouchableOpacity style={styles.logoutButton} onPress={() => { 'logout' }}>
                <Text style={styles.logoutText}>Log out</Text>
            </TouchableOpacity>
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
    profileImageContainer: {
        position: 'relative',
    },
    profileImage: {
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
        marginBottom: 40,
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
