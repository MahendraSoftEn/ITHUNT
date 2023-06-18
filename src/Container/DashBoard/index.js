import React, { useEffect, useState } from "react";
import { Images } from "../../../utilities/Images";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { widthPercentageToDP as wpx, heightPercentageToDP as hpx } from 'react-native-responsive-screen';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { useSelector } from "react-redux";
import BlueHeader from "../../Component/BlueHeader";
import DashBoardHeader from "../../Component/DashBoardHeader";
import HorizontalImageList from "../../Component/HorizontalList";
import { COLORS } from "../../../utilities/Colors";



function RenderTeacherData(props) {

  console.log("props12==>", props)
  return (
    <View>
      <Text>{props.username}</Text>
    </View>
  )
}
function TeachingStaff(props) {

  const renderTeacherList = (item) => {

    return (
      <View >
        <Image
          source={item.teacherImage}
          style={{ width: wpx(45), height: hpx(50), resizeMode: 'contain', marginLeft: 10 }}
        />
      </View>

    )
  }

  return (
    <View>
      <Text>Teaching Staff</Text>
      <View style={{}}>  
        <FlatList
          horizontal
          data={props.data}
          renderItem={({ item, index }) =>
            renderTeacherList(item)
          }
        />
      </View>
    </View>
  )
}

function DashBoard() {


  const navigation = useNavigation();
  const TeacherData = [
    {
      name: "Lakshman Singh Chauhan",
      image: Images.userIcon,
      qualification: "MCA Qualified",
      experience: "12+ year"
    },
    {
      name: "Shalini Agrahari",
      image: Images.userIcon,
      qualification: "MCA Qualified",
      experience: "2+ year"
    },
    {
      name: "Varsha Shahu",
      image: Images.userIcon,
      qualification: "MCA Qualified",
      experience: "1+ year"
    },
    {
      name: "khushi Modanwal",
      image: Images.userIcon,
      qualification: "MCA Qualified",
      experience: "2+ year"
    }
  ]
  const teacherList = [

    {
      name: "Anoop",
      designation: "Software Engineer",
      teacherImage: Images.Math_Icon
    },
    {
      name: "Mahendra",
      designation: "Software Engineer",
      teacherImage: Images.Science_Icon
    },
    {
      name: "Sumit",
      designation: "Software Engineer",
      teacherImage: Images.CHILD_Teacher
    },
    {
      name: "Adarsh",
      designation: "Software Engineer",
      teacherImage: Images.Science_Icon
    },
    {
      name: "Varsha",
      designation: "Software Engineer",
      teacherImage: Images.Math_Icon
    }
  ]

  const dashboardData = [
    {
      icon: require('../../../assets/DashBoard/news.png'),
      name: "News"
    },
    {
      icon: require('../../../assets/DashBoard/news.png'),
      name: "Homework"
    },
    {
      icon: require('../../../assets/DashBoard/news.png'),
      name: "Course"
    },
    {
      icon: require('../../../assets/DashBoard/news.png'),
      name: "Circular"
    },
  ]

  var user_name = useSelector((state) => state.reduxData.loginData.username);
  var password = useSelector((state) => state.reduxData.loginData.password);

  // render dashboard module data
  const renderDashboardData = (item) => {

    return (
      <View style={{ alignSelf: "flex-end" }}>
        <Image
          source={item.icon}
          style={{ width: 50, height: 50, tintColor: "red" }}
        />
        <Text>{item.name}</Text>
      </View>
    )
  }

  return (
    <View style={DashBoardStyle.DashBoradContainer}>
      <DashBoardHeader />
      {/*  main Dashboard content */}
      <View style={[DashBoardStyle.mainContainer]}>
       <View style={{margin:10}}>
        <Text style={{fontSize:24,color:COLORS.SECONDARY}}>Teacher Staff</Text>
       </View>
         <HorizontalImageList />
         <TouchableOpacity
         onPress={()=>{
             navigation.navigate("RegisterStudent");
         }}
          style={{marginTop:20,padding:10,alignItems:"center"}}
          >
           <Image
             source={require('../../../assets/DashBoard/userIcon.png')}
             style={{width:40,height:40}}
           />
           <Text>Student Registration</Text>
         </TouchableOpacity>
      </View>
    </View>
  )
}


const DashBoardStyle = StyleSheet.create({
  DashBoardheaderView: {
    height: hpx('20%'),
    width: wpx('100%'),
    // justifyContent: "space-between",
    paddingTop: 30,
    // flexDirection: "row",
    paddingHorizontal: 10,
    // zIndex:0
  },
  sideBarImage: {
    width: 40,
    height: 40,
    tintColor: "white"
  },
  DashBoradContainer: {
    flex: 1,
    // backgroundColor:"#6C757D"
    // padding:10
  },
  mainContainer: {
    backgroundColor: "white",
    // marginTop: 2,
    // marginRight: 10,
    // marginTop:-10,
    paddingTop: 20,
   
    // borderTopLeftRadius:40,
    // borderTopRightRadius:40,
    // position:"absolute",
    // top:-30,
    // zIndex: 30,
    // marginHorizontal:10,
    // elevation: 2
  },
  cardContainer: {
    width: 340,
    backgroundColor: "white",
    marginTop: 30,
    borderWidth: 1,
    borderColor: "#70707033",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  textStyle: {
    fontSize: 16,
    color: "white"
  }
})
export default DashBoard;