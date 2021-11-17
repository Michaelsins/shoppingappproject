import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, FlatList } from "react-native";
import { Ionicons, FontAwesome, AntDesign, MaterialIcons, } from "@expo/vector-icons";
import { render } from "react-dom";

export default function Home(params) {
    const navigation = params.navigation;
      return (
        <View style ={{backgroundColor: "white", flex: 1}}>
        <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "#ff8400",
              alignItems: "center",
              paddingTop: 15,
              paddingBottom: 10,
              paddingHorizontal: 15,
            }}
          >
            <Ionicons name="arrow-back-outline" size={24} color="white" />
            {/* <FontAwesome name="motorcycle" size={24} color="white" /> */}
            <Text style={{color: "white", fontWeight: "bold", fontSize: 16}}>DETAILS</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
              <View style = {{paddingLeft: 5,}}>
                <Ionicons name="ios-cart-outline" size={20} color="white" />
              </View>
            </View>
        </View>


        <View
          style={{
            backgroundColor: "white",
            flex: 1,
          }}>  
          <Image
          style={{
            width: 375,
            height: 300,
            borderBottomColor: "#e0e0e0", borderBottomWidth: 1,
            //borderColor: "#ff8400",
            //borderWidth: 1,
          }}
          source={{
            uri: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F38%2F2021%2F03%2F31%2Fnissan-maxima-75okQOkXKwU9wa8QIVZq0h-2000.jpg",
          }}
        />

            <View style={{paddingLeft: 15, paddingTop: 10, borderBottomColor: "#e0e0e0", borderBottomWidth: 1, paddingBottom: 10,}}> 
                <Text style = {{color: "#black", fontWeight: "600", fontSize: 20, flexDirection: "row", paddingBottom: 1,}}>Honda, 2021 Model</Text>
                <Text style = {{color: "#ff8400", }}>GHC 300,000.00</Text>
            </View>


            <View style={{padding: 15,paddingTop: 10, paddingBottom: 10,  borderBottomColor: "#e0e0e0", borderBottomWidth: 1,}}>
                <Text style = {{color: "#black", fontWeight: "600", fontSize: 20, flexDirection: "row", paddingBottom: 10,}}>About</Text>
                <Text style={{flexWrap: "wrap"}}>A very comfy vehicle you would love to ride in everyday of your life</Text>

                <View style={{flexDirection: "row",}}>
                    <Text style={{fontWeight: "500", color: "#8a8a8a", paddingTop: 5, fontSize: 16}}>Type:</Text>
                    <Text style={{fontWeight: "500", color: "#black", paddingTop: 5, fontSize: 16, paddingLeft: 52,}}>Vehicles</Text>
                </View>

                <View style={{flexDirection: "row",}}>
                    <Text style={{ color: "#8a8a8a", paddingTop: 5, fontSize: 16}}>Dimensions:</Text>
                    <Text style={{ paddingTop: 5, fontSize: 16, paddingLeft: 45,}}>100x80x50 cm</Text>
                </View>
            </View>

            <View style={{marginHorizontal: 15}}>
                <TouchableOpacity
                    onPress={() => {
                    navigation.navigate("Cart");
                    }}
                style={{
                textAlign: "center",
                padding: 10,
                height: 40,
                paddingHorizontal: 115,
                marginTop: 20,
                alignItems: "center",
                borderRadius: 2,
                flexDirection: "row",
                backgroundColor: "#ff8400",
            }}
            >
                <Text style={{ paddingLeft: 10, color: "white",  }}>GO TO CART</Text>
                </TouchableOpacity>
            </View>

        </View>
        </View>
      );
  
    }