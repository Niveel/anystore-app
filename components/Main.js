import {View, TextInput, Text, Button, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

function Main() {
    const [auth, setAuth] = useState({});
    function loadAuth() {
        AsyncStorage.getItem('auth')
        .then(data => {
            setAuth(JSON.parse(data));
        }
        )
.catch(err => console.log(err));
    }
    useEffect(() => {
        loadAuth();
    }, []);
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome {auth.username}</Text>
            <Button title="Logout" onPress={() => {
                AsyncStorage.removeItem('auth');
                navigation.navigate('Login');
            }
            } />
<TextInput style={styles.search} placeholder="Search" keyboardType='web-search' />
    
<Button style={styles.buttonSearch} title="Search" onPress={() => navigation.navigate('Search')} />
    </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    search: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 20,
        marginBottom: 20,
    },
    buttonSearch: {
        marginTop: 20,
    },
        
});

export default Main;