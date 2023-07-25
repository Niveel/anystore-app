import {React, useState} from 'react';
import {View, SafeAreaView, TextInput,  StyleSheet, Image, Text, TouchableOpacity, Button} from 'react-native';
import Auth from "../Auth";
import Home from "./Home";
import Signup from './Signup';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    function login() {
        axios.post('https://www.niveel.com/api/login/', {
         username: username,
            password: password
        }).then((response) => {
            var data = response.data
            data.isLogin = true
            

var auth = JSON.stringify(data);
AsyncStorage.setItem('auth', auth)
.then(() => {
    console.log('It was saved successfully');
    navigation.navigate('Home');

})
.catch(() => {
    console.log('There was an error saving the product');
});
        }).catch((error) => {
            console.log(error);
        });
    }
    






   return (
        <View style={styles.container}>
            <TextInput style={styles.textInput}             placeholder="Email/Username"
            onChangeText={setUsername}
            />
            <TextInput style={styles.textInput}
            placeholder="Password"
    
            onChangeText={setPassword}
            secureTextEntry
            />
            <Button style={styles.button}
            title="Login"
            onPress={login}
            />
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>    
            <Text>Forgot Password?</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text >Don't have an account? Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
    } 
    const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8,
    },
    button: {
        width: '90%',
        marginTop: 8,
    },

}

);

    export default Login;