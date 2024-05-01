/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {Image, Text, View} from 'react-native';
import React from 'react';
import colors from '../../config/ThemeColors';
import {useTheme} from '../../context/ThemeContext';
import Carousel from 'pinar';
import Icon from 'react-native-vector-icons/AntDesign';
// import c1 from '../../assets/images/providerone.png';
// import c2 from '../../assets/images/providertwo.png';
// import c3 from '../../assets/images/providerthree.png';
// import c4 from '../../assets/images/providerfour.png';

const Welcome = () => {
  const {isDarkMode} = useTheme();

  const themeColors = isDarkMode ? colors.dark : colors.light;
  const styles = {
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#a3c9a8',
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#84b59f',
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#69a297',
    },
    text: {
      color: '#1f2d3d',
      opacity: 0.7,
      fontSize: 48,
      fontWeight: 'bold',
    },
  };

  const carouselItems = [
    {
      title: 'Item 1',
    //   img: require('../../assets/images/providerone.png'),

      text: 'We Provide Professional Home services at a very friendly price',
    },
    {
      title: 'Item 2',
    //   img: require('../../assets/images/providertwo.png'),
      text: 'Easy Service booking & Scheduling',
    },
    {
      title: 'Item 3',
    //   img: require('../../assets/images/providerthree.png'),
      text: 'Get Beauty parlor at your home & other Personal Grooming needs',
    },
    {
      title: 'Item 4',
    //   img: require('../../assets/images/providerfour.png'),
      text: 'Get your Home cleaned by professionals',
    },
  ];

  return (
    <View className="flex-1 bg-white pt-10 px-3">
      <View className="flex-row justify-end">
        <Text
          className=" text-right p-2 text-white px-4"
          style={{
            backgroundColor: themeColors.primary,
            borderRadius: 10,
          }}>
          Skip
        </Text>
      </View>
      <View className="h-[60vh] pt-5">
        <Carousel>
          {carouselItems.map((item, index) => (
            <View key={index}>
              {/* <Image source={item.img} style={styles.image} /> */}
              <Text style={styles.text}>{item.text}</Text>
            </View>
          ))}
        </Carousel>
      </View>
      <View className="flex-row  justify-center items-center mt-20">
        <View
          className="p-4"
          style={{
            backgroundColor: themeColors.primary,
            borderRadius: 10,
          }}>
          <Text>
            <Icon name="right" size={30} color="white" />
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Welcome;

// const styles = StyleSheet.create({});
