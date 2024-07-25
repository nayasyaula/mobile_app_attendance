import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.greeting}>Hello, Yosep Tomi!</Text>
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
      <ScrollView contentContainerStyle={styles.sections}>
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
          <Ionicons name="log-in" size={40} color="black" style={styles.cardIcon1} />
        </View>
        <View style={[styles.card, { backgroundColor: '#EDF3FF' }]}>
          <Text style={styles.cardTitle}>On Time</Text>
          <Text style={styles.cardSubtitleTop}>Completing</Text>
          <Text style={styles.cardSubtitleBottom}>the Task</Text>
          <Ionicons name="clipboard" size={30} color="black" style={styles.cardIcon1} />
        </View>
        <View style={[styles.card, { backgroundColor: '#EDF3FF' }]}>
          <Text style={styles.cardTitle}>Get Out</Text>
          <Text style={styles.cardTime1}>05:00 PM</Text>
          <Text style={styles.cardStatus}>On Time</Text>
          <Ionicons name="log-out" size={40} color="black" style={styles.cardIcon1} />
        </View>
      </View>
      <View style={styles.activitiesContainer}>
        <Text style={styles.activitiesText}>Top of Your List!</Text>
        <View style={styles.line} />
        <Text style={styles.activitiesText1}>Recent Activity</Text>
        <Text style={styles.activitiesText2}>See More</Text>
        
        {/* <View style={styles.line1} /> */}
        <View style={styles.dateSection}>
          <Text style={styles.incomingPresenceText}>Incoming Presence</Text>
          <View style={styles.incomingPresenceContainer}>
            <Text style={styles.dateText1}>Wed, 17 July 2024</Text>
            <Ionicons name="log-in" size={32} color="#00274F" style={styles.incomingIcon} onPress={() => navigation.navigate('DetailToDoList')}/>
          </View>
        </View>
        <View style={styles.line1} />
        <View style={styles.dateSection}>
          <Text style={styles.incomingPresenceText}>Incoming Presence</Text>
          <View style={styles.incomingPresenceContainer}>
            <Text style={styles.dateText1}>Wed, 17 July 2024</Text>
            <Ionicons name="log-out" size={30} color="#00274F" style={styles.incomingIcon} onPress={() => navigation.navigate('DetailToDoList')}/>
          </View>
        </View>
        <View style={styles.line1} />
        <View style={styles.dateSection}>
          <Text style={styles.incomingPresenceText}>Incoming Presence</Text>
          <View style={styles.incomingPresenceContainer}>
            <Text style={styles.dateText1}>Wed, 17 July 2024</Text>
            <Ionicons name="log-in" size={32} color="#00274F" style={styles.incomingIcon} onPress={() => navigation.navigate('DetailToDoList')}/>
          </View>
        </View>
        <View style={styles.line1} />
        <View style={styles.dateSection}>
          <Text style={styles.incomingPresenceText}>Incoming Presence</Text>
          <View style={styles.incomingPresenceContainer}>
            <Text style={styles.dateText1}>Wed, 17 July 2024</Text>
            <Ionicons name="log-out" size={30} color="#00274F" style={styles.incomingIcon} onPress={() => navigation.navigate('DetailToDoList')}/>
          </View>
        </View>
      </View>
      </ScrollView>
      
      <View style={styles.footer}>
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home" size={28} color="#00509F" />
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
    // justifyContent: 'space-between',
  },
  sections: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    flex:1,
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
    marginTop: 1,
    marginBottom: 8,
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
    marginTop: 1,
    marginBottom: 15,
    marginLeft: -90,
  },
  iconNotif:{
    marginHorizontal: 8,
    marginTop: 79,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginLeft: 8,
    // marginTop: 79,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  card: {
    width: '48%',
    height: 85,
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
    elevation: 3,
    alignItems: 'center',
    // flex: 1,
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
    color: '#000000',
    marginRight: 65,
    marginBottom: -7,
  },
  cardLocation: {
    fontSize: 12,
    marginTop: 8,
    marginRight: 45,
    color: 'white',
  },
  cardLabel: {
    fontSize: 15,
    color: 'white',
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
    color: '#000000',
  },
  cardSubtitleBottom: {
    fontSize: 17,
    marginTop: -5,
    fontWeight: 'bold',
    marginRight: 75,
    color: '#000000',
  },
  cardStatus: {
    fontSize: 15,
    color: '#666666',
    marginTop: 3,
    marginRight: 81,
  },
  cardIcon1: {
    marginTop: -45,
    marginLeft: 'auto',
  },
  line: {
    borderBottomWidth: 9,
    borderBottomColor: '#EDF3FF',
    width: '100%',
    marginTop: 8,
    marginBottom: 16,
  },
  activitiesContainer: {
    marginTop: 16,
    flex: 1,
  },
  activitiesText1: {
    fontSize: 18,
    marginTop: 4,
    marginBottom: 9,
    fontWeight: 'bold',
    color: '#000000',
  },
  activitiesText2: {
    marginTop: -31,
    marginBottom: 8,
    marginLeft: 290,
    fontSize: 14,
  },
  line1: {
    borderBottomWidth: 2,
    borderBottomColor: '#EDF3FF',
    width: '100%',
    marginBottom: 16,
  },
  dateSection: {
    marginTop: 8, // Increased margin to push the section lower
    marginBottom: 8,
  },
  dateText1: {
    marginRight: 45,
    fontWeight: 'bold',
    color: '#000000',
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
  // dateSection: {
  //   marginTop: 16,
  //   height: 50,
  // },
  // dateText1: {
  //   marginLeft: 20,
  // },
  // incomingPresenceContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   marginTop: 8,
  //   marginLeft: 'auto',
  // },
  // incomingPresenceText: {
  //   fontSize: 16,
  //   fontWeight: 'bold',
  //   marginRight: 59,
  //   color: '#00509F',
  //   marginLeft: 10,
  // },
  // incomingIcon: {
  //   marginLeft: 99,
  //   marginTop: -29,
  // },
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