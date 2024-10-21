import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useContext } from "react";
import { ProductCartContext } from "../contexts/ProductCartContext";
import Icon from "react-native-vector-icons/Ionicons";
import NavBar from "../component/NavBar";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
const Productdetail = () => {
  const route = useRoute(); // Get route prop to access passed parameters
  const { product } = route.params; // Destructure the product from route.params
  const navigate = useNavigation();
  const getBack = () => {
    navigate.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={{ top: 50, zIndex: 1, left: 20 }}
        onPress={getBack}
      >
        <Icon name="arrow-back" color="white" size={30} />
      </TouchableOpacity>
      <ScrollView>
        <Image
          source={{ uri: product.images[0] }} // Display product image
          style={styles.productImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.productTitle}>{product.title}</Text>
          <Text style={styles.productCategory}>
            Category: {product.category}
          </Text>
          <Text style={styles.productDescription}>{product.description}</Text>
          <Text style={styles.productPrice}>{product.price}$</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Productdetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252A32",
  },
  productImage: {
    width: "100%",
    height: 550,
    resizeMode: "cover",
  },
  textContainer: {
    padding: 20,
  },
  productTitle: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    marginBottom: 10,
  },
  productCategory: {
    fontSize: 18,
    color: "white",
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
    color: "white",
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    marginBottom: 20,
  },
  addToCartButton: {
    backgroundColor: "#DC3535",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    marginRight: 10,
  },
});
