import { Image, ScrollView, StyleSheet, View } from "react-native";
// import { request, gql } from "graphql-request";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useEffect, useState } from "react";
import Collections from "@/components/collections";

const client = new ApolloClient({
  uri: "https://mock.shop/api",
  cache: new InMemoryCache(),
});

// Setting number of collections, products, and variants, as variables

const numCollections = 2,
  numProducts = 2,
  numVariants = 3;

// Querying for collections, products, and variants through graphql

const query = gql`
  {
    collections(first: ${numCollections}) {
      edges {
        cursor
        node {
          id
          handle
          title
          description
          image {
            id
            url
          }
          products(first: ${numProducts}) {
            edges {
              node {
                id
                title
                description
                featuredImage {
                  id
                  url
                }
                variants(first: ${numVariants}) {
                  edges {
                    cursor
                    node {
                      id
                      title
                      image {
                        url
                      }
                      price {
                        amount
                        currencyCode
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const getCollections = async () => {
  // const response = await request("https://mock.shop/api", query);
  const response = await client.query({ query });
  // console.log(response.collections);
  console.log(
    response.data.collections.edges[0].node.products.edges[0].node.variants
      .edges[0].node.price.amount
  );
  return { collections: response?.data?.collections?.edges };
};

const Home = () => {
  const [collections, setCollections]: any = useState(null);

  const { rootView, rootScroll, banner } = styles;

  // getting the collection on first render

  useEffect(() => {
    (async () => {
      setCollections((await getCollections()).collections);
    })();
  }, [getCollections, setCollections]);

  return (
    <View style={rootView}>
      <ScrollView contentContainerStyle={rootScroll}>
        {/* Banner image */}
        <Image
          style={banner}
          resizeMode="stretch"
          source={require("../assets/images/th.jpg")}
        />
        <Collections collections={collections} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  rootScroll: {
    flex: 1,
    alignItems: "center",
  },
  banner: { height: "80%", width: "100%" },
});

export default Home;
