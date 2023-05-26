
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Text, View ,StyleSheet,TouchableOpacity,Image} from 'react-native';
import { Images } from '../../utilities/Images';
import { FontAwesome } from '@expo/vector-icons';


 function DashBoardHeader() {

 
  const MenuIcon = () => {
    return (
      <TouchableOpacity >
        <View>
        <Image source={require("../../assets/LoginScreen/menu.png")} style={{width:28,height:28}} />
        </View>
      </TouchableOpacity>
    );
  };
  const DashboardHeader = () => {
    return (
      <View style={styles.container}>
        <MenuIcon />
        <Text style={styles.title}>IT HUNT The Institute Of Computer Technology</Text>
      </View>
    );
  };
  

  return (
   
<View style={styles.container2}>
      <DashboardHeader />
     
      {/* Your dashboard content goes here */}
    </View>
  );
}

export default DashBoardHeader;
const styles = StyleSheet.create({
  
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  card: {
    width: '100%',
    height: 120,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  container: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    justifyContent:"space-between",
    flexDirection:"row",
    paddingTop:27
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign:"center"
  },
  container2: {
    backgroundColor: '#fff',
  },
});