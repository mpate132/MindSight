import {
  View,
  Text,
  SafeAreaView,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";
import { authorization } from "../firebase";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.maskGroup}>
      <View style={styles.homePage}>
        <Image
          style={styles.homePageChild}
          resizeMode="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Image
          style={styles.homePageItem}
          resizeMode="cover"
          source={require("../assets/ellipse-3.png")}
        />
        <Image
          style={[styles.rectangleIcon, styles.rectangleIconLayout1]}
          resizeMode="cover"
          source={require("../assets/rectangle.png")}
        />
        <Image
          style={styles.homePageInner}
          resizeMode="cover"
          source={require("../assets/rectangle-10.png")}
        />
        <Image
          style={[styles.rectangleIcon1, styles.rectangleIconLayout1]}
          resizeMode="cover"
          source={require("../assets/rectangle1.png")}
        />
        <Image
          style={[styles.rectangleIcon2, styles.rectangleIconLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle2.png")}
        />
        <Image
          style={[styles.rectangleIcon3, styles.rectangleIconLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle3.png")}
        />
        <Text
          className="pl-4 hover:transi"
          style={[styles.questionnaire, styles.faqsFlexBox, styles.faqsTypo]}
        >
          Questionnaire
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Sound")}>
          <Text
            style={[
              styles.soundscape,
              styles.soundscapePosition,
              styles.faqsFlexBox,
            ]}
          >
            Soundscape
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("FAQScreen")}>
          <Text
            className="pl-2"
            style={[styles.faqs, styles.faqsFlexBox, styles.faqsTypo]}
          >
            FAQ’s
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("EmergencyContact")}
        >
          <Text
            className="text-sm pl-1"
            style={[
              styles.emergencyContact,
              styles.logoutTypo,
              styles.soundscapePosition,
            ]}
          >
            Emergency contact
          </Text>
        </TouchableOpacity>
        <Image
          style={[styles.iconsaxlinearhome3, styles.iconsaxlinearhome3Position]}
          resizeMode="cover"
          source={require("../assets/iconsaxlinearhome3.png")}
        />
        <TouchableOpacity onPress={() => navigation.navigate("ChatNames")}>
          <Image
            style={[
              styles.iconsaxlinearmessages1,
              styles.iconsaxlinearhome3Position,
            ]}
            resizeMode="cover"
            source={require("../assets/iconsaxlinearmessages1.png")}
          />
        </TouchableOpacity>
        <Image
          style={[styles.iconsaxlinearnotification, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/iconsaxlinearnotification.png")}
        />
        <Image
          style={[styles.iconMusic, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-music.png")}
        />
        <Image
          style={[styles.iconPhone, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-phone.png")}
        />
        <Image
          style={[styles.iconArrowBackOutline, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-arrow-back-outline.png")}
        />
        <TouchableOpacity
          onPress={() => {
            authorization
              .signOut()
              .then(() => navigation.navigate("login"))
              .catch((err) => console.log(err.message));
          }}
        >
          <LinearGradient
            className="rounded-xl"
            style={styles.rectangleLineargradient}
            locations={[0, 1]}
            colors={["#ff8814", "#fdbb2d"]}
          />
          <Text
            className="pl-2 text-md"
            style={[styles.logout, styles.logoutTypo]}
          >
            Logout
          </Text>
        </TouchableOpacity>
        <View style={styles.arrowForward} />
        <Image
          style={[styles.iconQuestionMarkCircle, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-question-mark-circle.png")}
        />
        <Image
          style={styles.psychologyAltIcon}
          resizeMode="cover"
          source={require("../assets/psychology-alt.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleIconLayout1: {
    height: 195,
    width: 186,
    borderRadius: Border.br_md,
    top: 452,
    position: "absolute",
  },
  rectangleIconLayout: {
    width: 187,
    bottom: 528,
    top: 208,
    maxHeight: "100%",
    borderRadius: Border.br_md,
    position: "absolute",
  },
  faqsFlexBox: {
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  faqsTypo: {
    fontFamily: FontFamily.recursive,
    color: Color.white,
  },
  soundscapePosition: {
    left: 247,
    fontFamily: FontFamily.recursive,
  },
  logoutTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  iconsaxlinearhome3Position: {
    height: 42,
    top: 867,
    overflow: "hidden",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  homePageChild: {
    top: 706,
    left: 263,
    width: 189,
    height: 261,
    position: "absolute",
  },
  homePageItem: {
    width: 160,
    height: 173,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleIcon: {
    left: 226,
  },
  homePageInner: {
    top: 850,
    right: -13,
    height: 98,
    maxWidth: "100%",
    overflow: "hidden",
    borderRadius: Border.br_xl,
    left: 0,
    position: "absolute",
  },
  rectangleIcon1: {
    left: 17,
  },
  rectangleIcon2: {
    right: 18,
  },
  rectangleIcon3: {
    right: 228,
  },
  questionnaire: {
    left: 25,
    fontSize: 22,
    width: 177,
    height: 47,
    top: 282,
  },
  soundscape: {
    fontSize: 25,
    width: 158,
    height: 26,
    top: 282,
  },
  faqs: {
    top: 512,
    left: 60,
    fontSize: 30,
    width: 115,
    height: 37,
  },
  emergencyContact: {
    top: 506,
    width: 151,
    height: 44,
    fontSize: 25,
  },
  iconsaxlinearhome3: {
    left: 47,
    width: 43,
  },
  iconsaxlinearmessages1: {
    left: 181,
    width: 53,
  },
  iconsaxlinearnotification: {
    height: "4.51%",
    width: "12.33%",
    top: "93.35%",
    right: "17.21%",
    bottom: "2.15%",
    left: "70.47%",
  },
  iconMusic: {
    height: "7.15%",
    width: "16.24%",
    top: "34.65%",
    right: "18.85%",
    bottom: "58.2%",
    left: "64.91%",
  },
  iconPhone: {
    height: "6.73%",
    width: "15.38%",
    top: "59%",
    right: "17.66%",
    bottom: "31.99%",
    left: "66.96%",
  },
  iconArrowBackOutline: {
    height: "7.73%",
    width: "24.42%",
    top: "3.86%",
    right: "70.7%",
    bottom: "88.41%",
    left: "4.88%",
  },
  rectangleLineargradient: {
    top: 52,
    left: 273,
    borderRadius: Border.br_lg,
    width: 125,
    height: 57,
    backgroundColor: "transparent",
    position: "absolute",
  },
  logout: {
    top: 68,
    left: 303,
    fontWeight: "700",
    fontFamily: FontFamily.nunito,
    width: 71,
    height: 20,
  },
  arrowForward: {
    top: 94,
    left: 370,
    width: 35,
    height: 35,
    position: "absolute",
  },
  iconQuestionMarkCircle: {
    height: "6.65%",
    width: "14.22%",
    top: "60.09%",
    right: "68.8%",
    bottom: "33.26%",
    left: "16.98%",
  },
  psychologyAltIcon: {
    top: 312,
    left: 67,
    width: 78,
    height: 78,
    position: "absolute",
  },
  homePage: {
    backgroundColor: Color.white,
    width: 430,
    overflow: "hidden",
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
    position: "absolute",
    height: 932,
  },
  maskGroup: {
    flex: 1,
    width: "100%",
    height: 932,
  },
});

export default HomeScreen;
