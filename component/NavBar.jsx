import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
const NavBar = ({ IconComponent, title }) => {
  const navigate = useNavigation();
  const getBack = () => {
    navigate.goBack();
  };

  return (
    <View style={styles.navBar}>
      <TouchableOpacity onPress={getBack}>{IconComponent}</TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <Image
        source={require("../assets/LOGO3-removebg-preview.png")}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#0C0F14",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 10,
    gap: 20,
    marginBottom: -30,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
    marginLeft: 50,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
});

export default NavBar;
