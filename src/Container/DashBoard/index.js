import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {widthPercentageToDP as wpx, heightPercentageToDP as hpx} from 'react-native-responsive-screen';
import { View, Text,StyleSheet,Image, ImageBackground, TouchableOpacity, ScrollView, FlatList} from 'react-native'


function DashBoard() {

  const navigation=useNavigation();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const teacherList=[

    {
      name:"Anoop",
      designation:"Software Engineer",
      teacherImage:require('../../../assets/DashBoard/mathTeacher.jpg')
    },
    {
      name:"Mahendra",
      designation:"Software Engineer",
      teacherImage:require('../../../assets/DashBoard/scienceTeacher.jpg')
    },
    {
      name:"Sumit",
      designation:"Software Engineer",
      teacherImage:require('../../../assets/DashBoard/childTeacher.jpg')
    },
    {
      name:"Adarsh",
      designation:"Software Engineer",
      teacherImage:require('../../../assets/DashBoard/scienceTeacher.jpg')
    },
    {
      name:"Varsha",
      designation:"Software Engineer",
      teacherImage:require('../../../assets/DashBoard/mathTeacher.jpg')
    }
  ]

  useEffect(() => {
    _retrieveData();
  }, [])

  // get Login data start
  const _retrieveData = async () => {
    try {
      const loginData = JSON.parse(await AsyncStorage.getItem('login'));


      if (loginData !== null) {

        setUserName(loginData.username);
        setPassword(loginData.password);

      }
    } catch (error) {
      // Error retrieving data
      console.log("error show");
    }
  };
   // get Login data End

   //render teacherList

   const renderTeacherList=(item)=>{

    return(
     
      <Image
       source={item.teacherImage}
       style={{width:wpx(45),height:hpx(50),resizeMode:'contain',marginLeft:10}}
      />
    
    )
   }
  return (
    <View style={DashBoardStyle.DashBoradContainer}>
      
      <ImageBackground
       source={require('../../../assets/LoginScreen/headerImage.png')}
       style={DashBoardStyle.DashBoardheaderView}
      >
    
        <TouchableOpacity 
         onPress={()=>{
          navigation.goBack();
         }}
        >
        <Image 
         source={require('../../../assets/LoginScreen/menu.png')}
         style={DashBoardStyle.sideBarImage}
        />
        </TouchableOpacity>
        <View>
          <Text style={{color:"white",fontSize:15}}>Hello, {userName}</Text>
        </View>
       <TouchableOpacity>
         <Image
          source={require('../../../assets/LoginScreen/searchIcon.png')}
          style={{width:25,height:25,tintColor:"white"}}
         />
       </TouchableOpacity>
           
      </ImageBackground>
     <ScrollView contentContainerStyle={DashBoardStyle.mainContainer}>

       <ImageBackground
         source={require('../../../assets/DashBoard/study.jpg')}
         style={{width:wpx("100%"),height:hpx(40),borderRadius:20,marginHorizontal:10}}
       
       
       />
       <View style={{}}>
        <Text>Teacher List</Text>

        <FlatList 
         horizontal
         style={{marginTop:-30}}
          data={teacherList}
          renderItem={({item,index})=>
           renderTeacherList(item)
          }
         
        />
       </View>
        {/* <TouchableOpacity style={DashBoardStyle.cardContainer}>
            <View style={{}}>
              <Image
               source={require('../../../assets/LoginScreen/Homework.png')}
               style={{width:50,height:50}}
              />
            </View>
            <View style={{marginTop:10,marginRight:10}}>
              <Text style={{fontSize:22,color:"#194880"}}>Student Homework</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={DashBoardStyle.cardContainer}>
            <View style={{}}>
              <Image
               source={require('../../../assets/LoginScreen/Homework.png')}
               style={{width:50,height:50}}
              />
            </View>
            <View style={{marginTop:10,marginRight:10}}>
              <Text style={{fontSize:22,color:"#194880"}}>Student Achievement</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={DashBoardStyle.cardContainer}>
            <View style={{}}>
              <Image
               source={require('../../../assets/LoginScreen/Homework.png')}
               style={{width:50,height:50}}
              />
            </View>
            <View style={{marginTop:10,marginRight:10}}>
              <Text style={{fontSize:22,color:"#194880"}}>Time Table</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={DashBoardStyle.cardContainer}>
            <View style={{}}>
              <Image
               source={require('../../../assets/LoginScreen/Homework.png')}
               style={{width:50,height:50}}
              />
            </View>
            <View style={{marginTop:10,marginRight:10}}>
              <Text style={{fontSize:22,color:"#194880"}}>Attendance</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={DashBoardStyle.cardContainer}>
            <View style={{}}>
              <Image
               source={require('../../../assets/LoginScreen/Homework.png')}
               style={{width:50,height:50}}
              />
            </View>
            <View style={{marginTop:10,marginRight:10}}>
              <Text style={{fontSize:22,color:"#194880"}}>Result</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={DashBoardStyle.cardContainer}>
            <View style={{}}>
              <Image
               source={require('../../../assets/LoginScreen/Homework.png')}
               style={{width:50,height:50}}
              />
            </View>
            <View style={{marginTop:10,marginRight:10}}>
              <Text style={{fontSize:22,color:"#194880"}}>News</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={DashBoardStyle.cardContainer}>
            <View style={{}}>
              <Image
               source={require('../../../assets/LoginScreen/Homework.png')}
               style={{width:50,height:50}}
              />
            </View>
            <View style={{marginTop:10,marginRight:10}}>
              <Text style={{fontSize:22,color:"#194880"}}>Today Class Topic</Text>
            </View>
        </TouchableOpacity> */}
     
     </ScrollView>
     
    </View>
  )
}

const DashBoardStyle=StyleSheet.create({
  DashBoardheaderView:{
    //  backgroundColor:"#194880",
     height:hpx('20%'),
     width:wpx('100%'),
     justifyContent:"space-between",
     paddingTop:30,
     flexDirection:"row",
     paddingHorizontal:10,
     
     
  },
  sideBarImage:{
    width:40,
    height:40,
    tintColor:"white"
  },
  DashBoradContainer:{
    flex:1,
    // padding:20
  },
  mainContainer:{
    backgroundColor:"#F1F9FF",
    // flex:1,
    
    marginTop:2,
    marginRight:10,
    
    // alignItems:"center",
  },
  cardContainer:{
    width:340,
    backgroundColor:"white",
    marginTop:30,
    borderWidth:1,
    borderColor:"#70707033",
    paddingHorizontal:10,
    paddingVertical:10,
    borderRadius:10,
    flexDirection:"row",
    justifyContent:"space-between"
  }
})
export default DashBoard;