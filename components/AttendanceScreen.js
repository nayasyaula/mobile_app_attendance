import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const ToDoListScreen = () => {
  const navigation = useNavigation();

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
          <TouchableOpacity style={styles.filterItem}>
            <Text style={styles.filterText}>Month</Text>
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

      {/* Sections with flexGrow */}
      <ScrollView contentContainerStyle={styles.sections}>
        <View style={styles.dateSection}>
          <Text style={styles.incomingPresenceText}>Incoming Presence</Text>
          <View style={styles.incomingPresenceContainer}>
            <Text style={styles.dateText1}>Wed, 17 July 2024</Text>
            <Ionicons name="newspaper" size={34} color="black" style={styles.incomingIcon} onPress={() => navigation.navigate('DetailToDoList')} />
          </View>
        </View>
        <View style={styles.line1} />
        <View style={styles.dateSection}>
          <Text style={styles.incomingPresenceText}>Incoming Presence</Text>
          <View style={styles.incomingPresenceContainer}>
            <Text style={styles.dateText1}>Wed, 17 July 2024</Text>
            <Ionicons name="newspaper" size={34} color="black" style={styles.incomingIcon} onPress={() => navigation.navigate('DetailToDoList')}/>
          </View>
        </View>
        <View style={styles.line1} />
        <View style={styles.dateSection}>
          <Text style={styles.incomingPresenceText}>Incoming Presence</Text>
          <View style={styles.incomingPresenceContainer}>
            <Text style={styles.dateText1}>Wed, 17 July 2024</Text>
            <Ionicons name="newspaper" size={34} color="black" style={styles.incomingIcon} onPress={() => navigation.navigate('DetailToDoList')}/>
          </View>
        </View>
        <View style={styles.line1} />
        <View style={styles.dateSection}>
          <Text style={styles.incomingPresenceText}>Incoming Presence</Text>
          <View style={styles.incomingPresenceContainer}>
            <Text style={styles.dateText1}>Wed, 17 July 2024</Text>
            <Ionicons name="newspaper" size={34} color="black" style={styles.incomingIcon} onPress={() => navigation.navigate('DetailToDoList')}/>
          </View>
        </View>
        <View style={styles.line1} />
        <View style={styles.dateSection}>
          <Text style={styles.incomingPresenceText}>Incoming Presence</Text>
          <View style={styles.incomingPresenceContainer}>
            <Text style={styles.dateText1}>Wed, 17 July 2024</Text>
            <Ionicons name="newspaper" size={34} color="black" style={styles.incomingIcon} onPress={() => navigation.navigate('DetailToDoList')}/>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home" size={30} color="#666666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('')}>
          <Ionicons name="newspaper" size={30} color="#666666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('ScanScreen')}>
          <Ionicons name="barcode-sharp" size={30} color="#666666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('ToDoList')}>
          <Ionicons name="book" size={30} color="#666666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person" size={30} color="#666666" />
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
    marginTop: -18,
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
    marginTop: 25,
  },
  filterItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
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
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  iconContainer: {
    alignItems: 'center',
  },
});

export default ToDoListScreen;
