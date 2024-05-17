import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";

const Variants = ({
  PRODUCT,
  selectedVariant,
  setSelectedVariant,
  getOpacity,
}: {
  PRODUCT: any;
  selectedVariant: any;
  setSelectedVariant: any;
  getOpacity: any;
}) => {
  const { variantsView, variantButton, variantImage, variantScroll } = styles;
  return (
    <View style={variantsView}>
      {/* Shows variants in horizontal scrollview */}
      <ScrollView horizontal={true} contentContainerStyle={variantScroll}>
        {PRODUCT?.node?.variants?.edges?.map((variant: any, i: any) => {
          return (
            <TouchableOpacity
              style={variantButton}
              key={i}
              onPress={() => {
                if (variant.node.title === selectedVariant)
                  setSelectedVariant(undefined);
                else setSelectedVariant(variant.node.title);
              }}
            >
              <Image
                style={{
                  ...variantImage,
                  opacity: getOpacity(variant.node.title),
                }}
                resizeMode="contain"
                source={{ uri: variant.node.image.url }}
              ></Image>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  variantsView: {
    flex: 1,
    alignItems: "center",
    //   flexWrap: "wrap",
  },
  variantScroll: {
    flex: 1,
    height: 300,
    width: 300,
    // justifyContent:"center",
    // alignItems:"center"
  },
  variantButton: { padding: "1%" },
  variantImage: {
    flex: 1,
    height: 200,
    width: 200,
    // padding:"5%",
  },
});
export default Variants;
