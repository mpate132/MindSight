import {
  View,
  Text,
  Button,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { db, authorization } from "../firebase";
import { Avatar } from "react-native-elements";
import { ScrollView } from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";
import { Keyboard } from "react-native";
import firebase from "firebase/compat/app";

const ChatScreen = ({ navigation, route }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View className="flex-row space-x-2">
          <Avatar
            source={{ uri: "https://roilenergy.com/img/icons/avatar.jpg" }}
            rounded
            size={25}
          />
          <Text className="pt-1">{route.params.chatName}</Text>
        </View>
      ),
    });
  }, [navigation]);

  useLayoutEffect(() => {
    const unsubscribe = db
      .collection("chats")
      .doc(route.params.id)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setMessages(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
            email: doc.data().email,
          }))
        )
      );
    return unsubscribe;
  }, [route]);

  const sendMessage = () => {
    Keyboard.dismiss();
    db.collection("chats").doc(route.params.id).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      email: authorization.currentUser.email,
    });
  };
  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={90}
        className="flex-1"
      >
        {/* <TouchableWithoutFeedback
          onPress={Keyboard.dismiss()}
        ></TouchableWithoutFeedback> */}
        <>
          <ScrollView>
            {messages.map(({ id, data }) =>
              data.email === authorization?.currentUser?.email ? (
                <View
                  key={id}
                  className="p-2 mt-2 bg-orange-400 self-end rounded-md mr-4 mb-2 relative max-w-[80%] transition-transform ease-in-out"
                >
                  <Text className="text-lg">{data.message}</Text>
                  <Text className="text-white text-md ">
                    {route.params.chatName}
                  </Text>
                </View>
              ) : (
                <View
                  key={id}
                  className="p-2 bg-orange-200 self-start rounded-md m-2 max-w-[80%] relative transition-transform ease-in-out"
                >
                  <Text className="text-lg">{data.message}</Text>
                  <Text className="pr-2 text-md text-white ">
                    {route.params.chatName}
                  </Text>
                </View>
              )
            )}
          </ScrollView>

          <View className="flex-row px-2 justify-between  items-center w-full p-15">
            {/* footer */}
            <TextInput
              value={input}
              onChangeText={(text) => setInput(text)}
              placeholder="Send your message"
              className="w-[90%] p-2 rounded-3xl  bg-gray-200"
            />
            <TouchableOpacity onPress={sendMessage} activeOpacity={0.5}>
              <Ionic name="send" size={24} color="#2B68E6" />
            </TouchableOpacity>
          </View>
        </>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;
