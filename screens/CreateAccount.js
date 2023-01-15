import {
  View,
  Text,
  Button,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { authorization } from "../firebase";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const CreateAccount = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const register = () => {
    navigation.navigate("Home");
    authorization
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          photoURL: "https://roilenergy.com/img/icons/avatar.jpg",
        });
        console.log(authUser);
      })
      .catch((err) => alert(err.message));
  };

  return (
    <View style={styles.signUpPage}>
      <Text
        style={[
          styles.createAnAccountContainer,
          styles.containerFlexBox,
          styles.alreadyHaveAnClr,
          styles.signUpTypo,
        ]}
      >
        <Text style={styles.createAnAccount}>Create an account</Text>
      </Text>
      <Text style={[styles.alreadyHaveAnContainer, styles.containerFlexBox]}>
        <Text
          style={styles.alreadyHaveAnClr}
        >{`Already have an account? `}</Text>
        <TouchableOpacity
          onPress={() => {
            authorization.signOut().then(() => navigation.navigate("login"));
          }}
        >
          <Text style={styles.login}>Login</Text>
        </TouchableOpacity>
      </Text>
      <Image
        style={[styles.signUpPageChild, styles.signLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-5.png")}
      />
      <View style={[styles.signUpPageItem, styles.signLayout]} />
      <Image
        style={styles.signUpPageInner}
        resizeMode="cover"
        source={require("../assets/rectangle-1.png")}
      />
      <TextInput
        autoCapitalize={false}
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="EMAIL"
        style={styles.username}
      />
      <TextInput
        placeholder="PASSWORD"
        style={[styles.password, styles.passwordTypo]}
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />
      <Image
        style={[styles.rectangleIcon, styles.signLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-5.png")}
      />
      <TextInput
        placeholder="CONFIRM PASSWORD"
        style={[styles.confirmPassword, styles.passwordTypo]}
        value={confirmPass}
        onChangeText={(text) => setConfirmPass(text)}
        secureTextEntry={true}
      />
      <Image
        style={[styles.signUpPageChild1, styles.signUpPageChild1Layout]}
        resizeMode="cover"
        source={require("../assets/rectangle-6.png")}
      />
      <Image
        style={styles.image9Icon}
        resizeMode="cover"
        source={require("../assets/image-9.png")}
      />
      <Image
        style={styles.accountCircleIcon}
        resizeMode="cover"
        source={require("../assets/account-circle.png")}
      />
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector-4.png")}
      />
      <Image
        style={styles.signUpPageChild2}
        resizeMode="cover"
        source={require("../assets/vector-5.png")}
      />
      <LinearGradient
        style={styles.rectangleLineargradient}
        locations={[0, 1]}
        colors={["#ff8814", "#fdbb2d"]}
      />
      <TouchableOpacity onPress={register}>
        <Text
          style={[styles.signUp, styles.containerFlexBox, styles.signUpTypo]}
        >
          SIGN UP
        </Text>
        <Image
          style={styles.arrowForwardIcon}
          resizeMode="cover"
          source={require("../assets/arrow-forward.png")}
        />
      </TouchableOpacity>
      <Image
        style={[styles.iconsaxlinearkey, styles.signUpPageChild1Layout]}
        resizeMode="cover"
        source={require("../assets/iconsaxlinearkey.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  alreadyHaveAnClr: {
    color: Color.black,
    fontFamily: FontFamily.inter,
  },
  signUpTypo: {
    fontWeight: "700",
    textAlign: "left",
  },
  signLayout: {
    height: 69,
    width: 385,
    borderRadius: Border.br_sm,
    left: 28,
    position: "absolute",
  },
  passwordTypo: {
    height: 34,
    color: Color.gray_300,
    textTransform: "uppercase",
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  signUpPageChild1Layout: {
    height: 26,
    position: "absolute",
  },
  createAnAccount: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  createAnAccountContainer: {
    top: 200,
    left: 23,
    fontSize: 37,
    width: 387,
    height: 56,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  login: {
    color: Color.orange,
    fontFamily: FontFamily.inter,
    fontWeight: "700",
    top: 2,
  },
  alreadyHaveAnContainer: {
    top: 848,
    left: 62,
    width: 345,
    height: 22,
    fontSize: FontSize.size_xl,
  },
  signUpPageChild: {
    top: 393,
  },
  signUpPageItem: {
    top: 302,
    backgroundColor: "rgba(217, 217, 217, 0.7)",
  },
  signUpPageInner: {
    top: 286,
    left: 52,
    width: 378,
    height: 92,
    position: "absolute",
  },
  username: {
    top: 325,
    fontSize: 17,
    letterSpacing: 0.7,
    width: 98,
    height: 21,
    textTransform: "uppercase",
    left: 92,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  password: {
    top: 412,
    left: 93,
    width: 125,
    fontSize: 18,
  },
  fillerName: {
    top: 333,
    width: 208,
    height: 32,
    color: Color.gray_300,
    left: 102,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  rectangleIcon: {
    top: 491,
  },
  confirmPassword: {
    top: 507,
    left: 89,
    fontSize: 17,
    width: 196,
  },
  signUpPageChild1: {
    top: 416,
    left: 43,
    width: 27,
  },
  image9Icon: {
    top: 89,
    left: 24,
    width: 73,
    height: 47,
    position: "absolute",
  },
  accountCircleIcon: {
    right: 355,
    bottom: 569,
    width: 36,
    height: 36,
    position: "absolute",
  },
  vectorIcon: {
    top: 0,
    left: 263,
    width: 174,
    height: 176,
    position: "absolute",
  },
  signUpPageChild2: {
    top: 53,
    left: 272,
    width: 165,
    height: 123,
    position: "absolute",
  },
  rectangleLineargradient: {
    top: 607,
    left: 235,
    borderRadius: "15px",
    width: 173,
    height: 63,
    backgroundColor: "transparent",
    position: "absolute",
  },
  signUp: {
    top: 628,
    left: 266,
    fontFamily: FontFamily.nunito,
    color: Color.white,
    width: 89,
    height: 20,
    fontSize: "20",
  },
  arrowForwardIcon: {
    top: 624,
    left: 353,
    width: 35,
    height: 35,
    position: "absolute",
  },
  iconsaxlinearkey: {
    top: 513,
    left: 46,
    width: 29,
    overflow: "hidden",
  },
  signUpPage: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default CreateAccount;
