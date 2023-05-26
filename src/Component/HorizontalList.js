import React from 'react';
import { View, FlatList, Image, StyleSheet,Text } from 'react-native';

const data = [
  { id: '1', image: require('../../assets/DashBoard/childTeacher.jpg'),designation:"Director of ITHUNT" },
  { id: '2', image: require('../../assets/DashBoard/mathTeacher.jpg'),designation:"C Programming" },
  { id: '3', image: require('../../assets/DashBoard/scienceTeacher.jpg') ,designation:"Java"},
  { id: '4', image: require('../../assets/DashBoard/scienceTeacher.jpg') ,designation:"HTML,CSS,Javascript"},
  { id: '5', image: require('../../assets/DashBoard/scienceTeacher.jpg'),designation:"Python" },
  { id: '6', image: require('../../assets/DashBoard/scienceTeacher.jpg'),designation:"ICT" },
  // Add more image data objects as needed
];

const HorizontalImageList = () => {

  const renderItem = ({ item }) => (

    <View>
         <View>
        <Text>{item.designation}</Text>
        </View>
        <Image source={item.image} style={styles.image} />
    </View>
   
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200, // Adjust the height as needed
  },
  image: {
    width: 150, // Adjust the width as needed
    height: '100%',
    resizeMode: 'cover',
    marginRight: 10, // Adjust the margin as needed
  },
});

export default HorizontalImageList;
