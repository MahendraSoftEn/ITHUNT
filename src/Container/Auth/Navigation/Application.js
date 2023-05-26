import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from "../LoginScreen";
import DashBoard from "../../DashBoard";
import CopyLogin from "../LoginScreen/CopyLogin";




function Application() {

    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen 
                name="LoginScreen"
                 component={LoginScreen}
                 options={{headerShown: false}}
                  /> */}
                   <Stack.Screen 
                name="CopyLogin"
                 component={CopyLogin}
                 options={{headerShown: false}}
                  />
                <Stack.Screen 
                name="DashBoard" 
                component={DashBoard} 
               options={{headerShown: false}}
               />
        {/* <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Application;