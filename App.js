import React from "react";
import { View, Text } from "react-native";  
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/Home";
import About from "./components/About";
import Signup from "./components/Signup";

const Stack = createStackNavigator();

// function App() {
function App() {
  return (
<NavigationContainer>
<Stack.Navigator
initialRouteName="Home" screenOptions={{headerStyle: { backgroundColor: "#f4511e" },
headerTintColor: "#fff",
headerTitleStyle: { fontWeight: "bold" },}}>
<Stack.Screen name="Home" component={Home} options={{ title: "Home Page" }} />
<Stack.Screen name="About" component={About} options={{ title: "About Page" }} />
<Stack.Screen name="Signup" component={Signup} options={{ title: "Signup Page" }} />
</Stack.Navigator>
</NavigationContainer>
    );
}

export default App;