import React from 'react'
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, Dimensions } from 'react-native'
import CartScreen from './CartScreen'

const screen_width=Dimensions.get('window').width;

export default Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={{ uri: 'https://cdn-icons-png.freepik.com/256/15675/15675918.png?uid=R108083946&ga=GA1.1.1628448380.1714161199&semt=ais_hybrid' }}
            
          />

          <Text style={styles.name}>Arpita Nanda</Text>
          <Text style={styles.userInfo}>arpita_nanda@gmail.com</Text>
          <Text style={styles.userInfo}>Talcher</Text>
        </View>
      </View>

      <View style={{marginHorizontal:40,flexDirection:'column',marginVertical:30,gap:30}}>
        <Text style={{fontWeight:'bold',fontSize:20}}>Account Setting's</Text>

        <TouchableOpacity onPress={()=>navigation.navigate("Cart")}
            style={{width:90,height:40,flexDirection:'row',gap:10}}>
            <Image source={{uri:'https://cdn-icons-png.freepik.com/256/5451/5451746.png?uid=R108083946&ga=GA1.1.1628448380.1714161199&semt=ais_hybrid'}} 
            style={{width:30,height:30}}
            />
            <Text style={{fontWeight:'600',fontSize:16}}>My Cart</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate("")}
            style={{width:90,height:40,flexDirection:'row',gap:10}}>
              <Image source={{uri:'https://cdn-icons-png.freepik.com/256/1295/1295181.png?uid=R108083946&ga=GA1.1.1628448380.1714161199&semt=ais_hybrid'}} 
            style={{width:30,height:30}}
            />
            <Text style={{fontWeight:'600',fontSize:16}}>Addresses</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate("Cart")}
            style={{width:90,height:40,flexDirection:'row',gap:10}}>
              <Image source={{uri:'https://cdn-icons-png.freepik.com/256/5003/5003704.png?uid=R108083946&ga=GA1.1.1628448380.1714161199&semt=ais_hybrid'}} 
            style={{width:30,height:30}}
            />
            <Text style={{fontWeight:'600',fontSize:16}}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate("EditProfile")}
            style={{width:90,height:40,flexDirection:'row',gap:10}}>
              <Image source={{uri:'https://cdn-icons-png.freepik.com/256/3524/3524636.png?uid=R108083946&ga=GA1.1.1628448380.1714161199&semt=ais_hybrid'}} 
            style={{width:30,height:30}}
            />
            <Text style={{fontWeight:'600',fontSize:16}}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={{left:'30%',marginVertical:90,flexDirection:'column',gap:20,}}>
        <Text style={{fontSize:17,fontWeight:'bold'}}>You can reach to us 24/7</Text>
        <TouchableOpacity><Text style={{fontSize:17,fontWeight:'bold'}}>       📞   Contact Us </Text></TouchableOpacity>
        <Text style={{fontSize:15,top:60,bottom:50,right:'5%'}}>all rights reserved to ©️Foodie Zone</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop:StatusBar.currentHeight,
    },
  header: {
    backgroundColor: '#DCDCDC',
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: '#000000',
    fontWeight: '600',
  },
  userInfo: {
    fontSize: 16,
    color: '#778899',
    fontWeight: '600',
  },
  body: {
    height: 700,
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContent: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 5,
  },
  iconContent: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 5,
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 20,
  },
  info: {
    fontSize: 18,
    fontWeight:'bold',
    marginTop: 20,
  },
})