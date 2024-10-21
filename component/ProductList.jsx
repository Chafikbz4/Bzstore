import React, { useContext } from "react";
import {
  FlatList,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { FlashList } from "@shopify/flash-list";
import { ProductCartContext } from "../contexts/ProductCartContext";
import { useNavigation } from "@react-navigation/native";
const truncateText = (text) => {
  const words = text.split(" ");
  return words.slice(0, 2).join(" ");
};

const ProductList = ({ productslist, loade, Favorites, setFavorites }) => {
  const { setproductselect } = useContext(ProductCartContext);
  const { setproductfavorite } = useContext(ProductCartContext);
  const navigation = useNavigation(); // Initialize useNavigation hook here
  const handleNavigation = (product) => {
    navigation.navigate("Productdetail", { product }); // Pass the product object to the ProductDetail screen
  };

  const handleSelectProduct = (product) => {
    setproductselect(product); // Set the selected product in context
  };

  const ToggleAndSendData = (product) => {
    setproductfavorite(product); // Set the selected product in context
    setFavorites((prev) => ({
      ...prev,
      [product.id]: !prev[product.id], // Toggle based on product ID
    }));
  };

  if (loade) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  } else {
    return (
      <FlashList
        data={productslist}
        renderItem={({ item }) => (
          <View style={{ marginTop: -30 }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#52555A",
                width: 40,
                height: 40,
                borderRadius: 30,
                left: 120,
                top: 35,
                zIndex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => ToggleAndSendData(item)}
            >
              <Icon
                name="heart"
                color={Favorites[item.id] ? "red" : "white"}
                size={20}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.productContainer}
              activeOpacity={0.7}
              onPress={() => handleNavigation(item)}
            >
              <Image
                source={{ uri: item.images[0] }}
                style={styles.productImage}
                resizeMode="cover"
              />
              <View style={styles.textContainer}>
                <Text style={styles.productTitle}>
                  {truncateText(item.title)}
                </Text>
                <Text style={styles.productCategory}>
                  Category: {item.category}
                </Text>
                <Text
                  style={[styles.productDescription, { fontSize: 12 }]}
                  numberOfLines={2}
                >
                  {item.description}
                </Text>
              </View>
              <View style={styles.priceContainer}>
                <Text style={styles.productPrice}>{item.price}$</Text>
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={() => handleSelectProduct(item)}
                >
                  <Icon name="plus" size={20} color="white" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        estimatedItemSize={200}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        ListFooterComponent={<View style={styles.footer} />}
      />
    );
  }
};

export default ProductList;

const styles = StyleSheet.create({
  productContainer: {
    flex: 1,
    margin: 10,
    backgroundColor: "#252A32",
    borderRadius: 20,
    overflow: "hidden",
    flexDirection: "column",
    height: 290,
  },
  productImage: {
    width: "100%",
    height: 150,
    alignSelf: "center",
    borderRadius: 30,
    backgroundColor: "white",
  },
  textContainer: {
    flex: 1,
    padding: 10,
  },
  productTitle: {
    color: "white",
    fontSize: 13,
    marginBottom: 5,
  },
  productCategory: {
    color: "white",
    fontSize: 13,
    marginBottom: 5,
  },
  productDescription: {
    color: "white",
    marginBottom: 10,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    backgroundColor: "#333333", 
  },
  productPrice: {
    color: "white",
    fontSize: 20,
  },
  addButton: {
    backgroundColor: "#DC3535",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    height: 0,
  },
});
