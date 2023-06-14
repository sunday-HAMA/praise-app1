import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Share } from "react-native";

export const HomeScreen = () => {
  const navigation = useNavigation();
  const schoolList = [
    { icon: require("../assets/school1.png"), name: "平和高校", num: 5 },
    {
      icon: require("../assets/school2.png"),
      name: "平和高校2-3",
      num: 3,
    },
    { icon: require("../assets/school3.png"), name: "友達", num: 8 },
  ];
  const onShare = async () => {
    try {
      const result = await Share.share({
        url: "https://www.google.com/?hl=ja",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        {schoolList.map((school, index) => (
          <View key={index} style={styles.schoolContainer}>
            <Image source={school.icon} style={styles.icon} />
            <Text style={styles.schoolName}>{school.name}</Text>
            <View style={styles.numContainer}>
              <Text style={styles.num}>{school.num}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={onShare}>
              <Text style={styles.buttonText}>招待+</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <View style={styles.underbarcontainer}>
        <View style={styles.underbar}></View>
      </View>
      <View style={styles.underbutton}>
        <Icon
          name="vote"
          color="black"
          size={30}
          onPress={() => navigation.navigate("Votes")}
        />
        <Icon
          name="fire"
          color="black"
          size={30}
          onPress={() => navigation.navigate("Box")}
        />
        <Icon
          name="cog"
          color="black"
          size={30}
          onPress={() => navigation.navigate("Detail")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container1: {
    alignItems: "center",
    justifyContent: "center",
  },
  schoolContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  schoolName: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
  },
  numContainer: {
    backgroundColor: "#f2f2f2",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  num: {
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#4caf50",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  hedder: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  underbar: {
    backgroundColor: "#fff",
    width: 390,
    height: 80,
    borderTopColor: "#D6D6D6",
    borderTopWidth: 0.2,
  },
  underbutton: {
    flexDirection: "row",
    position: "relative",
    top: 470,
    justifyContent: "space-around",
  },
  underbarcontainer: {
    position: "absolute",
    bottom: 0,
  },
});
