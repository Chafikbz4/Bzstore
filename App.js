import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import Favorite from "./screens/Favorite";
import Cart from "./screens/Cart";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
import { Provider } from "react-redux";
import { store } from "./Store/store";
import { DataProvide } from "./contexts/ProductCartContext";
import Productdetail from "./screens/Productdetail";
/* This is the buttom tabnavigation*/

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false, // Hide the header on all screens within this navigator
      tabBarStyle: { backgroundColor: "black" },
      tabBarActiveTintColor: "#DC3535",
      tabBarInactiveTintColor: "gray",
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === "Home") {
          iconName = "home";
          return <Ionicons name={iconName} size={size} color={color} />;
        } else if (route.name === "Favorite") {
          iconName = "heart";
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        } else if (route.name === "Cart") {
          iconName = "cart";
          return <Ionicons name={iconName} size={size} color={color} />;
        }
      },
    })}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Favorite" component={Favorite} />
    <Tab.Screen name="Cart" component={Cart} />
  </Tab.Navigator>
);

export default function App() {
  const [fontsLoaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null; // Display loading indicator while fonts are loading
  }

  return (
    <>
      <StatusBar style="light" animated={true} />
      <Provider store={store}>
        <DataProvide>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Main"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="Main" component={TabNavigator} />
              <Stack.Screen name="Productdetail" component={Productdetail} />
            </Stack.Navigator>
          </NavigationContainer>
        </DataProvide>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
