import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Home from "./home";

/**
 * This index page is the default route, which is fully spanned by home page
 */

export default function Index() {
  return (
    <View style={{ height: "100%", width: "100%" }}>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
        }}
      >
        <Home />
      </ScrollView>
    </View>
  );
}
