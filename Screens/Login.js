
import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

export default function Login(params) {
    const navigation = params.navigation;
    return (
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          justifyContent: "center",
          backgroundColor: "white",
          alignItems: "center",
        }}
      >
        <Image
          style={{
            borderRadius: 20,
            marginBottom: 60,
            width: 200,
            height: 200,
          }}
          source={{
            uri: "https://image.freepik.com/free-photo/smiling-young-delivery-man-gesturing-ok-sign-isolated-orange-wall-with-copy-space_141793-119793.jpg",
          }}
        />
        <Text style={{ fontSize: 20, color: "black" }}>Welcome to</Text>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Euphoria</Text>
        <View style={{}}>
          <TextInput
            style={{
              textAlign: "center",
              padding: 10,
              paddingHorizontal: 60,
              marginTop: 30,
              borderRadius: 10,
              borderWidth: 0.7,
            }}
            placeholder="Enter Email"
          />
        </View>
        <View style={{ marginTop: 10,}}>
          <TextInput
            secureTextEntry={true}
            onChangeText={(
              e
            )=> {
              console.log(e)
            }}
            style={{
              textAlign: "center",
              padding: 10,
              paddingHorizontal: 60,
              borderRadius: 10,
              borderWidth: 0.7, 
            }}
            placeholder="Enter Password"
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={{
            textAlign: "center",
            padding: 10,
            height: 40,
            paddingHorizontal: 115,
            marginTop: 20,
            alignItems: "center",
            borderRadius: 10,
            flexDirection: "row",
            backgroundColor: "#ff8400",
          }}
        >
          {/* <AntDesign name="google" size={24} color="white" /> */}
          <Text style={{ paddingLeft: 10, color: "white", fontWeight: "bold" }}>Login</Text>
          <MaterialIcons name="navigate-next" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={{
            padding: 10,
            height: 40,
            paddingHorizontal: 80,
            marginTop: 10,
            alignItems: "center",
            borderRadius: 10,
            flexDirection: "row",
            borderColor: "#ff8400",
            borderWidth: 2,
            backgroundColor: "white",
          }}
        >
          <AntDesign name="google" size={18} color="#ff8400" />
          <Text style={{ paddingLeft: 10, color: "#ff8400" }}>Login with Google</Text>
        </TouchableOpacity>
        <Text style={{ textAlign: "center", paddingTop: 20, color: "grey" }}>No account yet?<Text onPress={()=> {navigation.navigate("Sign_Up");}} style={{ paddingLeft: 10, color: "#ff8400" , fontWeight: "bold"}}>Sign Up</Text></Text>
      </View>
    );
  }