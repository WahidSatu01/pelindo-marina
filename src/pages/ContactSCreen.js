import { Text, View, Image, FlatList, TextInput } from "react-native";

const ContactScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: "center" }}>
        <Image
          style={{ width: 400, height: 200 }}
          resizeMode={"stretch"}
          source={require("../assets/images/headerbg.jpg")}
        />
        <View
          style={{
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 80,
          }}
        >
          <Text style={{ fontSize: 30, color: "white", fontWeight: "bold" }}>
            We'd love to hear from you
          </Text>
          <Text style={{ fontSize: 12, color: "white" }}>
            Have a question or comment? We would love to hear from you
          </Text>
        </View>
      </View>

      <View style={{ alignItems: "center", paddingTop: 25 }}>
        <Text style={{ fontSize: 20 }}>Your feedback is important to us</Text>
        <Text style={{ fontSize: 12 }}>
          It give us valueable insight, which allows us
        </Text>
        <Text style={{ fontSize: 12 }}>
          to continuously improve and serve you better
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          paddingTop: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ paddingRight: 60 }}>
          <Text>Firt Name</Text>
          <TextInput style={{ borderWidth: 1, paddingLeft: 130 }}></TextInput>
        </View>
        <View>
          <Text>Last Name</Text>
          <TextInput style={{ borderWidth: 1, paddingLeft: 130 }}></TextInput>
        </View>
      </View>
    </View>
  );
};

export default ContactScreen;
