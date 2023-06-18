import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FlatList, SafeAreaView, Text, View, Image,StyleSheet, TouchableOpacity } from 'react-native';
import BlueHeader from '../../Component/BlueHeader';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setStudentData } from '../../../utilities/MyStore/StudentStore';


function StudentList() {

    const dispatch=useDispatch();
    const navigation=useNavigation();
    const data = [
        {
            id: 1,
            name: "Mohan Yadav",
            course: "O Level",
            profileImage: require("../../../assets/DashBoard/userIcon.png")
        },
        {
            id: 2,
            name: "Rajendra Shukla",
            course: "O Level",
            profileImage: require("../../../assets/DashBoard/userIcon.png")
        },
        {
            id: 3,
            name: "Ravi Maurya",
            course: "O Level",
            profileImage: require("../../../assets/DashBoard/userIcon.png")
        },
        {
            id: 4,
            name: "Anil Maurya",
            course: "O Level",
            profileImage: require("../../../assets/DashBoard/userIcon.png")
        },
        {
            id: 5,
            name: "Sumit Maurya",
            course: "O Level",
            profileImage: require("../../../assets/DashBoard/userIcon.png")
        },
        {
            id: 6,
            name: "Raju Maurya",
            course: "O Level",
            profileImage: require("../../../assets/DashBoard/userIcon.png")
        },
        {
            id: 7,
            name: "Rani Maurya",
            course: "O Level",
            profileImage: require("../../../assets/DashBoard/userIcon.png")
        },
        {
            id: 8,
            name: "Juhi Maurya",
            course: "O Level",
            profileImage: require("../../../assets/DashBoard/userIcon.png")
        },
        {
            id: 9,
            name: "Juli Maurya",
            course: "O Level",
            profileImage: require("../../../assets/DashBoard/userIcon.png")
        },
        {
            id: 10,
            name: "Mahak Maurya",
            course: "O Level",
            profileImage: require("../../../assets/DashBoard/userIcon.png")
        },
        {
            id: 11,
            name: "Anchal Maurya",
            course: "O Level",
            profileImage: require("../../../assets/DashBoard/userIcon.png")
        },
    ];
//    dispatch(setStudentData(data));
   const student_data=useSelector(state=> state.studentList.studentData);
   console.log("redux Student Data===>",student_data);
    const renderStudentList = ({ item }) => {

        return (
            <TouchableOpacity 
            onPress={()=>{
                navigation.navigate("StudentDetail");
            }}
            style={[style.cardContainer]}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={item.profileImage}
                        style={{ width: 50, height: 50, resizeMode: 'cover' }}
                    />
                    <View  style={{marginLeft:10}}>
                        <Text style={{color:"#194880",fontSize:16}}>{item.name}</Text>
                        <Text style={{color:"#8C8896",fontSize:13}}>{item.course}</Text>
                    </View>
                </View>
                <View style={{justifyContent:"center"}}>
                    <Image
                        source={require('../../../assets/DashBoard/back.png')}
                        style={{ width: 15, height: 15,tintColor:"#194880", transform: [{ rotate: '170deg' }] }}
                    />
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={{flex:1}}>
            <BlueHeader
                heading={"StudentList"}
            />
            <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 14 }}>
                <View style={{ backgroundColor: "#70707033", padding: 14, borderRadius: 10 }}>
                    <Text style={{ color: "#194880", fontSize: 15 }}>Total Student:</Text>
                </View>
                <View style={{ padding: 15, backgroundColor: "#00B2F4", borderRadius: 10 }}>
                    <Text style={{ color: "white" }}>200</Text>
                </View>
            </View>
            <View style={{ height: 1, width: "100%", backgroundColor: "#70707033", marginTop: 10 }} />
            {/* <Text>StudentList</Text> */}
            <View style={{flex:1}}>
                <FlatList
                    data={data}
                    renderItem={renderStudentList}

                />
            </View>
        </SafeAreaView>
    );
}

export default StudentList;

const style = StyleSheet.create({

    cardContainer: {
        flexDirection: "row",
         justifyContent: "space-between",
          marginHorizontal: 10,
           borderWidth: 2,
            marginTop: 10, 
            padding: 10,
             borderRadius: 10,
              borderColor: "#70707033"
    }
})
