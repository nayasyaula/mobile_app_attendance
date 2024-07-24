import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.greeting}>Hello, Yosep Tomi!</Text>
          <Text style={styles.migInfo}>MIGINFO</Text>
          <Text style={styles.activitiesText}>Let's take a look at the activities and attendance here</Text>
          <View style={styles.dateContainer}>
            <Ionicons name="calendar-outline" size={24} color="black" style={styles.icon} />
            <Text style={styles.dateText}>Tue, 16 2024</Text>
          </View>
        </View>
        <View style={styles.headerRight}>
          <Ionicons name="notifications-outline" size={24} color="black" style={styles.icon} />
          <Image source={require('../assets/img/profil.jpeg')} style={styles.profilePic} />
        </View>
      </View>
      <View style={styles.cardContainer}>
      <LinearGradient
          colors={['#001D39', '#00509F']}
          style={styles.card}
        >
          <Text style={styles.cardTime}>13:57</Text>
          <Text style={styles.cardLocation}>Bogor, Indonesia</Text>
          <Text style={styles.cardLabel}>Hari Ini</Text>
        </LinearGradient>
        <View style={[styles.card, { backgroundColor: '#EDF3FF' }]}>
          <Text style={styles.cardTitle1}>Get In</Text>
          <Text style={styles.cardTime1}>08:00 PM</Text>
          <Text style={styles.cardStatus}>On Time</Text>
          <Ionicons name="newspaper" size={34} color="black" style={styles.cardIcon1} />
        </View>
        <View style={[styles.card, { backgroundColor: '#EDF3FF' }]}>
          <Text style={styles.cardTitle}>On Time</Text>
          <Text style={styles.cardSubtitleTop}>Completing</Text>
          <Text style={styles.cardSubtitleBottom}>the Task</Text>
          <Ionicons name="clipboard-outline" size={34} color="black" style={styles.cardIcon1} />
        </View>
        <View style={[styles.card, { backgroundColor: '#EDF3FF' }]}>
          <Text style={styles.cardTitle}>Get Out</Text>
          <Text style={styles.cardTime1}>05:00 PM</Text>
          <Text style={styles.cardStatus}>On Time</Text>
          <Ionicons name="newspaper" size={34} color="black" style={styles.cardIcon1} />
        </View>
        <Text style={styles.activitiesText}>Top of Your List!</Text>
        <View style={styles.line} />
        <Text style={styles.activitiesText1}>Recent Activity</Text>
        <Text style={styles.activitiesText1}>See More</Text>
        
        {/* New Section */}
        <View style={styles.dateSection}>
          <Text style={styles.dateText1}>Wed, 17 July 2024</Text>
          <View style={styles.incomingPresenceContainer}>
            <Text style={styles.incomingPresenceText}>Incoming Presence</Text>
            <Ionicons name="newspaper" size={34} color="black" style={styles.incomingIcon} />
          </View>
        </View>
        <View style={styles.dateSection}>
          <Text style={styles.dateText1}>Wed, 17 July 2024</Text>
          <View style={styles.incomingPresenceContainer}>
            <Text style={styles.incomingPresenceText}>Incoming Presence</Text>
            <Ionicons name="newspaper" size={34} color="black" style={styles.incomingIcon} />
          </View>
        </View>

      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home-outline" size={30} color="#666666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('')}>
          <Ionicons name="newspaper" size={30} color="#666666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('')}>
          <Ionicons name="finger-print-outline" size={30} color="#666666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('ToDoList')}>
          <Ionicons name="book-outline" size={30} color="#666666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons name="person-outline" size={30} color="#666666" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: 'white',  // Set background color to white for the wallpaper effect
        justifyContent: 'space-between',
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
  headerLeft: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  migInfo: {
    fontSize: 18,
    marginTop: 0,
  },
  activitiesText: {
    fontSize: 20,
    marginTop: 8,
    fontWeight: 'bold',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  icon: {
    marginHorizontal: 8,
  },
  dateText: {
    fontSize: 15,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -90,
    marginLeft: -90,
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft: 8,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: -2, // Adjust card position as needed
  },
  card: {
    width: '48%',
    height: 85, 
    // backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
    elevation: 3,
    alignItems: 'center',
  },
  cardTime: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'white',
    marginRight: 80,
  },
  cardTime1: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#666666',
    marginRight: 65,
    marginBottom: -7,
  },
  cardLocation: {
    fontSize: 12,
    marginTop: 8,
    marginRight: 45,
    color: 'white', // Text color for gradient card
  },
  cardLabel: {
    fontSize: 15,
    color: 'white', // Text color for gradient card
    marginTop: -40,
    marginRight: -100,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 86,
    color: '#666666',
  },
  cardTitle1: {
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 99,
    color: '#666666',
  },
  cardSubtitleTop: {
    fontSize: 17,
    marginTop: -2,
    fontWeight: 'bold',
    marginRight: 55,
    color: '#666666',
  },
  cardSubtitleBottom: {
    fontSize: 17,
    marginTop: -5,
    fontWeight: 'bold',
    marginRight: 75,
    color: '#666666',

  },
  cardStatus: {
    fontSize: 15,
    color: '#666666',
    marginTop: 3,
    marginRight: 81,
  },
  cardIcon1: {
    marginTop: -45,
    marginLeft: 'auto', // Adjust margin left to move icon to the right
  },
  cardIcon: {
    marginTop: 16,
  },
  line: {
    borderBottomWidth: 9,
    borderBottomColor: '#EDF3FF',
    width: '100%',
    marginTop: 8,
    marginBottom: 16, // Adjust as needed
  },
  activitiesText1: {
    fontSize: 18,
    marginTop: 8,
    fontWeight: 'bold',
    color: '#666666',
  },
  dateSection: {
    marginTop: 16,
  },
  dateText1: {
    marginLeft: 20,
  },
  incomingPresenceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginLeft: 'auto', 
  },
  incomingPresenceText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8, 
    color: '#00509F',
    marginLeft: 20,

  },
  incomingIcon: {
    marginLeft: 145, // Adjust margin left as needed
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

export default HomeScreen;
