import React from "react";
import { View, Text } from "react-native";  
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Auth from "./Auth";

const Stack = createStackNavigator();

// function App() {
function App() {
  return (
<NavigationContainer>
<Stack.Navigator
initialRouteName="Home" screenOptions={{headerStyle: { backgroundColor: "#f4511e" },
headerTintColor: "#fff",
headerTitleStyle: { fontWeight: "bold" },}}>
<Stack.Screen name="Home" component={Home} options={{ title: "Home" }} />
<Stack.Screen name="Signup" component={Signup} options={{ title: "Signup" }} />
<Stack.Screen name="Login" component={Login} options={{ title: "Login" }} />

</Stack.Navigator>
</NavigationContainer>
    );
}

export default App;