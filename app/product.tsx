import Variants from "@/components/variants";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Toast from "react-native-toast-message";

const Product = () => {
  const { product } = useLocalSearchParams();
  console.log(product);

  const p: any = product;
  const PRODUCT = p ? JSON.parse(p) : null;
  const [selectedVariant, setSelectedVariant] = useState();

  const getOpacity = (variant: any) => {
    if (variant === selectedVariant) return 0.5;
    else return 1;
  };

  const {
    rootView,
    rootScroll,
    title,
    description,
    productView,
    featuredImage,
    cartButton,
    cartText,
  } = styles;

  return (
    <View style={rootView}>
      {PRODUCT && (
        <ScrollView contentContainerStyle={rootScroll}>
          <Text style={title}>{PRODUCT?.node?.title}</Text>
          <Text style={description}>{PRODUCT?.node?.description}</Text>
          <View style={productView}>
            {/* Displaying featured image of product */}
            <Image
              style={featuredImage}
              source={{ uri: PRODUCT?.node?.featuredImage?.url }}
              resizeMode="contain"
            />
            <Variants
              PRODUCT={PRODUCT}
              selectedVariant={selectedVariant}
              setSelectedVariant={setSelectedVariant}
              getOpacity={getOpacity}
            />
            {/* Add to cart button */}
            <Pressable
              style={{ ...cartButton, opacity: selectedVariant ? 1 : 0.5 }}
              disabled={!selectedVariant}
              onPress={() => {
                Toast.show({ type: "info", text1: selectedVariant });
                console.log("Button Clicked");
              }}
            >
              <Text style={cartText}>ADD TO CART</Text>
            </Pressable>
          </View>
        </ScrollView>
      )}
      <Toast />
    </View>
  );
};

const styles = StyleSheet.create({
  rootView: {
    height: "100%",
    width: "100%",
    padding: "2%",
  },
  rootScroll: {
    flex: 1,
    alignItems: "center",
    //   justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    alignSelf: "center",
  },
  description: { padding: "1%" },
  productView: {
    // flexDirection: "row",
    // flexWrap: "wrap",
    justifyContent: "space-evenly",
    flex: 1,
    alignItems: "center",
  },
  featuredImage: { flex: 1, width: 450 },
  cartButton: {
    backgroundColor: "#000",
    // flex: 0.5,
    padding: "1%",
    margin: "5%",
    width: "50%",
    //   height: 30,
    //   width: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  cartText: { padding: "1%" },
});

export default Product;
