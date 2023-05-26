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
    Dimensions,
    SafeAreaView,
} from 'react-native';


import { Images } from "../../../../utilities/Images";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginValidationSchema } from "../../../../utilities/Validation";
import { setLoginData } from "../../../../utilities/MyStore/ReduxSlice";
import { useDispatch } from "react-redux";

const screenWidth=Dimensions.get("window").width;
const screenHeight=Dimensions.get("window").height;
function CopyLogin() {

    const navigation = useNavigation();
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [showhidePassword, setshowhidePassword] = useState(true);
    const dispatch=useDispatch();

    const goToDashBoard = (values) => {
        _storeData(values);
       
    }
    const _storeData =  (values) => {
        const obj = {
            "username": values.username,
            "password": values.password
        }
        dispatch(setLoginData(obj));
        navigation.navigate("DashBoard",{
            item:values
        });

        console.log("values===>",values)
        // try {
        //     const json = JSON.stringify(obj);
        //     await AsyncStorage.setItem("login", json);
        // } catch (error) {
        //     // Error saving data
        // }
    };

    const handleButtonClick=(values)=>{
        goToDashBoard(values);
    }

    return (

        <SafeAreaView style={Styles.container}>
        <KeyboardAvoidingView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView>
                    <View style={[Styles.header]}>
                           <Text style={[Styles.headerContent]}>Enter your valid Credential for access the mobile app and explore its feature</Text>
                    </View>
                   
                    <View 
                    style={[Styles.LoginScreenContainer]}
                   
                    >
                        <View style={{alignItems:"center",marginTop:20}}>
                                <Image
                                    source={Images.Login_Logo}
                                    style={Styles.loginLogo}
                                />
                                <View style={{marginTop:10}}>
                                   <Text style={{fontSize:16}}>IT HUNT</Text>
                                </View>
                                <View style={{alignItems:"center",marginTop:20}}>
                                    <Text style={{fontSize:20}}>Welcome</Text>
                                    <Text style={{color:"#194880",marginTop:10}}>Please Enter Your Details</Text>
                                </View>
                               
                        </View>
                       
                        <Formik
                            initialValues={{ username: '', password: '' }}
                            onSubmit={values => handleButtonClick(values)}
                            validationSchema={loginValidationSchema}
                        >
                            {({ handleChange, handleBlur, handleSubmit,errors, values }) => (
                              
                                   
                                
                                <View style={Styles.inputView}>
                                   
                                    <View style={Styles.userNameView}>
                                        <Text style={{ color: "#194880", fontSize: 15 }}>User Name:</Text>
                                    </View>
                                    <View>
                                        <TextInput
                                            name="username"
                                            placeholder="Enter Your Name"
                                            style={Styles.inputBox}
                                            onChangeText={handleChange('username')}
                                            onBlur={handleBlur('username')}
                                            value={values.username}
                                            keyboardType="text"
                                        />
                                        {errors.username &&
                                            <Text style={{ fontSize: 10, color: 'red' }}>{errors.username}</Text>
                                        }
                                    </View>
                                    <View style={Styles.passwordView}>
                                        <Text style={{ color: "#194880", fontSize: 15 }}>Password:</Text>
                                    </View>
                                    <View>
                                        <TextInput
                                            name="password"
                                            placeholder="Password"
                                            style={Styles.inputBox}
                                            onChangeText={handleChange('password')}
                                            onBlur={handleBlur('password')}
                                            value={values.password}
                                            secureTextEntry={showhidePassword ? true : false}
                                        />
                                        {errors.password &&
                                            <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
                                        }
                                        <TouchableOpacity
                                            onPress={() => {
                                                setshowhidePassword(!showhidePassword);
                                            }}
                                        >
                                            <Image
                                                source={showhidePassword ? Images.Password_Show : Images.Password_Hide}
                                                style={{ width: 20, height: 20, alignSelf: "flex-end", top: -45, right: 16, }}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity
                                        onPress={handleSubmit}
                                        style={Styles.loginButton}>
                                        <Text style={Styles.loginText}>Login</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </Formik>
                       <View style={{alignItems:"center"}}>
                        <Text style={[Styles.textStyle]}>or Login With</Text>
                       </View>
                       <View style={{flexDirection:"row",alignSelf:"center",marginTop:20}}>
                        <TouchableOpacity>
                            <Image
                             source={Images.Google_Icon}
                             style={{width:40,height:40}}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginLeft:30}}>
                            <Image
                             source={Images.Microsoft_Icon}
                             style={{width:38,height:38}}
                            />
                        </TouchableOpacity>
                       </View>
                    </View>
                    </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        </SafeAreaView>

    )
}
export default CopyLogin;

const Styles = StyleSheet.create({

    header:{
        height:100,
        backgroundColor:"#194880",
        justifyContent:"center",
        alignItems:"center"
    },
    headerContent:{
        fontSize:15,
        color:"white",
        opacity:0.8
    },
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    BackgroundLoginImage: {
    //    flex:1
    },
    LoginScreenContainer:{
        // flex:1,
        backgroundColor:"white",
        // position:'relative',
        // top:160,
        // zIndex:10,
        borderTopLeftRadius:40,
        borderTopEndRadius:40
    },
    inputBox: {
        width: 280,
        height: 50,
        borderWidth: 0.6,
        borderColor: "#8C8896",
        backgroundColor: "white",
        marginTop: 43,
        borderRadius: 10,
        paddingHorizontal: 10,
        color: "#194880",
        fontSize: 16
    },
    headerImage: {
        // flex:5,
        height:200,
        width: "100%",
        zIndex:0,
        position:'absolute',
        

        // borderBottomLeftRadius: 20,
        // borderBottomRightRadius: 20
    },
    loginLogo: {
        width: 115,
        height: 115,
        borderRadius: 60,
        borderWidth:0.7,
        borderColor:"#8C8896",
        resizeMode:"contain"

        
    },
    inputView: {
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 10,
        // marginTop: 0,
    },
    loginButton: {
        
        paddingVertical: 10,
        backgroundColor: "#00B2F4",
        marginTop: 20,
        alignSelf: 'center',
        borderRadius: 10,
        elevation:4,
        width:140,
        alignItems:"center"
    },
    loginText: {
        color: "white",
        fontSize: 17
    },
    passwordView: {
        position: 'absolute',
        zIndex: 20,
        left: 30,
        backgroundColor: "white"
    },
    userNameView: {
        position: 'absolute',
        zIndex: 40,
        left: 30,
        top: 50,
        backgroundColor: "white",
    },
    textStyle:{
        fontSize:16,
        color:"#194880"
    }
})