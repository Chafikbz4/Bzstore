import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

const HeaderHome = ({ SearchFunc }) => {
  return (
    <View style={{ marginTop: -35 }}>
      <View style={styles.Head}>
        <View>
          <Text style={{ fontSize: 26, color: "white", marginLeft: 10 }}>
            Find the best
          </Text>
          <Text style={{ color: "white", fontSize: 26, marginLeft: 10 }}>
            Clothes for you
          </Text>
        </View>
        <Image
          source={require("../assets/LOGO3-removebg-preview.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.searchContainer}>
        <Icon
          name="search"
          size={25}
          color="white"
          style={{ top: 53, zIndex: 1, left: 310 }}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search here..."
          keyboardType="default"
          onChangeText={SearchFunc}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    marginTop: -35,
    marginBottom: -5,
  },
  Head: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
  },
  logo: {
    width: 150,
    height: 100,
    backgroundColor: "transparent", // Ensure the logo has no background color
    resizeMode: "contain", // Ensures the image scales correctly
  },
  searchInput: {
    backgroundColor: "gray",
    borderRadius: 5,
    marginTop: 20,
    paddingHorizontal: 10,
    height: 40,
    color: "white",
    marginLeft: 10,
    width: "95%",
  },
});

export default HeaderHome;
