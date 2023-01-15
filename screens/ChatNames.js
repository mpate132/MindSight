import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Avatar, ListItem } from "react-native-elements";
import { AntDesign, SimpleLineIcons } from "react-native-vector-icons";
import { db } from "../firebase";

const ChatNames = ({ chatName, navigation }) => {
  const [chats, setChats] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("addchatScreen")}>
          <SimpleLineIcons name="pencil" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    const unsubscribe = db.collection("chats").onSnapshot((snapshot) =>
      setChats(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
    return unsubscribe;
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        {chats?.map(({ id, data: { chatName } }) => (
          <TouchableOpacity
            key={id}
            onPress={() => navigation.navigate("Chat", { id, chatName })}
          >
            <ListItem key={id}>
              <Avatar
                rounded
                source={{ uri: "https://roilenergy.com/img/icons/avatar.jpg" }}
              />
              <ListItem.Content>
                <ListItem.Title style={{ fontWeight: "800" }}>
                  {chatName}
                </ListItem.Title>
              </ListItem.Content>
            </ListItem>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChatNames;
