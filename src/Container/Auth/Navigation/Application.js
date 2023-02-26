import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from "../LoginScreen";
import DashBoard from "../../DashBoard";




function Application() {

    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name="LoginScreen"
                 component={LoginScreen}
                 options={{headerShown: false}}
                  />
                <Stack.Screen name="DashBoard" component={DashBoard} />
        {/* <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Application;