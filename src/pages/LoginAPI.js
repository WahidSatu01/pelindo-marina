import React, { Component } from "react";
import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

class LoginAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  prosesLogin = () => {
    fetch("http://intra.pelindoproperti.co.id/api_ppi/res/auth/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.token) {
          Alert.alert("Login successful");
          this.props.navigation.reset({
            index: 0,
            routes: [{ name: "TabNavigator" }],
          });
        } else if (this.state.username === "") {
          Alert.alert("Enter Username !");
        } else if (this.state.password === "") {
          Alert.alert("Enter Password !");
        } else {
          Alert.alert("Check credentials");
        }
      })
      .catch((eror) => console.log(eror));
  };

  render() {
    return (
      <View style={{ backgroundColor: "black", flex: 1 }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="red"
          translucent={true}
        />
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text
            style={{
              color: "white",
              fontSize: 50,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Form Login
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <TextInput
            value={this.state.iduser}
            placeholder="Input ID User"
            placeholderTextColor="gray"
            onChangeText={(value) => this.setState({ username: value })}
            style={{
              color: "white",
              borderBottomWidth: 2,
              borderBottomColor: "white",
              marginHorizontal: 20,
              marginVertical: 15,
            }}
          ></TextInput>

          <TextInput
            value={this.state.passuser}
            placeholder="Input Password Anda"
            placeholderTextColor="gray"
            onChangeText={(value) => this.setState({ password: value })}
            style={{
              color: "white",
              borderBottomWidth: 2,
              borderBottomColor: "white",
              marginHorizontal: 20,
              marginVertical: 15,
            }}
            secureTextEntry={true}
          ></TextInput>

          <TouchableOpacity
            style={{
              backgroundColor: "crimson",
              marginHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 15,
              elevation: 5,
              marginTop: 10,
            }}
            onPress={() => this.prosesLogin()}
          >
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default LoginAPI;
