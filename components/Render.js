//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import IMCApp from './IMCApp';

// create a component
class Render extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>Calculadora de IMC</Text>
                <IMCApp/>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        fontSize:27,
        fontWeight:700,
        color:'black',
        marginBottom:25,
        textTransform:'uppercase'
    },
});

//make this component available to the app
export default Render;
