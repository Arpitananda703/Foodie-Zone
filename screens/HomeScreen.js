import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import Carousel from "../components/Carousel";
import FoodTypes from "../components/FoodTypes";
import QuickFood from "../components/QuickFood";
import hotels from "../data/hotels";
import restaurants from "../data/restaurants";
// Icons
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import MenuItem from "../components/MenuItem";
import MenuItem1 from "../components/MenuItem1";

const HomeScreen = ({navigation}) => {
  const data = hotels;
  const data1 = restaurants;

  return (
    <ScrollView style={{ marginTop:45 }}>
      <View style={{flexDirection:'row'}}>
        <Text style={{fontWeight:'900', fontSize:30,marginVertical:10,marginLeft:15}}>Foodie Zone</Text>
        <TouchableOpacity style={{borderColor:'black',borderWidth:1,borderRadius:10,marginLeft:140,eight:50,width:55,left:'85%',justifyContent:'center',alignItems:'center', }}
          onPress={()=>{navigation.navigate("Profile")}}>
          <Image source={{uri: 'https://cdn-icons-png.freepik.com/256/15675/15675918.png?uid=R108083946&ga=GA1.1.1628448380.1714161199&semt=ais_hybrid'}} 
                  style={{resizeMode:'contain',width:45,height:55}} />
        </TouchableOpacity>
      </View>
      {/* Search Bar */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderWidth: 1,
          marginBottom: 10,
          marginTop:5,
          padding:10,
          borderColor: "#C0C0C0",
          borderRadius: 10,
        }}
      >
        <TextInput
          style={{ fontSize: 14 }}
          placeholder="Search for Restaurant item or more"
        />
        <AntDesign name="search1" size={24} color="#f0b639" />
      </View>

      {/* Image Slider Component */}
      <Carousel />

      {/* Food Item Types */}
      <FoodTypes />

      {/* Quick Food Component */}
      <QuickFood />

      {/* Filter Buttons */}
      {/* <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Pressable
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#D0D0D0",
            padding: 10,
            borderRadius: 20,
            width: 120,
          }}
        >
          <Text style={{ marginRight: 6 }}>Filter</Text>
          <Ionicons name="filter" size={20} color="black" />
        </Pressable>
        <Pressable
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#D0D0D0",
            padding: 10,
            borderRadius: 20,
            width: 120,
          }}
        >
          <Text style={{ paddingRight: 2 }}>Sort By</Text>
          <MaterialIcons name="arrow-drop-down" size={24} color="black" />
        </Pressable>
        <Pressable
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#D0D0D0",
            padding: 10,
            borderRadius: 20,
            width: 120,
          }}
        >
          <Text>Fast Delivery</Text>
        </Pressable>
      </View> */}

      {data.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
