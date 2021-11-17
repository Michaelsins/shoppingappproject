
import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Sign_Up(params) {
    const navigation = params.navigation;
    return (
      <View
        style={{
          backgroundColor: "white",
          flex: 1,
          paddingHorizontal: 20,
          justifyContent: "center",
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
        <Text style={{ fontSize: 20, color: "grey" }}>Create an account on</Text>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Euphoria</Text>
        <View style={{}}>
          <TextInput
            style={{
              textAlign: "center",
              padding: 10,
              marginTop: 30,
              borderRadius: 10,
              borderWidth: 0.7,
              paddingHorizontal: 60,
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
              borderRadius: 10,
              borderWidth: 0.7,
              paddingHorizontal: 60,
            }}
            placeholder="Enter Number"
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
              borderRadius: 10,
              borderWidth: 0.7,
              paddingHorizontal: 60,
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
            paddingHorizontal: 127,
            marginTop: 20,
            alignItems: "center",
            borderRadius: 10,
            flexDirection: "row",
            backgroundColor: "#ff8400",
          }}
        >
          <Text style={{ paddingLeft: 10, color: "white", fontWeight: "bold" }}>Sign Up</Text>
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
          <Text style={{ paddingLeft: 10, color: "#ff8400" }}>Sign Up with Google</Text>
        </TouchableOpacity>
        <Text style={{ textAlign: "center", paddingTop: 20, color: "grey" }}>Have an account already?<Text onPress={()=> {navigation.navigate("Login");}} style={{ paddingLeft: 10, color: "#ff8400" , fontWeight: "bold"}}>Login</Text></Text>
      </View>
    );
  }