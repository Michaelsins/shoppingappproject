
import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, FlatList } from "react-native";
import { Ionicons, FontAwesome, AntDesign, MaterialIcons, } from "@expo/vector-icons";
import { render } from "react-dom";


export default function Cart(params){
    const navigation = params.navigation;
    return(
        <View style ={{backgroundColor: "white", flex: 1,}}>
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
            <Text style={{color: "white", fontWeight: "bold", fontSize: 16}}>MY CART</Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
            </View>
            </View>


        <View style={{ paddingVertical: 5, paddingHorizontal: 15}}>
        <TouchableOpacity
        
          style={{
            //padding: 10,
            height: 130,
            width: 340,
            //paddingRight: 25,
            //marginTop: 2,
            //marginBottom: 10,
            alignItems: "center",
            borderRadius: 5,
            flexDirection: "row",
            // borderColor: "#ff8400",
            borderWidth: 1,
            borderColor: "#e0e0e0",
          }}
        >
          <Image
          style={{
            //borderRadius: 20,
            //marginBottom: 60,
            width: 100,
            height: 100,
            borderRadius: 5,
            marginLeft: 10,
            borderColor: "#ff8400",
            borderWidth: 1,
          }}
          source={{
            uri: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F38%2F2021%2F03%2F31%2Fnissan-maxima-75okQOkXKwU9wa8QIVZq0h-2000.jpg",
          }}
        />
        <View style={{paddingLeft: 30, }}>
          <Text style = {{color: "#black", fontWeight: "500", fontSize: 16, }}>Honda, 2021 Model</Text>
          <Text style = {{color: "#ff8400"}}>GHC 300,000.00</Text>

          <View style={{flexDirection: "row", fontSize: 16, paddingTop: 10}}>
          <Text style={{fontWeight: "bold"}}>Number:</Text>
          <Text style={{paddingHorizontal: 15}}>3</Text>
          </View>
        </View>

        </TouchableOpacity>
        </View>

        <View style={{ paddingVertical: 5, paddingHorizontal: 15}}>
        <TouchableOpacity
          
          style={{
            //padding: 10,
            height: 130,
            width: 340,
            //paddingRight: 25,
            //marginTop: 2,
            //marginBottom: 10,
            alignItems: "center",
            borderRadius: 5,
            flexDirection: "row",
            // borderColor: "#ff8400",
            borderWidth: 1,
            borderColor: "#e0e0e0",
          }}
        >
          <Image
          style={{
            //borderRadius: 20,
            //marginBottom: 60,
            width: 100,
            height: 100,
            borderRadius: 5,
            marginLeft: 10,
            borderColor: "#ff8400",
            borderWidth: 1,
          }}
          source={{
            uri: "https://images.unsplash.com/photo-1568844293986-8d0400bd4745?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym13JTIwY2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
          }}
        />
        <View style={{paddingLeft: 30, }}>
          <Text style = {{color: "#black", fontWeight: "500", fontSize: 16, }}>BMW M4 Coupe</Text>
          <Text style = {{color: "#ff8400"}}>GHC 500,000.00</Text>

          <View style={{flexDirection: "row", fontSize: 16, paddingTop: 10}}>
          <Text style={{fontWeight: "bold"}}>Number:</Text>
          <Text style={{paddingHorizontal: 15}}>1</Text>
          </View>
        </View>

        </TouchableOpacity>

        <TouchableOpacity

          style={{
            textAlign: "center",
            padding: 10,
            height: 40,
            paddingHorizontal: 115,
            marginTop: 20,
            alignItems: "center",
            borderRadius: 5,
            flexDirection: "row",
            backgroundColor: "#ff8400",
          }}
        >
          <Text style={{ paddingLeft: 10, color: "white", fontWeight: "bold" }}>MAKE PAYMENT</Text>
        </TouchableOpacity>
        </View>
        </View>
    )
}