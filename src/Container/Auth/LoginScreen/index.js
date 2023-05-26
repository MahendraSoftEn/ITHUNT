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


import { Images } from "../../../../utilities/Images";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginValidationSchema } from "../../../../utilities/Validation";

function LoginScreen() {

    const navigation = useNavigation();
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [showhidePassword, setshowhidePassword] = useState(true);


    const goToDashBoard = async () => {
        _storeData();
        navigation.navigate("DashBoard");
    }
    const _storeData = async () => {
        const obj = {
            "username": userName,
            "password": password
        }
        try {
            const json = JSON.stringify(obj);
            await AsyncStorage.setItem("login", json);
        } catch (error) {
            // Error saving data
        }
    };

    const handleButtonClick=(values)=>{

    goToDashBoard();

    }
    return (

        <KeyboardAvoidingView style={Styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ImageBackground
                    source={Images.Login_Screen}
                    style={Styles.BackgroundLoginImage}>
                    <Image
                        source={Images.Login_Header}
                        style={Styles.headerImage}
                    />
                    <ScrollView>
                        <View style={{ alignSelf: "center", marginTop: 20 }}>
                            <Image
                                source={Images.Login_Logo}
                                style={Styles.loginLogo}
                            />
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
                                                style={{ width: 20, height: 20, alignSelf: "flex-end", top: -30, right: 16, }}
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
        paddingHorizontal: 10,
        color: "#194880",
        fontSize: 16
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
    inputView: {
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 10,
        marginTop: 20,
    },
    loginButton: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        backgroundColor: "#00B2F4",
        marginTop: 20,
        alignSelf: 'center',
        borderRadius: 10
    },
    loginText: {
        color: "white",
        fontSize: 16
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
    }
})