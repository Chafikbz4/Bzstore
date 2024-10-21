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

export default function Cart() {
  const { productSelect } = useContext(ProductCartContext);
  const [slectProductCart, setSelectProductCart] = useState([]);
  const lestailes = ["S", "M", "L"];
  const [counters, setCounters] = useState({}); // Track counters by product and size
  const [totale, settotale] = useState(0);
  useEffect(() => {
    if (
      productSelect &&
      !slectProductCart.some((item) => item.id === productSelect.id)
    ) {
      setSelectProductCart((prev) => [...prev, productSelect]);
      setCounters((prev) => ({
        ...prev,
        [productSelect.id]: { S: 1, M: 1, L: 1 },
      }));
    }
  }, [productSelect]);

  useEffect(() => {
    // Calculate the total whenever counters or slectProductCart changes
    let newTotal = 0;
    slectProductCart.forEach((item) => {
      lestailes.forEach((size) => {
        if (counters[item.id] && counters[item.id][size]) {
          newTotal += item.price * counters[item.id][size];
        }
      });
    });
    settotale(newTotal);
  }, [counters, slectProductCart]);

  const increase = (productId, size) => {
    setCounters((prev) => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        [size]: prev[productId][size] + 1,
      },
    }));
  };

  const decrease = (productId, size) => {
    setCounters((prev) => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        [size]: prev[productId][size] > 1 ? prev[productId][size] - 1 : 0,
      },
    }));
  };
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
          title="Cart"
        />
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={{ color: "white", fontSize: 23 }}>
            There are no selecting products
          </Text>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <NavBar
        IconComponent={<Icon name="arrow-back" color="white" size={20} />}
        title="Cart"
      />
      <ScrollView>
        {slectProductCart.map((item, index) => (
          <View key={item.id} style={styles.item}>
            <TouchableOpacity
              style={{
                backgroundColor: "red",
                borderRadius: 20,
                width: 40,
                top: -10,
                zIndex: 1,
                left: 330,
              }}
              onPress={() => DeleteProduct(index)}
            >
              <Icon name="remove" size={40} color="white" />
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
            <View style={{ marginBottom: 10 }}>
              {lestailes.map((size) => (
                <View key={size}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      margin: 8,
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        backgroundColor: "#0C0F14",
                        color: "white",
                        fontSize: 20,
                        width: 80,
                        padding: 3,
                        textAlign: "center",
                        borderRadius: 5,
                      }}
                    >
                      {size}
                    </Text>
                    <Text style={{ color: "white" }}>
                      ${(item.price * counters[item.id][size]).toFixed(2)}
                    </Text>
                    <TouchableOpacity
                      style={{
                        backgroundColor: "#DC3535",
                        width: 40,
                        height: 20,
                        textAlign: "center",
                        borderRadius: 7,
                      }}
                      onPress={() => decrease(item.id, size)}
                    >
                      <Icon
                        name="remove"
                        color="white"
                        size={20}
                        style={{ textAlign: "center" }}
                      />
                    </TouchableOpacity>
                    <Text
                      style={{
                        backgroundColor: "#0C0F14",
                        width: 50,
                        height: 30,
                        borderRadius: 5,
                        color: "white",
                        textAlign: "center",
                        fontSize: 20,
                      }}
                    >
                      {counters[item.id][size]}
                    </Text>
                    <TouchableOpacity
                      style={[
                        { marginRight: 15 },
                        {
                          backgroundColor: "#DC3535",
                          width: 40,
                          height: 20,
                          textAlign: "center",
                          borderRadius: 7,
                        },
                      ]}
                      onPress={() => increase(item.id, size)}
                    >
                      <Icon
                        name="add"
                        color="white"
                        size={20}
                        style={{ textAlign: "center" }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
      <View
        style={{
          backgroundColor: "#DC3535",
          width: "100%",
          height: 50,
          borderRadius: 20,
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          Totale is : ${totale.toFixed(2)}
        </Text>
      </View>
    </SafeAreaView>
  );
}

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
