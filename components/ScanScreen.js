import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const ScanScreen = () => {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Not yet scanned')
  
  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status == 'granted')
    }) ()
  }
  //request camera
  useEffect(() => {
    askForCameraPermission();
  }, []);

  const handleBarcodeScanned = ({type, data}) => {
    setScanned(true);
    setText(data);
    console.log('Type: ' + type + '\nData: ' + data)
  }

  if (hasPermission === null) {
    return(
      <View style={styles.container}>
      <Text> Requesting for camera permission</Text>
      </View>
    )
  }

  if (hasPermission === false) {
    return(
      <View style={styles.container}>
      <Text style={{margin: 10}}>No access to camera</Text>
      <Button title={'Allow Camera'} onPress={()=> askForCameraPermission()}></Button>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.barcodebox}>
        <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarcodeScanned}
        style={{ height: 400, width: 400}}/>
            {/* <Text style={styles.text}>Scan</Text> */}
        </View>
        <Text style={styles.maintext}>{text}</Text>
        {scanned && (
          <TouchableOpacity style={styles.scanButton} onPress={() => setScanned(false)}>
            <Text style={styles.buttonText}>Scan again?</Text>
          </TouchableOpacity>
        )}        
        {/* <Ionicons name="qr-code-sharp" size={150} color="#00509F" /> */}
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home" size={28} color="#666666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('AttendanceScreen')}>
          <Ionicons name="newspaper" size={28} color="#666666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('ScanScreen')}>
          <Ionicons name="qr-code-sharp" size={28} color="#00509F" />
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
    justifyContent: 'space-between', // Ensure content and footer are spaced correctly
  },
  barcodebox: {
    height: 250,
    width: 220,
    overflow: 'hidden',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 70,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 30,
    color: 'black',
    marginBottom: 50,
  },
  scanButton: {
    backgroundColor: '#00509F',
    padding: 10,
    borderRadius: 25,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  permissionButton: {
    backgroundColor: '#00509F',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
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

export default ScanScreen;
