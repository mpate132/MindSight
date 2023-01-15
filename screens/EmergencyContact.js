import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const EmergencyContact = () => {
  return (
    <View style={styles.emergencyContact}>
      <Image
        style={styles.emergencyContactChild}
        resizeMode="cover"
        source={require("../assets/ellipse-22.png")}
      />
      <View style={[styles.emergencyContactItem, styles.emergencyLayout]} />
      <View style={[styles.emergencyContactInner, styles.emergencyLayout]} />
      <Image
        style={[styles.ellipseIcon, styles.emergencyChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={[styles.emergencyContactChild1, styles.emergencyChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-9.png")}
      />
      <Image
        style={[styles.emergencyContactChild2, styles.emergencyChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Image
        style={[styles.emergencyContactChild3, styles.emergencyChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-7.png")}
      />
      <Image
        style={[styles.emergencyContactChild4, styles.emergencyChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Image
        style={[styles.emergencyContactChild5, styles.emergencyChildLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <View style={styles.iconArrowBackOutlineParent}>
        <Image
          style={[styles.iconArrowBackOutline, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/-icon-arrow-back-outline3.png")}
        />
        <Text
          style={[
            styles.nationalSuicidePrevention,
            styles.crisisTextLineLayout,
          ]}
        >
          NATIONAL SUICIDE PREVENTION LIFELINE:
        </Text>
        <Text
          style={[
            styles.secondary,
            styles.secondaryTypo2,
            styles.secondaryFlexBox,
          ]}
        >
          +1 000 000 0000
        </Text>
        <Text style={[styles.californiaParentAnd, styles.crisisTextLineLayout]}>
          California Parent and Youth Helpline
        </Text>
        <Text style={[styles.secondary1, styles.secondaryTypo1]}>
          1-855-427-2736
        </Text>
        <Text style={[styles.teenLine, styles.teenLineLayout]}>Teen Line</Text>
        <Text
          style={[
            styles.secondary2,
            styles.secondary2FlexBox,
            styles.secondaryTypo2,
          ]}
        >
          +1 (800) 852-8336 ( 6 - 10PM PST )
        </Text>
        <Text style={[styles.veteransSuicideCrisis, styles.teenLineLayout]}>
          Veterans Suicide Crisis Line
        </Text>
        <Text style={[styles.secondary3, styles.secondaryTypo]}>
          +1-800-8255 and Press 1
        </Text>
        <Text style={[styles.californiaYouthAges, styles.secondaryFlexBox]}>
          California Youth (ages 12-24) Crisis Line
        </Text>
        <Text style={[styles.secondary4, styles.secondaryTypo]}>
          Call/text 1-800-843-5200
        </Text>
        <Text style={[styles.crisisTextLine, styles.crisisTextLineLayout]}>
          Crisis Text Line
        </Text>
        <Text style={[styles.secondary5, styles.secondaryTypo1]}>
          Text HOME to 74174
        </Text>
        <Image
          style={styles.starIcon}
          resizeMode="cover"
          source={require("../assets/star.png")}
        />
        <Text style={[styles.emergencyContacts, styles.secondary2FlexBox]}>
          Emergency Contacts
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  emergencyLayout: {
    borderRadius: Border.br_md,
    position: "absolute",
  },
  emergencyChildLayout: {
    height: 81,
    width: 88,
    left: 22,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  crisisTextLineLayout: {
    height: 10,
    left: 110,
    width: 276,
    textAlign: "left",
    fontFamily: FontFamily.baloo,
    lineHeight: 8,
    letterSpacing: 0.3,
    fontSize: 12,
    position: "absolute",
  },
  secondaryTypo2: {
    fontFamily: FontFamily.openSans,
    fontSize: 15,
    left: "50%",
    marginLeft: -83,
    lineHeight: 8,
  },
  secondaryFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  secondaryTypo1: {
    color: Color.black,
    fontFamily: FontFamily.openSans,
    fontSize: FontSize.size_xl,
    left: "50%",
    marginLeft: -83,
    textAlign: "left",
    lineHeight: 8,
    position: "absolute",
  },
  teenLineLayout: {
    color: Color.gray_100,
    height: 10,
    width: 276,
    textAlign: "left",
    fontFamily: FontFamily.baloo,
    lineHeight: 8,
    letterSpacing: 0.3,
    fontSize: FontSize.size_lg,
    left: 110,
    position: "absolute",
  },
  secondary2FlexBox: {
    alignItems: "center",
    display: "flex",
    color: Color.black,
    textAlign: "left",
    position: "absolute",
  },
  secondaryTypo: {
    width: 199,
    color: Color.black,
    fontFamily: FontFamily.openSans,
    fontSize: FontSize.size_xl,
    left: "50%",
    textAlign: "left",
    lineHeight: 8,
    position: "absolute",
  },
  emergencyContactChild: {
    top: 744,
    left: 259,
    width: 171,
    height: 188,
    position: "absolute",
  },
  emergencyContactItem: {
    top: 219,
    left: 12,
    backgroundColor: Color.violet,
    width: 405,
    height: 646,
  },
  emergencyContactInner: {
    top: 124,
    left: 50,
    backgroundColor: Color.tan,
    width: 330,
    height: 69,
  },
  ellipseIcon: {
    top: 239,
  },
  emergencyContactChild1: {
    top: 769,
  },
  emergencyContactChild2: {
    top: 663,
  },
  emergencyContactChild3: {
    top: 557,
  },
  emergencyContactChild4: {
    top: 451,
  },
  emergencyContactChild5: {
    top: 345,
  },
  vectorIcon: {
    height: "4.51%",
    width: "16.28%",
    right: "74.42%",
    bottom: "92.49%",
    left: "9.3%",
    top: "3%",
  },
  iconArrowBackOutline: {
    height: "9.16%",
    width: "27.2%",
    top: "2.67%",
    right: "72.8%",
    bottom: "88.17%",
    left: "0%",
  },
  nationalSuicidePrevention: {
    top: 237,
    color: Color.gray_200,
  },
  secondary: {
    top: 269,
    color: "#130000",
    width: 136,
  },
  californiaParentAnd: {
    top: 746,
    color: Color.gray_400,
  },
  secondary1: {
    top: 778,
    width: 136,
  },
  teenLine: {
    top: 640,
  },
  secondary2: {
    top: 672,
    height: 16,
    width: 276,
  },
  veteransSuicideCrisis: {
    top: 433,
  },
  secondary3: {
    top: 465,
    marginLeft: -83,
    width: 199,
  },
  californiaYouthAges: {
    top: 543,
    left: 106,
    width: 276,
    color: Color.gray_200,
    fontFamily: FontFamily.baloo,
    lineHeight: 8,
    letterSpacing: 0.3,
    fontSize: FontSize.size_lg,
    textAlign: "left",
  },
  secondary4: {
    marginLeft: -87,
    top: 573,
  },
  crisisTextLine: {
    top: 335,
    color: Color.gray_300,
  },
  secondary5: {
    top: 367,
    width: 166,
  },
  starIcon: {
    top: 0,
    left: 297,
    width: 68,
    height: 75,
    position: "absolute",
  },
  emergencyContacts: {
    top: 101,
    left: 53,
    fontSize: 29,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoSans,
    width: 295,
    height: 59,
  },
  iconArrowBackOutlineParent: {
    height: "84.33%",
    width: "89.77%",
    right: "5.12%",
    bottom: "12.66%",
    left: "5.12%",
    top: "3%",
    position: "absolute",
  },
  emergencyContact: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default EmergencyContact;
