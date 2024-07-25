import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const ToDoListScreen = () => {
  const navigation = useNavigation();
  const [isMonthDropdownVisible, setMonthDropdownVisible] = useState(false);
  const [isAllDropdownVisible, setAllDropdownVisible] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState('Month'); // default text for the button
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [monthButtonLayout, setMonthButtonLayout] = useState(null);
  const [filterButtonLayout, setFilterButtonLayout] = useState(null);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const filters = [
    'Present'
  ];

  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
    setMonthDropdownVisible(false);
  };

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
    setAllDropdownVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.dateContainer}>
          <Ionicons name="calendar-outline" size={24} color="black" style={styles.icon} />
          <Text style={styles.dateText}>Tue, 16 July 2024</Text>
        </View>
        <View style={styles.filterContainer}>
          <TouchableOpacity
            style={styles.filterItem}
            onPress={() => setAllDropdownVisible(!isAllDropdownVisible)}
            onLayout={(event) => setFilterButtonLayout(event.nativeEvent.layout)}
          >
            <Text style={styles.filterText}>{selectedFilter}</Text>
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

      {/* Dropdown Menus */}
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
      {isAllDropdownVisible && filterButtonLayout && (
        <View style={[styles.dropdownContainer, {
          top: filterButtonLayout.y + filterButtonLayout.height + 40, 
          left: filterButtonLayout.x + monthButtonLayout.height + 110,
        }]}>
          {filters.map((filter, index) => (
            <TouchableOpacity key={index} style={styles.dropdownItem} onPress={() => handleFilterSelect(filter)}>
              <Text style={styles.dropdownText}>{filter}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Sections with flexGrow */}
      <ScrollView contentContainerStyle={styles.sections} >
        <TouchableOpacity style={styles.dateSection} onPress={() => navigation.navigate('DetailToDoList')}>
          <Text style={styles.incomingPresenceText}>Membuat desain poster dan compro</Text>
          <View style={styles.incomingPresenceContainer} >
            <Text style={styles.dateText1}>Wed, 17 July 2024</Text>
            <Ionicons name="newspaper" size={34} color="black" style={styles.incomingIcon}/>
          </View>
        </TouchableOpacity>
        <View style={styles.line1} />
        <TouchableOpacity style={styles.dateSection} onPress={() => navigation.navigate('DetailToDoList')}>
          <Text style={styles.incomingPresenceText}>Membuat desain poster dan compro</Text>
          <View style={styles.incomingPresenceContainer}>
            <Text style={styles.dateText1}>Wed, 17 July 2024</Text>
            <Ionicons name="newspaper" size={34} color="black" style={styles.incomingIcon} />
          </View>
        </TouchableOpacity>      
      </ScrollView>

      {/* Add Circle Button with Gradient + Icon */}
      <TouchableOpacity style={styles.circleButton} onPress={() => navigation.navigate('CreateToDoList')}>
        <LinearGradient
          colors={['#001D39', '#00509F']}
          style={styles.gradientCircle}
        >
          <Ionicons name="add" size={30} color="white" />
        </LinearGradient>
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
          <Ionicons name="book" size={28} color="#00509F" />
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
    justifyContent: 'space-evenly', // Distribute space evenly
  },
  filterText: {
    fontSize: 15,
    marginRight: 5,
    color: '#666666',
  },
  icon1: {
    marginHorizontal: 4,
  },
  iconBox: {
    width: 30,
    height: 30,
    borderRadius: 5,
    backgroundColor: '#00509F',
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
  incomingIcon: {
    marginLeft: 145,
    marginTop: -27,
  },
  circleButton: {
    position: 'absolute',
    right: 20,
    bottom: 80,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  gradientCircle: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
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

export default ToDoListScreen;
