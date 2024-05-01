/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef} from 'react';
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
  const carouselRef = useRef(null);

  const themeColors = isDarkMode ? colors.dark : colors.light;

  const carouselItems = [
    {
      title: 'Item 1',
      img: require('../../assets/images/providerone.png'),

      text: 'We Provide Professional Home services at a very friendly price',
    },
    {
      title: 'Item 2',
      img: require('../../assets/images/providertwo.png'),
      text: 'Easy Service booking & Scheduling',
    },
    {
      title: 'Item 3',
      img: require('../../assets/images/providerthree.png'),
      text: 'Get Beauty parlor at your home & other Personal Grooming needs',
    },
    {
      title: 'Item 4',
      img: require('../../assets/images/providerfour.png'),
      text: 'Get your Home cleaned by professionals',
    },
  ];
  const handleNext = () => {
    carouselRef.current.scrollToNext();
  };

  return (
    <View className="flex-1 bg-white pt-10 px-3">
      <View className="flex-row justify-end">
        <Text
          className=" text-right p-2 text-[#283891] px-4 bg-[#E6EAFF]"
          style={{
            // backgroundColor: themeColors.primary,
            borderRadius: 10,
          }}>
          Skip
        </Text>
      </View>
      <View style={{height: '70%', paddingTop: 5}}>
        <Carousel
          ref={carouselRef}
          activeDotStyle={{
            backgroundColor: themeColors.primary,
            width: 20,
            height: 8,
            borderRadius: 5,
          }}
          showsControls={false}>
          {carouselItems.map((item, index) => (
            <View key={index} style={styles.slide}>
              <Image source={item.img} style={styles.image} />
              <View>
                <Text style={styles.text}>{item.text}</Text>
              </View>
            </View>
          ))}
        </Carousel>
      </View>
      <View className="flex-row justify-center items-center mt-10">
        <TouchableOpacity
          onPress={handleNext}
          className="p-4"
          style={{
            backgroundColor: themeColors.primary,
            borderRadius: 10,
          }}>
          <Text>
            <Icon name="right" size={30} color="white" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#a3c9a8',
    paddingHorizontal: 15,
  },
  image: {
    marginTop: 30,
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 15,
    borderColor: '#F2F4FF',
    marginBottom: 40, // Add this line
  },
  text: {
    fontFamily: 'SF Pro Display',
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 40,
    textAlign: 'center',
    color: '#1A1D1F',
  },
});
