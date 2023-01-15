import * as React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Exercise = ({ navigation }) => {
  return (
    <View style={styles.exercise}>
      <Image
        style={styles.exerciseChild}
        resizeMode="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.exerciseItem, styles.image12IconLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-27.png")}
      />
      <Image
        style={[styles.exerciseInner, styles.exerciseInnerPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-28.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.exerciseInnerPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-29.png")}
      />
      <View style={styles.rectangleView} />
      <View
        style={[styles.exerciseChildLayout, styles.exerciseChildPosition2]}
      />
      <View
        style={[styles.exerciseChildPosition1, styles.exerciseChildPosition2]}
      />
      <View
        style={[styles.exerciseChildPosition, styles.exerciseChildLayout]}
      />
      <View
        style={[styles.exerciseChildPosition, styles.exerciseChildPosition1]}
      />
      <Text style={[styles.natureWalk, styles.natureWalkTypo]}>
        Nature Walk
      </Text>
      <Text style={[styles.swimming, styles.yogaTypo]}>Swimming</Text>
      <Text style={[styles.hiking, styles.danceTypo]}>Hiking</Text>
      <Text style={[styles.dance, styles.danceTypo]}>Dance</Text>
      <Text style={[styles.yoga, styles.yogaTypo]}>Yoga</Text>
      <Image
        style={styles.image13Icon}
        resizeMode="cover"
        source={require("../assets/image-13.png")}
      />
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <Image
        style={styles.iconArrowBackOutline}
        resizeMode="cover"
        source={require("../assets/-icon-arrow-back-outline2.png")}
      />
      <Text
        style={[styles.recommendedExercises, styles.natureWalkTypo]}
      >{`Recommended Exercises `}</Text>
      <Image
        style={[styles.image12Icon, styles.image12IconLayout]}
        resizeMode="cover"
        source={require("../assets/image-12.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image12IconLayout: {
    height: 134,
    borderRadius: Border.br_md,
    position: "absolute",
  },
  exerciseInnerPosition: {
    top: 670,
    height: 134,
    borderRadius: Border.br_md,
    position: "absolute",
  },
  exerciseChildPosition2: {
    top: 578,
    height: 40,
    backgroundColor: Color.violet,
    borderRadius: Border.br_md,
    position: "absolute",
  },
  exerciseChildLayout: {
    width: 159,
    left: 37,
  },
  exerciseChildPosition1: {
    left: 237,
    width: 160,
  },
  natureWalkTypo: {
    textAlign: "left",
    fontFamily: FontFamily.recursive,
    position: "absolute",
  },
  yogaTypo: {
    height: 35,
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    fontFamily: FontFamily.recursive,
    position: "absolute",
  },
  danceTypo: {
    color: Color.gray_300,
    height: 35,
    fontSize: FontSize.size_3xl,
    textAlign: "left",
    fontFamily: FontFamily.recursive,
    position: "absolute",
  },
  exerciseChild: {
    top: 773,
    left: 282,
    width: 189,
    height: 261,
    position: "absolute",
  },
  exerciseItem: {
    left: 229,
    width: 176,
    top: 424,
    height: 134,
  },
  exerciseInner: {
    left: 25,
    width: 177,
  },
  rectangleIcon: {
    left: 231,
    width: 176,
  },
  rectangleView: {
    top: 349,
    height: 40,
    width: 160,
    backgroundColor: Color.violet,
    left: 135,
    borderRadius: Border.br_md,
    position: "absolute",
  },
  exerciseChildPosition: {
    top: 824,
    height: 40,
    backgroundColor: Color.violet,
    borderRadius: Border.br_md,
    position: "absolute",
  },
  natureWalk: {
    top: 584,
    left: 44,
    fontSize: 21,
    width: 145,
    height: 22,
    color: Color.white,
  },
  swimming: {
    top: 583,
    left: 255,
    width: 127,
    color: Color.white,
  },
  hiking: {
    top: 829,
    left: 75,
    width: 127,
  },
  dance: {
    top: 832,
    left: 281,
    width: 87,
  },
  yoga: {
    top: 352,
    left: 184,
    color: Color.gray_400,
    width: 71,
  },
  image13Icon: {
    left: 22,
    width: 182,
    height: 142,
    borderRadius: Border.br_md,
    top: 424,
    position: "absolute",
  },
  ellipseIcon: {
    top: 0,
    left: 0,
    width: 156,
    height: 172,
    position: "absolute",
  },
  iconArrowBackOutline: {
    height: "7.73%",
    width: "24.42%",
    top: "1.93%",
    right: "73.95%",
    bottom: "90.34%",
    left: "1.63%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  recommendedExercises: {
    top: 52,
    fontSize: FontSize.size_5xl,
    fontStyle: "italic",
    color: Color.black,
    width: 291,
    height: 77,
    left: 135,
    textAlign: "left",
    fontFamily: FontFamily.recursive,
  },
  image12Icon: {
    marginLeft: -87,
    top: 195,
    left: "50%",
    width: 174,
  },
  exercise: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default Exercise;
