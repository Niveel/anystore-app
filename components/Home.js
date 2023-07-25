import React, { useContext, useEffect, useState } from "react";
import { View, SafeAreaView, Text, Button, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Main from "./Main";

function  Home({ navigation }) {
    const [auth, setAuth] = useState({});
function loadAuth() {
    AsyncStorage.getItem("auth").then((data) => {
        if (data) {
            setAuth(JSON.parse(data));
        }
    })
    .catch((error) => console.log(error));
}
   useEffect(() => {
    loadAuth();
}, []);

return (
<SafeAreaView style={styles.container}>
{
        auth.username ? <Main />
        :
        <View>
 <Text style={styles.welcome}>Anystore</Text>
        <Text style={styles.text} numberOfLines={7}>Welcome to our innovative mobile app, the ultimate e-commerce search engine designed to enhance your shopping experience.
        With our powerful search capabilities, you can effortlessly find any product you desire, all in one place.
        Our app streamlines the shopping process by swiftly redirecting you to the original product page, ensuring authenticity and reliability.
        Discover a vast range of products from various online retailers, allowing you to compare prices, read reviews, and make informed purchasing decisions.
        Say goodbye to countless tabs and endless scrolling, and say hello to convenience and efficiency.
        Embrace the future of online shopping with our intuitive app, transforming the way you search, shop, and save.
        </Text>
<Button style={styles.Button} title="Login" onPress={() => navigation.navigate("Login")} />
<Button style={styles.Button} title="Create account" onPress={() => navigation.navigate("Signup")} />
</View>


}

</SafeAreaView>
);




}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 30,
        fontWeight: "bold",
    },
    button: {
        margin: 20,
    },
    welcome: {
        fontSize: 50,
        fontWeight: "bold",
        textAlign: "center",
        margin: 20,
    },


});
export default Home;