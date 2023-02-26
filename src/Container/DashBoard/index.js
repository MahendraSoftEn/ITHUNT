import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {View,Text} from 'react-native'

function DashBoard(){

    const [userName,setUserName]=useState("");

useEffect(()=>{
    _retrieveData();
},[])
const _retrieveData = async () => {
    try {
        
      const value = await AsyncStorage.getItem('username');
      if (value !== null) {
        // We have data!!
        console.log("value==",value.username);
      }
    } catch (error) {
      // Error retrieving data
      console.log("error show")
    }
  };
    return(
        <View>
            <Text>DashBoard Page that is user name is : {userName}</Text>
        </View>
    )
}

export default DashBoard;