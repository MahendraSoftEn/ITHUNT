import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import { COLORS } from '../../utilities/Colors';


 function BlueHeader(props) {

  return (
    <View style={{height:70,backgroundColor:COLORS.SECONDARY,justifyContent:"center"}}>
        <Text style={{color:"white",fontSize:20}}>{props.heading}</Text>
    </View>
  );
}

export default BlueHeader;
