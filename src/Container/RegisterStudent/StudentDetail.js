import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import BlueHeader from '../../Component/BlueHeader';


 function StudentDetail() {

  return (
    <SafeAreaView>
        <BlueHeader
         heading={"Student Detail"}
        />
        <Text>StudentDetail</Text>
    </SafeAreaView>
  );
}

export default StudentDetail;
