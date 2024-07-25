import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function SuccessAttendanceInScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.dataRetrievalText}>Data Retrieval</Text>
            <Text style={styles.timeText}>08.02 PM</Text>
            <Text style={styles.dateText}>Wednesday, 17 July 2024</Text>
            <Image source={require('../assets/success-in.png')} style={styles.icon} />
            <Text style={styles.attendanceCompleteText}>Attendance is complete!</Text>
            <Text style={styles.descriptionText}>You have completed the attendance, continue tomorrow.</Text>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => { /* Add your navigation logic here */ }}>
                <LinearGradient
                    colors={['#00509F', '#001D39']}
                    style={styles.gradient}
                >
                    <Text style={styles.buttonText}>Back</Text>
                </LinearGradient>
            </TouchableOpacity>
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
    dataRetrievalText: {
        fontSize: 18,
        color: '#5F6166',
        marginBottom: 20,
    },
    timeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 5,
    },
    dateText: {
        fontSize: 14,
        color: '#00509F',
        marginBottom: 20,
    },
    icon: {
        width: 142,
        height: 142,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    attendanceCompleteText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    descriptionText: {
        width: '245px',
        height: '42px',
        fontSize: 14,
        color: '#000000',
        textAlign: 'center',
        marginBottom: 20,
    },
    buttonContainer: {
        width: '90%',
        borderRadius: 25,
    },
    gradient: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        paddingVertical: 15,
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        width: '349px',
        height: '39px',
        top: '756px',
        left: '22px',
        borderRadius: 20,
},
});
