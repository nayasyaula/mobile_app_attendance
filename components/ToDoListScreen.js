import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ToDoListScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar} />
      
      <View style={styles.header}>
        <View style={styles.dateContainer}>
          <Ionicons name="calendar-outline" size={24} color="black" style={styles.icon} />
          <Text style={styles.dateText}>Tue, 16 2024</Text>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.headerText}>All</Text>
          <Ionicons name="swap-vertical-outline" size={20} color="black" style={styles.headerIcon} />
          <Text style={styles.headerText}>Month</Text>
          <Ionicons name="caret-down-outline" size={20} color="black" style={styles.headerIcon} />
        </View>
      </View>

      {[...Array(9)].map((_, index) => (
        <View key={index} style={styles.taskContainer}>
          <View style={styles.taskTextContainer}>
            <Text style={styles.taskTitle}>membuat desain poster dan compro</Text>
            <Text style={styles.taskDate}>Wed, 17 July 2024</Text>
          </View>
          <Ionicons name="newspaper-outline" size={24} color="black" style={styles.taskIcon} />
          <View style={styles.line} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  statusBar: {
    height: 24,
    backgroundColor: '#f9f9f9',
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
  },
  icon: {
    marginRight: 8,
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 4,
  },
  headerIcon: {
    marginHorizontal: 4,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  taskTextContainer: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskDate: {
    fontSize: 14,
    color: '#666666',
  },
  taskIcon: {
    marginLeft: 8,
  },
  line: {
    height: 1,
    backgroundColor: '#cccccc',
    marginTop: 8,
    width: '100%',
  },
});

export default ToDoListScreen;