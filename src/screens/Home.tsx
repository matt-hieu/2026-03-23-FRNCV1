import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <View style={styles.main}>
      <Text style={styles.titre}>Bienvenue</Text>
      <Image source={require("./images.jpeg")} style={styles.image} />
      <Button color={"skyblue"} title="acceder au magasin" onPress={() => {}} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: { flex: 1, alignItems: "center", gap: 20 },
  titre: {
    marginTop: Dimensions.get("window").height * 0.15,
    fontSize: 30,
    fontWeight: 900,
    color: "skyblue",
    textDecorationLine: "underline",
    textDecorationStyle: "double",
  },
  image: {
    height: 100,
    width: 100,
  },
});
