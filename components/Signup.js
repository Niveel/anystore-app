import {React, useState, useContext, createContext} from 'react';
import { View, SafeAreaView, Text, Button, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
//import { AuthContext } from "../navigation/AuthProvider";
import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from 'axios';

const SignupSchema = yup.object({
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string().required('Required').min(6),
    confirmPassword: yup.string().required('Required').min(6),
    firstName: yup.string().required('Required'),
    lastName: yup.string().required('Required'),

});

export default function Signup({ navigation }) {
    //const { register } = useContext(AuthContext);
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [confirmPasswordVisibility, setConfirmPasswordVisibility] = useState(true);
    const [rightIcon, setRightIcon] = useState('eye');
    const [confirmRightIcon, setConfirmRightIcon] = useState('eye');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    function register() {
        axios.post('http://localhost:3000/api/users', {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
        })
            .then(function (response) {
                console.log(response);
                navigation.navigate('Login');
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <KeyboardAwareScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Create an Account</Text>
            </View>
            <View style={styles.formContainer}>
                <Formik

                    initialValues={{ email: '', password: '', confirmPassword: '', firstName: '', lastName: '' }}
                    validationSchema={SignupSchema}
                    onSubmit={(values, actions) => {
                        actions.resetForm();
                        register(values.email, values.password, values.firstName, values.lastName);
                    }

                            
                    }
                >
                    {(props) => (
                        <View>
                            <View style={styles.inputContainer}>
                                <View style={styles.iconStyle}>
                                    <MaterialIcons name="email" size={24} color="#000" />
                                </View>
                                <TextInput

                                    style={styles.input}
                                    placeholder="Email"
                                    placeholderTextColor="#000"
                                    onChangeText={props.handleChange('email')}
                                    value={props.values.email}
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    onBlur={props.handleBlur('email')}
                                />
                                <TouchableOpacity onPress={() => { }}>
                                    <Feather name="check-circle" size={24} color="#000" />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.errorText}>{props.touched.email && props.errors.email}</Text>
                            <View style={styles.inputContainer}>
                                <View style={styles.iconStyle}>
                                    <Ionicons name="key" size={24} color="#000" />
                                </View>
                                <TextInput

                                    style={styles.input}
                                    placeholder="Password"
                                    placeholderTextColor="#000"
                                    onChangeText={props.handleChange('password')}
                                    value={props.values.password}
                                    secureTextEntry={passwordVisibility}
                                    autoCapitalize="none"
                                    onBlur={props.handleBlur('password')}
                                />
                                <TouchableOpacity onPress={() => {
                                    setPasswordVisibility(!passwordVisibility);
                                    passwordVisibility ? setRightIcon('eye-off') : setRightIcon('eye');
                                }
                                }>
                                    <Feather name={rightIcon} size={24} color="#000" />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.errorText}>{props.touched.password && props.errors.password}</Text>
                            <View style={styles.inputContainer}>
                                <View style={styles.iconStyle}>
                                    <Ionicons name="key" size={24} color="#000" />
                                </View>
                                <TextInput style={styles.input} placeholder="Confirm Password" placeholderTextColor="#000" onChangeText={props.handleChange('confirmPassword')} value={props.values.confirmPassword} secureTextEntry={confirmPasswordVisibility} autoCapitalize="none" onBlur={props.handleBlur('confirmPassword')} />
                                <TouchableOpacity onPress={() => { setConfirmPasswordVisibility(!confirmPasswordVisibility); confirmPasswordVisibility ? setConfirmRightIcon('eye-off') : setConfirmRightIcon('eye'); } }> <Feather name={confirmRightIcon} size={24} color="#000" /> </TouchableOpacity>
                            </View>
                            <Text style={styles.errorText}>{props.touched.confirmPassword && props.errors.confirmPassword}</Text>
                            <View style={styles.inputContainer}>
                                <View style={styles.iconStyle}> <FontAwesome name="user" size={24} color="#000" /> </View> <TextInput style={styles.input} placeholder="First Name" placeholderTextColor="#000" onChangeText={props.handleChange('firstName')} value={props.values.firstName} autoCapitalize="none" onBlur={props.handleBlur('firstName')} /> </View> <Text style={styles.errorText}>{props.touched.firstName && props.errors.firstName}</Text> <View style={styles.inputContainer}>
                                    <View style={styles.iconStyle}> <FontAwesome name="user" size={24} color="#000" /> </View> <TextInput style={styles.input} placeholder="Last Name" placeholderTextColor="#000" onChangeText={props.handleChange('lastName')} value={props.values.lastName} autoCapitalize="none" onBlur={props.handleBlur('lastName')} /> </View> <Text style={styles.errorText}>{props.touched.lastName && props.errors.lastName}</Text> <View style={styles.buttonContainer}>
                                        <TouchableOpacity style={styles.button} onPress={props.handleSubmit}>
                                            <Text style={styles.buttonText}>Sign Up</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.buttonContainer}>
                                        <TouchableOpacity style={styles.button} onPress={register}>
                                            <Text style={styles.buttonText}>Already have an account? Login</Text>
                                        </TouchableOpacity>
                                    </View>
                        </View>
                    )}
                </Formik>
            </View>
        </KeyboardAwareScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: { height: 150, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' },
    headerText: { fontSize: 30, fontWeight: 'bold' },
    formContainer: { marginTop: 30, paddingHorizontal: 30 },
    inputContainer: { flexDirection: 'row', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#000' },
    iconStyle: { paddingVertical: 10, paddingHorizontal: 10 },
    input: { flex: 1, fontSize: 16, color: '#000' },
    buttonContainer: { alignItems: 'center', justifyContent: 'center', marginTop: 30 },
    button: { width: 200, height: 50, backgroundColor: '#000', alignItems: 'center', justifyContent: 'center', borderRadius: 10 },
    buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
    errorText: { color: 'red' },
});
