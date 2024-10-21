import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  GetProduct,
  GetTshert,
  GetPontalon,
  GetShemise,
  GetCostuume,
  GetVest,
  GetSheseur,
  GetEditionLimiter,
} from "../Store/Actions/ProductAction";
import ProductList from "../component/ProductList";
import HeaderHome from "../component/HeaderHome";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [CategoryProduct, SetCategoryProduct] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All"); // To track selected category
  const [Favorites, setFavorites] = useState({});
  const products = useSelector((state) => state.productsData.products);
  const Tshert = useSelector((state) => state.productsData.Tshert);
  const Pontalon = useSelector((state) => state.productsData.Pantalon);
  const Chemise = useSelector((state) => state.productsData.Chemise);
  const Costume = useSelector((state) => state.productsData.Costume);
  const Vest = useSelector((state) => state.productsData.Vest);
  const Sheseur = useSelector((state) => state.productsData.Sheseur);
  const EditionLimiter = useSelector(
    (state) => state.productsData.EditionLimiter
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        await Promise.all([
          dispatch(GetProduct()),
          dispatch(GetTshert()),
          dispatch(GetPontalon()),
          dispatch(GetShemise()),
          dispatch(GetCostuume()),
          dispatch(GetVest()),
          dispatch(GetSheseur()),
          dispatch(GetEditionLimiter()),
        ]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (products) {
      SetCategoryProduct(products);
    }
  }, [products]);

  const GetProductCategory = (category) => {
    setSelectedCategory(category); // Set the selected category

    switch (category) {
      case "All":
        SetCategoryProduct(products);
        break;
      case "T-shirt":
        SetCategoryProduct(Tshert);
        break;
      case "Pantalon":
        SetCategoryProduct(Pontalon);
        break;
      case "Chemise":
        SetCategoryProduct(Chemise);
        break;
      case "Veste":
        SetCategoryProduct(Vest);
        break;
      case "Chaussures":
        SetCategoryProduct(Sheseur);
        break;
      case "Costume":
        SetCategoryProduct(Costume);
        break;
      case "Édition Limitée":
        SetCategoryProduct(EditionLimiter);
        break;
      default:
        SetCategoryProduct(products);
        break;
    }
  };

  const searchHandler = (value) => {
    if (value) {
      const searchData = CategoryProduct.filter((nft) =>
        nft.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(searchData);
    } else {
      setFilteredProducts([]);
    }
  };

  const categoryButtons = [
    { label: "All", width: 70 },
    { label: "T-shirt", width: 100 },
    { label: "Pantalon", width: 120 },
    { label: "Chemise", width: 120 },
    { label: "Veste", width: 110 },
    { label: "Chaussures", width: 120 },
    { label: "Costume", width: 120 },
    { label: "Édition Limitée", width: 200 },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <HeaderHome SearchFunc={searchHandler} />
        <ScrollView
          horizontal={true}
          style={styles.scrollView}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
        >
          {categoryButtons.map((category) => (
            <TouchableOpacity
              key={category.label}
              style={{
                backgroundColor:
                  selectedCategory === category.label ? "#DC3535" : "#52555A", // Highlight selected category
                height: 40,
                margin: 10,
                width: category.width + 10,
                borderRadius: 20,
              }}
              onPress={() => GetProductCategory(category.label)}
            >
              <Text
                style={{ color: "white", fontSize: 25, textAlign: "center" }}
              >
                {category.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ProductList
        productslist={
          filteredProducts.length > 0 ? filteredProducts : CategoryProduct
        }
        loade={isLoading}
        Favorites={Favorites}
        setFavorites={setFavorites}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#0C0F14",
    padding: 20,
  },
  scrollView: {
    flexDirection: "row",
    marginTop: 20,
  },
});
