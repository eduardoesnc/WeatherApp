import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

export default function Menu(){

    const navigation = useNavigation();

    return(
        <TouchableOpacity style={styles.container} onPress={() => navigation.openDrawer()}>
            <Feather
                name="menu"
                size={36}
                color="#373737"
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        zIndex: 9,
        width: 70,
        height: 70,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        left: 10,
        top: 40,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset:{
            height: 3,
            width: 1,
        }

    },
  });
  