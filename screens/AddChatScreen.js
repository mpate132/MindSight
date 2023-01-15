import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome5";
import { db } from "../firebase";

const AddChatScreen = ({ navigation }) => {
  const [input, setInput] = useState("");
  const createChat = async () => {
    await db
      .collection("chats")
      .add({
        chatName: input,
      })
      .then(() => navigation.goBack())
      .catch((err) => console.log(err.message));
  };
  return (
    <View className="flex-[0.2] justify-center items-center">
      <Input
        placeholder="Enter a chat Name"
        value={input}
        onSubmitEditing={createChat}
        onChangeText={(text) => setInput(text)}
        leftIcon={
          <Icon name="comment" type="antdesign" size={24} color="black" />
        }
      />
      <Button onPress={createChat} title="Create new chat" />
    </View>
  );
};

export default AddChatScreen;
