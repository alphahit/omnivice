/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {Text, View} from 'react-native';
import React from 'react';
import colors from '../../config/ThemeColors';
import {useTheme} from '../../context/ThemeContext';
import Carousel from 'pinar';
import Icon from 'react-native-vector-icons/AntDesign';

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
      
      text: 'We Provide Professional Home services at a very friendly price',
    },
    {
      title: 'Item 2',
      text: 'Easy Service booking & Scheduling',
    },
    {
      title: 'Item 3',
      text: 'Get Beauty parlor at your home & other Personal Grooming needs',
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
          <View style={styles.slide1}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>3</Text>
          </View>
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
