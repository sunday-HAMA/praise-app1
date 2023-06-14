import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const notifications = [
  { id: 1, type: "red", text: "女の子からKudosが届いたよ!" },
  { id: 2, type: "blue", text: "男の子からKudosが届いたよ!" },
  { id: 3, type: "black", text: "だれかからKudosが届いたよ!" },
];

const NotificationItem = ({ notification, onPress }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(true);
    onPress();
  };

  return (
    <TouchableOpacity
      style={[styles.container, isPressed && styles.pressed]}
      onPress={handlePress}
    >
      <View style={[styles.icon, styles[notification.type]]} />
      <Text style={styles.text}>{notification.text}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>詳細を見る</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export const NotificationsScreen = () => {
  const handleNotificationPress = () => {
    // TODO: Navigate to detail screen
    console.log("Navigate to detail screen");
  };

  return (
    <View style={styles.screen}>
      {notifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          notification={notification}
          onPress={handleNotificationPress}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ccc",
    backgroundColor: "#fff",
  },
  pressed: {
    backgroundColor: "#eee",
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
    borderWidth: 2,
    borderColor: "#fff",
  },
  red: {
    backgroundColor: "#ff4d4d",
  },
  blue: {
    backgroundColor: "#4db3ff",
  },
  black: {
    backgroundColor: "#333",
  },
  text: {
    flex: 1,
    fontWeight: "bold",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  buttonText: {
    color: "#333",
    fontWeight: "bold",
  },
});
