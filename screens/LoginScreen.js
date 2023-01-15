import { View, Text, TextInput, TouchableOpacity, Button } from "react-native";
import React, { useState, useEffect } from "react";
import { Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import { authorization } from "../firebase";

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    authorization
      .signInWithEmailAndPassword(email, password)
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    const unsubscribe = authorization.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        navigation.replace("Home");
      } else {
        signIn();
        navigation.navigate("Home");
      }
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.loginPage}>
      <Image
        style={[
          styles.loginPageChild,
          styles.loginLayout,
          styles.rectangleIconLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/rectangle-3.png")}
      />
      <LinearGradient
        style={[styles.loginPageItem, styles.loginLayout]}
        locations={[0, 1]}
        colors={["#ff8814", "#fdbb2d"]}
      />
      <Text style={[styles.login, styles.loginTypo]}>
        <Text style={styles.login1}>Login</Text>
      </Text>
      <Text style={[styles.pleaseSignIn, styles.loginTypo]}>
        Please sign in to continue
      </Text>
      <Image
        style={styles.loginPageInner}
        resizeMode="cover"
        source={require("../assets/rectangle-1.png")}
      />
      <Text style={[styles.email, styles.emailLayout, styles.emailClr]}>
        EMAIL
      </Text>
      <TextInput
        keyboardType="password"
        secureTextEntry={true}
        placeholder="password"
        onChangeText={(text) => setPassword(text)}
        style={[styles.password, styles.emailClr, styles.passwordFlexBox]}
        value={password}
      />
      <TextInput
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
        placeholder="example@email.com"
        style={styles.examplegmailcom}
        value={email}
      />
      <Text
        style={[
          styles.forgotPassword,
          styles.signUpTypo,
          styles.passwordFlexBox,
        ]}
      >{`Forgot password`}</Text>
      <TouchableOpacity onPress={signIn}>
        <Text style={[styles.login2, styles.passwordFlexBox]}>LOGIN</Text>
        <Image
          style={styles.arrowForwardIcon}
          resizeMode="cover"
          source={require("../assets/arrow-forward.png")}
        />
      </TouchableOpacity>
      <Text style={[styles.dontHaveAnContainer, styles.emailLayout]}>
        <Text style={styles.dontHaveAn}>{`Don’t have an account? `}</Text>
        <TouchableOpacity onPress={() => navigation.navigate("createAccount")}>
          <Text style={styles.signUpTypo}>Sign up</Text>
        </TouchableOpacity>
      </Text>
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-4.png")}
      />
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector-2.png")}
      />
      <Image
        style={[styles.vpnKeyIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vpn-key.png")}
      />
      <Image
        style={[styles.mailIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/mail.png")}
      />
      <Image
        style={styles.loginPageChild1}
        resizeMode="cover"
        source={require("../assets/vector-3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loginLayout: {
    height: 63,
    position: "absolute",
  },
  rectangleIconLayout: {
    borderRadius: Border.br_md,
    left: 25,
  },
  loginTypo: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.nunito,
    position: "absolute",
  },
  emailLayout: {
    height: 22,
    textAlign: "left",
    position: "absolute",
  },
  emailClr: {
    color: Color.gray,
    left: 80,
    fontFamily: FontFamily.nunito,
  },
  passwordFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  signUpTypo: {
    color: Color.orange,
    fontFamily: FontFamily.nunito,
    fontWeight: "700",
  },
  iconLayout: {
    height: 27,
    width: 27,
    position: "absolute",
  },
  loginPageChild: {
    top: 408,
    width: 377,
  },
  loginPageItem: {
    top: 607,
    left: 232,
    borderRadius: 35,
    width: 173,
    backgroundColor: "transparent",
  },
  login1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  login: {
    top: 228,
    left: 31,
    fontSize: 50,
    width: 160,
    height: 64,
    fontWeight: "700",
  },
  pleaseSignIn: {
    top: 298,
    left: 41,
    width: 257,
    height: 34,
    fontSize: FontSize.size_base,
  },
  loginPageInner: {
    top: 389,
    left: 52,
    width: 378,
    height: 92,
    position: "absolute",
  },
  email: {
    top: 415,
    fontSize: 12,
    letterSpacing: 0.7,
    width: 52,
  },
  password: {
    top: 518,
    width: 131,
    height: 25,
    fontSize: FontSize.size_base,
    fontWeight: "700",
    zIndex: 500,
  },
  examplegmailcom: {
    width: 208,
    height: 32,
    top: 434,
    left: 80,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.nunito,
    fontWeight: "700",
    position: "absolute",
  },
  forgotPassword: {
    top: 518,
    left: 280,
    fontSize: 14,
    width: 117,
    height: 33,
  },
  login2: {
    top: 628,
    left: 273,
    color: Color.white,
    width: 71,
    height: 20,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.nunito,
    textAlign: "left",
    fontWeight: "700",
  },
  dontHaveAn: {
    color: Color.black,
    fontFamily: FontFamily.nunito,
  },
  dontHaveAnContainer: {
    top: 866,
    left: 74,
    width: 345,
    fontSize: FontSize.size_base,
  },
  rectangleIcon: {
    top: 498,
    width: 380,
    height: 60,
    position: "absolute",
  },
  vectorIcon: {
    top: 0,
    left: 260,
    width: 174,
    height: 180,
    position: "absolute",
  },
  vpnKeyIcon: {
    top: 517,
    left: 38,
  },
  mailIcon: {
    left: 37,
    top: 434,
  },
  arrowForwardIcon: {
    top: 624,
    left: 340,
    width: 35,
    height: 35,
    position: "absolute",
  },
  loginPageChild1: {
    top: 57,
    left: 269,
    width: 165,
    height: 123,
    position: "absolute",
  },
  loginPage: {
    borderRadius: 25,
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default LoginPage;
