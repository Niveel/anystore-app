import React from "react";
import { View, SafeAreaView, Text, Button } from "react-native";
import Signup from "./Signup";

export default function Home({ navigation }) {
    return (
        <SafeAreaView>
        <Text>Home</Text>
        <Text numberOfLines={7}>Welcome to our innovative mobile app, the ultimate e-commerce search engine designed to enhance your shopping experience. With our powerful search capabilities, you can effortlessly find any product you desire, all in one place. Our app streamlines the shopping process by swiftly redirecting you to the original product page, ensuring authenticity and reliability. Discover a vast range of products from various online retailers, allowing you to compare prices, read reviews, and make informed purchasing decisions. Say goodbye to countless tabs and endless scrolling, and say hello to convenience and efficiency. Embrace the future of online shopping with our intuitive app, transforming the way you search, shop, and save. Download now and embark on a seamless shopping journey!</Text>
<Button title="Go to About" onPress={() => navigation.navigate("About")} />
<Button title="Go to Signup" onPress={() => navigation.navigate("Signup")} />
        </SafeAreaView>
    );
    }
