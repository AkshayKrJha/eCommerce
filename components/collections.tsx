import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { router } from "expo-router";

const Collections = ({ collections }: { collections: any }) => {
  const {
    collectionDescription,
    collectionProducts,
    collectionTitle,
    collectionView,
    product,
    productAmount,
    productImage,
    productTitle,
  } = styles;
  return (
    <>
      {collections &&
        collections.map((c: any, i: any) => {
          return (
            <View key={i} style={collectionView}>
              <Text style={collectionTitle}>{c.node.title}</Text>
              <Text style={collectionDescription}>{c.node.description}</Text>
              {/* Collection products */}
              <View style={collectionProducts}>
                {c &&
                  c.node.products.edges.map((p: any, i: any) => {
                    return (
                      <TouchableOpacity
                        key={i}
                        style={product}
                        onPress={() => {
                          router.navigate({
                            pathname: "product",
                            params: { product: JSON.stringify(p) },
                          });
                        }}
                      >
                        <Text style={productTitle}>{p.node.title}</Text>
                        <Image
                          style={productImage}
                          resizeMode="contain"
                          source={{ uri: p.node.featuredImage.url }}
                        ></Image>
                        <Text style={productAmount}>
                          {p.node.variants.edges[0].node.price.amount}{" "}
                          {p.node.variants.edges[0].node.price.currencyCode}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
              </View>
            </View>
          );
        })}
    </>
  );
};

const styles = StyleSheet.create({
  collectionTitle: {
    fontWeight: "bold",
    padding: "3%",
    fontSize: 30,
    alignSelf: "center",
  },
  collectionView: { padding: "2%" },
  collectionDescription: { padding: "2%" },
  collectionProducts: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    // backgroundColor: "#0f0",
    flexWrap: "wrap",
  },
  product: { alignItems: "center" },
  productTitle: { fontWeight: "bold", padding: "1%" },
  productImage: { height: 250, width: 250 },
  productAmount: { fontWeight: "bold", padding: "1%" },
});
export default Collections;
