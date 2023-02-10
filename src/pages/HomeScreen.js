import { ImageBackground, Text, View, Image } from "react-native";

const HomeScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/images/begron.jpg")}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1, paddingTop: 70 }}>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              paddingLeft: 30,
              backgroundColor: "red",
            }}
          >
            <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
              Discover
            </Text>
            <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
              Indonesia Marina
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "white",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../assets/images/profil.jpg")}
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
              }}
            ></Image>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
