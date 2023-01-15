import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatScreen from "./screens/ChatScreen";
import LoginScreen from "./screens/LoginScreen";
import { useFonts } from "expo-font";
import { useState } from "react";
import CreateAccount from "./screens/CreateAccount";
import ChatNames from "./screens/ChatNames";
import AddChatScreen from "./screens/AddChatScreen";
import Sounds from "./screens/Sounds";
import EmergencyContact from "./screens/EmergencyContact";
import Exercise from "./screens/Exercise";
const Stack = createNativeStackNavigator();

export default function App() {
  const [hideSplashScreen, setHideSplashScreen] = useState(true);
  const [fontsLoaded] = useFonts({
    Nunito: require("./assets/fonts/Nunito.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      {hideSplashScreen ? (
        <Stack.Navigator initialRouteName="createAccount">
          <Stack.Screen
            name="ChatNames"
            component={ChatNames}
            options={{
              headerTitle: "Chats",
              headerStyle: { backgroundColor: "#FFB369" },
            }}
          />
          <Stack.Screen
            name="login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="createAccount"
            component={CreateAccount}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="addchatScreen"
            component={AddChatScreen}
            options={{
              headerTitle: "Add a new Chat",
              headerStyle: { backgroundColor: "#FFB369" },
            }}
          />

          <Stack.Screen
            name="Chat"
            component={ChatScreen}
            options={{
              headerTitle: "Chat",
              headerStyle: { backgroundColor: "#FFB369" },
            }}
          />
          <Stack.Screen
            name="Sound"
            component={Sounds}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EmergencyContact"
            component={EmergencyContact}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Exercise"
            component={Exercise}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : null}
    </NavigationContainer>
  );
}
