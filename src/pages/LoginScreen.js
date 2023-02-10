import {
  ImageBackground,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const LoginScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/images/begron.jpg")}
      style={{ flex: 1 }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Image
          source={require("../assets/images/logoppiwhite.png")}
          style={{ width: 135, height: 60 }}
        ></Image>
        <Text style={{ paddingTop: 30, fontSize: 40, color: "white" }}>
          {" "}
          BENOA MARINA
        </Text>
        <Text
          style={{
            paddingTop: 30,
            paddingBottom: 60,
            fontSize: 10,
            color: "white",
          }}
        >
          {" "}
          INFORMASI MARINA HIBURAN PARIWISATA PEMASARAN INDONESIA
        </Text>

        <View
          style={{
            flexDirection: "row",
            borderWidth: 1,
            borderRadius: 50,
            borderColor: "white",
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingLeft: 20,
            }}
          >
            <FontAwesome name="user" color="white" size={30} />
          </View>
          <TextInput
            style={{ paddingLeft: 85, paddingRight: 125 }}
            placeholder="Username"
            placeholderTextColor="white"
          ></TextInput>
        </View>

        <View style={{ paddingTop: 20, alignItems: "flex-end" }}>
          <View
            style={{
              flexDirection: "row",
              borderWidth: 1,
              borderRadius: 50,
              borderColor: "white",
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: 20,
              }}
            >
              <FontAwesome name="lock" color="white" size={30} />
            </View>
            <TextInput
              style={{ paddingLeft: 85, paddingRight: 125 }}
              placeholder="Password"
              placeholderTextColor="white"
            ></TextInput>
          </View>
          <TouchableOpacity>
            <Text style={{ paddingTop: 10, fontSize: 12, color: "white" }}>
              {" "}
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={{ paddingTop: 20 }}>
          <Text
            style={{
              backgroundColor: "white",
              paddingHorizontal: 20,
              paddingVertical: 10,
              color: "#1976d2",
              fontWeight: "bold",
              borderRadius: 20,
            }}
          >
            SIGN IN
          </Text>
        </TouchableOpacity>

        <View style={{ flexDirection: "row", paddingTop: 10 }}>
          <Text style={{ color: "white" }}>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={{ color: "white", fontWeight: "bold" }}> Sign</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("TabNavigator")}>
          <Text style={{ fontSize: 25, color: "white", paddingTop: 70 }}>
            Skip >
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
