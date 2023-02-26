import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    Keyboard,
    ImageBackground,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Image,
    TouchableOpacity,
    ScrollView,
    
} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

function LoginScreen() {
    const navigation=useNavigation();
    const [showhidePassword,setshowhidePassword]=useState(true);
    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");


    const goToDashBoard=async ()=>{
       _storeData();
        navigation.navigate("DashBoard");
    }
    const _storeData = async () => {
        const obj={
            "username":userName,
            "password":password
        }
        try {
            const json=JSON.stringify(obj);
            await AsyncStorage.setItem("login",json);
        } catch (error) {
          // Error saving data
        }
      };
    return (

        <KeyboardAvoidingView style={Styles.container}>

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ImageBackground
                    source={require('../../../../assets/LoginScreen/LoginBackground.jpg')}
                    style={Styles.BackgroundLoginImage}>
                    <Image
                        source={require('../../../../assets/LoginScreen/loginHeader.jpg')}
                        style={Styles.headerImage}

                    />
                    <ScrollView>
                    <View style={{ alignSelf: "center",marginTop:20 }}>
                        <Image
                            source={require('../../../../assets/LoginScreen/loginLogo.jpg')}
                            style={Styles.loginLogo}
                        />
                    </View>
                    <View style={Styles.inputView}>
                        <View style={Styles.userNameView}>
                           <Text style={{color:"#194880",fontSize:15}}>User Name:</Text>
                        </View>
                         
                        <View>
                        <TextInput
                            style={Styles.inputBox}
                            placeholder="Enter Your Name"
                            onChangeText={text=>
                                  setUserName(text)
                            }
                        />
                        </View>
                        <View style={Styles.passwordView}>
                        <Text style={{color:"#194880",fontSize:15}}>Password:</Text>
                        </View>
                       <View>
                       <TextInput
                            style={Styles.inputBox}
                            placeholder="Enter Your Password"
                            secureTextEntry={showhidePassword?true:false}
                            onChangeText={text=>setPassword(text)}
                        />
                        <TouchableOpacity
                          onPress={()=>{
                            setshowhidePassword(!showhidePassword);
                          }}
                        >
                        <Image
                          source={showhidePassword?require('../../../../assets/LoginScreen/show.png'):require('../../../../assets/LoginScreen/hide.png')}
                          style={{width:20,height:20,alignSelf:"flex-end",top:-30,right:16,}}
                        />
                        </TouchableOpacity>
                       
                       </View>
                       <TouchableOpacity 
                        onPress={()=>{
                            
                            goToDashBoard();
                        }}
                       style={Styles.loginButton}>
                          <Text style={Styles.loginText}>Login</Text>
                       </TouchableOpacity>
                    </View>
                    </ScrollView>
                    
                </ImageBackground>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>

    )
}
export default LoginScreen;

const Styles = StyleSheet.create({

    container: {
        flex: 1,


    },
    BackgroundLoginImage: {
        height: "100%"
    },
    inputBox: {
        width: 280,
        height: 50,
        borderWidth: 0.6,
        borderColor: "#8C8896",
        backgroundColor: "white",
        marginTop: 43,
        borderRadius: 10,
        paddingHorizontal:10,
        color:"#194880",
        fontSize:16
    },
    headerImage: {
        height: 110,
        width: "100%",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    loginLogo: {
        width: 115,
        height: 115,
        borderRadius: 40
    },
    inputView:{
        alignSelf: "center",
         justifyContent: "center",
         backgroundColor:"white",
         paddingHorizontal:20,
         paddingVertical:20,
         borderRadius:10,
         marginTop:20,
    },
    loginButton:{
        paddingHorizontal:30,
        paddingVertical:10,
        backgroundColor:"#00B2F4",
        marginTop:20,
        alignSelf:'center',
        borderRadius:10
    },
    loginText:{
        color:"white",
        fontSize:16
    },
    passwordView:{
        position:'absolute',
        zIndex:20,
        left:30,
        backgroundColor:"white"
    },
    userNameView:{
        position:'absolute',
        zIndex:40,
        left:30,
        top:50,
        backgroundColor:"white",
    }
})