import {React} from 'react';
import {View, Text, StyleSheet} from 'react-native';

function About() {


    return (
        <View style={styles.container}>
            <Text style={styles.text}>About</Text>
        </View>
    );
}

const styles = StyleSheet.create({  
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        },
about: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    },
});

export default About;