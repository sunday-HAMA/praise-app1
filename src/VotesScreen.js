import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";

export const VotesScreen = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null); // 選択された回答の状態を管理する

  const handleAnswerPress = (answer) => {
    setSelectedAnswer(answer);
    Alert.alert(`You selected ${answer}`);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}>
        質問内容をここに表示する
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: selectedAnswer === "option1" ? "green" : "white",
          padding: 10,
          borderRadius: 5,
          marginBottom: 10,
        }}
        onPress={() => handleAnswerPress("option1")}
      >
        <Text>選択肢1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: selectedAnswer === "option2" ? "green" : "white",
          padding: 10,
          borderRadius: 5,
          marginBottom: 10,
        }}
        onPress={() => handleAnswerPress("option2")}
      >
        <Text>選択肢2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: selectedAnswer === "option3" ? "green" : "white",
          padding: 10,
          borderRadius: 5,
          marginBottom: 10,
        }}
        onPress={() => handleAnswerPress("option3")}
      >
        <Text>選択肢3</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: selectedAnswer === "option4" ? "green" : "white",
          padding: 10,
          borderRadius: 5,
          marginBottom: 10,
        }}
        onPress={() => handleAnswerPress("option4")}
      >
        <Text>選択肢4</Text>
      </TouchableOpacity>
    </View>
  );
};
