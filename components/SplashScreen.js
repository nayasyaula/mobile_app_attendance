import React, { useEffect, useRef } from 'react';
import { Animated, Image, StyleSheet, View } from 'react-native';
import { StackActions } from '@react-navigation/native';

export default function SplashScreen({ navigation }) {
    const scaleValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // Animasi pop-up
        Animated.spring(scaleValue, {
            toValue: 1,
            friction: 5,
            useNativeDriver: true,
        }).start();

        // Navigasi ke layar Landing setelah 3 detik
        const timer = setTimeout(() => {
            navigation.dispatch(StackActions.replace('Landing'));
        }, 3000);

        return () => clearTimeout(timer); // Bersihkan timeout saat komponen unmount
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Animated.Image
                source={require('../assets/logo-one.png')} 
                style={[styles.image, { transform: [{ scale: scaleValue }] }]} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#fff', 
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
});