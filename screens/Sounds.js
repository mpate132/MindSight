import * as React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Sounds = ({ navigation }) => {
  return (
    <View style={styles.nature}>
      <Image
        style={styles.tree1Icon}
        resizeMode="cover"
        source={require("../assets/tree-1.png")}
      />
      <Image
        style={[styles.fastRewindIcon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/fast-rewind.png")}
      />
      <Text style={styles.nature1}>Nature</Text>
      <Image
        style={[styles.pauseCircleIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/pause-circle.png")}
      />
      <Image
        style={styles.fastForwardIcon}
        resizeMode="cover"
        source={require("../assets/fast-forward.png")}
      />
      <Image
        style={[styles.iconArrowBackOutline, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/-icon-arrow-back-outline.png")}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Exercise")}>
        <Image
          style={[styles.selfImprovementIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/self-improvement.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    height: 75,
    width: 75,
    position: "absolute",
  },
  tree1Icon: {
    top: 0,
    left: 0,
    width: 545,
    height: 960,
    position: "absolute",
  },
  fastRewindIcon: {
    height: "4.02%",
    width: "13.81%",
    top: "90.67%",
    right: "67.35%",
    bottom: "5.31%",
    left: "18.84%",
  },
  nature1: {
    top: 754,
    left: 140,
    fontSize: FontSize.size_6xl,
    lineHeight: 70,
    fontWeight: "700",
    fontFamily: FontFamily.nunito,
    color: Color.white,
    textAlign: "left",
    width: 150,
    height: 63,
    position: "absolute",
  },
  pauseCircleIcon: {
    top: 827,
    left: 171,
  },
  fastForwardIcon: {
    top: 828,
    left: 278,
    width: 70,
    height: 70,
    position: "absolute",
  },
  iconArrowBackOutline: {
    height: "7.73%",
    width: "24.42%",
    top: "3.86%",
    right: "70.7%",
    bottom: "88.41%",
    left: "4.88%",
  },
  selfImprovementIcon: {
    top: 33,
    left: 333,
  },
  nature: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default Sounds;
