import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const AttendanceScreen = () => {
    const navigation = useNavigation();
    const [isMonthDropdownVisible, setMonthDropdownVisible] = useState(false);
    const [selectedMonth, setSelectedMonth] = useState('Month'); // default text for the button
    const [monthButtonLayout, setMonthButtonLayout] = useState(null);

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const handleMonthSelect = (month) => {
        setSelectedMonth(month);
        setMonthDropdownVisible(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.dateContainer}>
                    <Ionicons name="calendar-outline" size={24} color="black" style={styles.icon} />
                    <Text style={styles.dateText}>Tue, 16 July 2024</Text>
                </View>
                <View style={styles.filterContainer}>
                <TouchableOpacity style={styles.filterItem}>
                    <Text style={styles.filterText}>All</Text>
                    <Ionicons name="swap-vertical-outline" size={20} color="black" style={styles.icon1} />
                </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.filterItem}
                        onPress={() => setMonthDropdownVisible(!isMonthDropdownVisible)}
                        onLayout={(event) => setMonthButtonLayout(event.nativeEvent.layout)}
                    >
                        <Text style={styles.filterText}>{selectedMonth}</Text>
                        <Ionicons name="arrow-down-outline" size={20} color="#666666" style={styles.icon1} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterItem1}>
                        <View style={styles.iconBox}>
                            <Ionicons name="download" size={20} color="white" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.line} />

            {/* Dropdown Menu */}
            {isMonthDropdownVisible && monthButtonLayout && (
                <View style={[styles.dropdownContainer, {
                    top: monthButtonLayout.y + monthButtonLayout.height + 40, 
                    left: monthButtonLayout.x + monthButtonLayout.height + 110,
                }]}>
                    {months.map((month, index) => (
                        <TouchableOpacity key={index} style={styles.dropdownItem} onPress={() => handleMonthSelect(month)}>
                            <Text style={styles.dropdownText}>{month}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
      
            {/* Sections with flexGrow */}
            <ScrollView contentContainerStyle={styles.sections}>
                <View style={styles.dateSection}>
                    <Text style={styles.incomingPresenceText}>Incoming Presence</Text>
                    <View style={styles.incomingPresenceContainer}>
                        <Text style={styles.dateText1}>Wed, 17 July 2024</Text>
                        <Ionicons name="log-in" size={32} color="#00274F" style={styles.incomingIcon} />
                    </View>
                </View>
                <View style={styles.line1} />
                <View style={styles.dateSection}>
                    <Text style={styles.incomingPresenceText}>Incoming Presence</Text>
                    <View style={styles.incomingPresenceContainer}>
                        <Text style={styles.dateText1}>Wed, 17 July 2024</Text>
                        <Ionicons name="log-in" size={32} color="#00274F" style={styles.incomingIcon}/>
                    </View>
                </View>
                <View style={styles.line1} />
                <View style={styles.dateSection} >
                    <Text style={styles.incomingPresenceText2}>Incoming Presence</Text>
                    <View style={styles.incomingPresenceContainer}>
                        <Text style={styles.dateText1}>Wed, 17 July 2024</Text>
                        <Ionicons name="log-in" size={32} color="#292929" style={styles.incomingIcon}/>
                    </View>
                </View>
                <View style={styles.line1} />
                <View style={styles.dateSection}>
                    <Text style={styles.incomingPresenceText}>Incoming Presence</Text>
                    <View style={styles.incomingPresenceContainer}>
                        <Text style={styles.dateText1}>Wed, 17 July 2024</Text>
                        <Ionicons name="log-in" size={32} color="#00274F" style={styles.incomingIcon}/>
                    </View>
                </View>
                <View style={styles.line1} />
                <View style={styles.dateSection}>
                    <Text style={styles.incomingPresenceText}>Incoming Presence</Text>
                    <View style={styles.incomingPresenceContainer}>
                        <Text style={styles.dateText1}>Wed, 17 July 2024</Text>
                        <Ionicons name="log-in" size={32} color="#00274F" style={styles.incomingIcon}/>
                    </View>
                </View>
            </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home" size={28} color="#666666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('AttendanceScreen')}>
          <Ionicons name="newspaper" size={28} color="#00509F" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('ScanScreen')}>
          <Ionicons name="qr-code-sharp" size={29} color="#666666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('ToDoList')}>
          <Ionicons name="book" size={28} color="#666666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person" size={28} color="#666666" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -38,
    },
    icon: {
        marginHorizontal: 8,
    },
    dateText: {
        fontSize: 15,
    },
    filterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 24,
        marginBottom: 5,
        flex: 1, // Make filterContainer flexible
        justifyContent: 'space-evenly', // Distribute space evenly
    },
    filterItem: {
        flexDirection: 'row',
        alignItems: 'center',
        flexShrink: 1, // Allow item to shrink if necessary
        marginHorizontal: 4,
    },
    filterText: {
        fontSize: 15,
        color: '#000000',
        fontWeight: 'bold',
    },
    icon1: {
        marginHorizontal: 4,
    },
    iconBox: {
        width: 30,
        height: 30,
        borderRadius: 5, // set borderRadius to a value less than half of width/height to create rounded corners
        backgroundColor: '#00509F', // Set background color to match design
        justifyContent: 'center',
        alignItems: 'center',
    },
    line: {
        borderBottomWidth: 8,
        borderBottomColor: '#EDF3FF',
        width: '100%',
        marginBottom: 16,
        marginTop: -9,
    },
    sections: {
        flexGrow: 1,
        justifyContent: 'flex-start',
    },
    line1: {
        borderBottomWidth: 2,
        borderBottomColor: '#EDF3FF',
        width: '100%',
        marginBottom: 16,
    },
    dateSection: {
        marginBottom: 16,
    },
    dateText1: {
        marginRight: 45,
        color: '#000000',
        fontWeight: 'bold',
    },
    incomingPresenceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
        marginLeft: 'auto',
    },
    incomingPresenceText: {
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 13,
        color: '#00509F',
        marginLeft: 10,
    },
    incomingPresenceText2 : {
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 13,
        color: '#FF0000',
        marginLeft: 10,
    },
    incomingIcon: {
        marginLeft: 145,
        marginTop: -27,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    iconContainer: {
        alignItems: 'center',
    },
    dropdownContainer: {
        position: 'absolute',
        top: 80, // Adjust this value to position the dropdown below the "Month" text
        left: 210, // Adjust this value to position the dropdown to the right of the "Month" text
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        elevation: 4,
        width: 150,
        zIndex: 1000,
        backgroundColor: '#00274F',
    },
    dropdownItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    dropdownText: {
        fontSize: 15,
        color: 'white',
    },
});

export default AttendanceScreen;
