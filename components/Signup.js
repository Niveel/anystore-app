import {View, Button, SafeAreaView, TextInput,  StyleSheet, Image, Text, TouchableOpacity, Alert} from 'react-native';
import {useState, useContext} from 'react';
import Auth from '../Auth';
import axios from "axios";

function Signup({navigation})  {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [username, setUsername] = useState('');
    function signup() {
if (password !== password2) {
    alert('Passwords do not match');
    return;
}
axios.post('https://www.niveel.com/api/signup/', {
    username: username,
    email: email,
    password: password,
})
.then((response) => {
navigation.navigate('Login');
})
.catch((error) => {
    alert(error);
});


    }
   
    return (
        <View style={styles.container}>
                        <TextInput
            placeholder="Username"
            style={styles.email} 
            onChangeText={setUsername}
            />



            <TextInput
            placeholder="Email"
            style={styles.email} 
            onChangeText={setEmail}
            keyboardType='email-address'
            />
            <TextInput
            placeholder="Password"
            style={styles.password} 
            onChangeText={setPassword}
            secureTextEntry
            />
            <TextInput
            style={styles.password} placeholder="Confirm Password"
            
            onChangeText={setPassword2}
            secureTextEntry
            />
            <Button
          style={styles.button}   title="Sign Up"
            onPress={signup}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.text}>Already have an account? Login</Text>
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
    email: {
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
    },
    password: {
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
    },
    button: {
        width: 200,
        marginTop: 10,
    },
    text: {
        color: 'blue',
    },

}
    
);
    export default Signup;