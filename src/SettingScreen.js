import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Switch } from "react-native-switch";

export const SettingScreen = () => {
  const [name, setName] = useState("John Smith");
  const [gender, setGender] = useState(false);
  const contact = async () => {
    Linking.openURL("https://www.google.com/");
  };

  const sections = [
    {
      title: "プロフィール",
      data: [
        {
          title: "名前",
          data: "山田太郎",
        },
        {
          title: "性別",
          data: (
            <Switch
              value={gender}
              onValueChange={setGender}
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={gender ? "#f5dd4b" : "#f4f3f4"}
              activeText={"女の子"}
              inActiveText={"男の子"}
              backgroundActive={"black"}
              backgroundInactive={"black"}
              circleSize={30}
              circleBorderWidth={2}
              switchLeftPx={3}
              switchRightPx={3}
              switchWidthMultiplier={3}
              switchBorderRadius={20}
              circleActiveColor="white"
              circleInActiveColor="white"
            />
          ),
        },
      ],
    },
    {
      title: "学校",
      data: [{ title: "学校", data: "ABC HighSchool" }],
    },
    {
      title: "クラス",
      data: [{ title: "クラス", data: "2-3" }],
    },
  ];

  return (
    <View style={styles.container}>
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.content}>
              <Text>{item.data}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={contact}>
              <Text style={styles.buttonText}>変更する</Text>
            </TouchableOpacity>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#ccc",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 6,
  },
  content: {
    marginLeft: 20,
  },
  sectionHeader: {
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 20,
    paddingVertical: 8,
    fontWeight: "bold",
    fontSize: 14,
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    fontSize: 16,
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
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
