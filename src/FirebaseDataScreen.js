import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import firebase from "firebase/app";
import "firebase/database";

const FirebaseDataScreen = () => {
  const [data, setData] = useState(null); // 取得したデータを保存するstate

  useEffect(() => {
    // Firebaseの初期化
    firebase.initializeApp({
      databaseURL: "https://<your-firebase-project>.firebaseio.com/",
    });

    // データの取得
    const databaseRef = firebase.database().ref("data"); // 取得したいデータの参照先
    databaseRef.on("value", (snapshot) => {
      // データの変更を監視し、変更がある度に実行されるコールバック関数
      const dataFromFirebase = snapshot.val(); // データを取得
      setData(dataFromFirebase); // stateに取得したデータを保存
    });

    // クリーンアップ処理
    return () => {
      databaseRef.off(); // 監視を解除
    };
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {data && <Text>{data[0]}</Text>}{" "}
      {/* データが取得されたら、1つ目の要素を表示 */}
    </View>
  );
};

export default FirebaseDataScreen;
