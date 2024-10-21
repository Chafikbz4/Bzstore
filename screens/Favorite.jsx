import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { ProductCartContext } from "../contexts/ProductCartContext";
import Icon from "react-native-vector-icons/Ionicons";
import NavBar from "../component/NavBar";

const Products = () => {
  const { productfavorite } = useContext(ProductCartContext);
  const [slectProductCart, setSelectProductCart] = useState([]);
  useEffect(() => {
    if (
      productfavorite &&
      !slectProductCart.some((item) => item.id === productfavorite.id)
    ) {
      setSelectProductCart((prev) => [...prev, productfavorite]);
    } else if (
      productfavorite &&
      slectProductCart.some((item) => item.id === productfavorite.id)
    ) {
      setSelectProductCart((prev) =>
        prev.filter((item) => item.id !== productfavorite.id)
      );
    }
  }, [productfavorite]);

  const DeleteProduct = (index) => {
    let newproducts = [...slectProductCart];
    newproducts.splice(index, 1);
    setSelectProductCart(newproducts);
  };
  if (slectProductCart.length === 0) {
    return (
      <View style={styles.container}>
        <NavBar
          IconComponent={<Icon name="arrow-back" color="white" size={20} />}
          title="Favorites"
        />
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={{ color: "white", fontSize: 23 }}>
            There are no Loved products
          </Text>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <NavBar
        IconComponent={<Icon name="arrow-back" color="white" size={20} />}
        title="Favorites"
      />
      <ScrollView>
        {slectProductCart.map((item, index) => (
          <View key={item.id} style={styles.item}>
            <TouchableOpacity
              style={{
                backgroundColor: "gray",
                borderRadius: 20,
                width: 40,
                top: -10,
                zIndex: 1,
                left: 330,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => DeleteProduct(index)}
            >
              <Icon name="heart" size={30} color="red" />
            </TouchableOpacity>
            <View style={{ flex: 1, flexDirection: "row", gap: 10 }}>
              <Image
                source={{ uri: item.images[0] }}
                style={{
                  backgroundColor: "white",
                  borderRadius: 30,
                  width: 100,
                  height: 100,
                  marginTop: 10,
                  marginBottom: 10,
                  marginLeft: 10,
                }}
              />
              <View style={{ margin: 15, width: "90%" }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    width: 200,
                    color: "white",
                    fontSize: 16,
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    width: 200,
                    fontSize: 16,
                    marginTop: 5,
                    color: "white",
                  }}
                  numberOfLines={3}
                >
                  {item.description}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 0,
    backgroundColor: "#0C0F14",
  },
  item: {
    width: "80%",
    backgroundColor: "#262B33",
    margin: 10,
    borderRadius: 30,
  },
});
