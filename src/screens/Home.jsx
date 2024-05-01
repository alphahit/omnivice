/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Button,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  TextInput,
  Keyboard,
  Pressable,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useTheme} from '../context/ThemeContext';
import colors from '../config/ThemeColors';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {setColor} from '../store/slices/colorslice';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Home = () => {
  const {isDarkMode, setTheme} = useTheme();
  const localServices = [
    {id: 'b2b', name: 'B2B', color: '#26A69A'}, // Lighter teal
    {id: 'doctors', name: 'Doctors', color: '#4DB6AC'}, // Soft teal
    {id: 'travel', name: 'Travel', color: '#80CBC4'}, // Greenish teal
    {id: 'education', name: 'Education', color: '#B2DFDB'}, // Pale teal
    {id: 'consultants', name: 'Consultants', color: '#E0F2F1'}, // Very pale teal
    {id: 'rentHire', name: 'Rent & Hire', color: '#00897B'}, // Dark teal
    {id: 'interiors', name: 'Interiors Designers', color: '#00695C'}, // Deeper teal
    {id: 'packersMovers', name: 'Packers & Movers', color: '#004D40'}, // Darkest teal
    {id: 'repairsServices', name: 'Repairs & Services', color: '#00796B'}, // Mid teal
  ];
  const featuredProviders = [
    {
      id: 'provider1',
      image: require('../assets/images/providerone.png'),
      name: 'Pedicure',
      originalPrice: '599',
      discountedPrice: '499',
    },
    {
      id: 'provider2',
      image: require('../assets/images/providertwo.png'),
      name: 'Hair Salon',
      originalPrice: '₹799',
      discountedPrice: '699',
    },
    {
      id: 'provider3',
      image: require('../assets/images/providerthree.png'),
      name: 'Massage Therapy',
      originalPrice: '899',
      discountedPrice: '799',
    },
    {
      id: 'provider4',
      image: require('../assets/images/providerfour.png'),
      name: 'Facial Treatment',
      originalPrice: '999',
      discountedPrice: '899',
    },
  ];
  
  const [term, setTerm] = useState('');
  const navigation = useNavigation();

  const themeColors = isDarkMode ? colors.dark : colors.light;
  // const colorList = useSelector(state => state.color.value);
  const dispatch = useDispatch();
  const backgroundStyle = {
    backgroundColor: themeColors.background,
    flex: 1,
  };
  const handleSearchclose = () => {
    Keyboard.dismiss();
    setTerm('');
  };

  const dynamicStyles = StyleSheet.create({
    v2: {
      flexDirection: 'row',
      backgroundColor: 'white',
      borderWidth: 2,
      borderColor: themeColors.teal700, // Now this can access themeColors
      borderRadius: 8,
      alignItems: 'center',
      marginTop: -30,
      marginHorizontal: 20,
    },
    featuredProvidersContainer: {
      paddingHorizontal: 20,
      paddingTop: 10, // Adjust as needed
      paddingBottom: 20, // Provides spacing after the section
    },
    featuredProvidersTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: themeColors.text,
      marginBottom: 15, // Space between title and image
    },
    featuredProvidersPressable: {
      flex: 1,
      margin: 10,
      height: wp('50%'),
      backgroundColor: themeColors.teal900,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      padding: 10,
      shadowColor: themeColors.text,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    featuredProviderImage: {
      borderRadius: 10,
      width: wp(30),
      height: wp(30), // Adjust according to your design
    },
  });
  // const backgroundStyleWithoutFlex = {
  //   backgroundColor: themeColors.background,
  // };

  // const textStyle = {
  //   color: themeColors.text,
  //   fontSize: 18,
  // };

  // const toggleTheme = () => {
  //   console.log('Toggling theme');
  //   setTheme(isDarkMode ? 'light' : 'dark');
  // };
  // const renderItem = ({item}) => (
  //   <View
  //     style={{
  //       height: 50,
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       backgroundColor: item,
  //       marginBottom: 10,
  //     }}>
  //     <Text style={{color: themeColors.text, fontSize: 16}}>{item}</Text>
  //   </View>
  // );
  const renderService = ({item}) => {
    return (
      <View
        className="align-center justify-center"
        style={{
          width: wp(22),
          height: wp(22),
          backgroundColor: item.color,
          padding: 5,
          margin: 10,
          borderRadius: 10,
        }}>
        <Text style={{color: 'white', fontSize: 12}}>{item.name}</Text>
      </View>
    );
  };
  const renderProvider = ({ item }) => (
    <Pressable style={dynamicStyles.featuredProvidersPressable}>
      <Image
        style={dynamicStyles.featuredProviderImage}
        source={item.image}
        resizeMode="cover"
      />
      <View>
      <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'white' }}>{item.name}</Text>
      <Text
        style={{
          textDecorationLine: 'line-through',
          textDecorationStyle: 'solid',
          color: 'gray',
          fontSize: 14,
        }}>
        ₹{item.originalPrice}
      </Text>
      <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 16 }}>₹{item.discountedPrice}</Text>
      </View>
    </Pressable>
  );
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        setBackgroundColor={themeColors.primaryColor}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <View style={{flex: 1, backgroundColor: themeColors.background}}>
        <View
          style={{
            height: 120,
            backgroundColor: themeColors.primaryColor,
            borderBottomStartRadius: 25,
            borderBottomEndRadius: 25,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            padding: 20,
          }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              color: themeColors.text,
              marginBottom: 5,
            }}>
            Hi Prateek!
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: themeColors.text,
              opacity: 0.8,
            }}>
            Find Your Service
          </Text>
        </View>
        <View style={dynamicStyles.v2}>
          <TouchableOpacity
            onPress={() => {
              term.length > 0 && handleSearchclose();
            }}>
            {term.length > 0 ? (
              <AntDesign
                name="close"
                size={25}
                color={themeColors.teal700}
                style={{marginLeft: 5}}
              />
            ) : (
              <Feather
                name="search"
                size={25}
                color={themeColors.teal700}
                style={{marginLeft: 5}}
              />
            )}
          </TouchableOpacity>
          <TextInput
            style={{
              fontSize: 16,
              backgroundColor: 'white',
              flex: 1,
              borderRadius: 8,
              textAlign: 'left',
              color: 'black',
            }}
            placeholder="Search"
            placeholderTextColor={'lightgrey'}
            onChangeText={text => setTerm(text)}
            value={term}
            //onPressIn={() => setActivateSearch(true)}
            onSubmitEditing={Keyboard.dismiss}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <FlatList
            numColumns={3}
            renderItem={renderService}
            data={localServices}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={dynamicStyles.featuredProvidersContainer}>
  <Text style={dynamicStyles.featuredProvidersTitle}>
    Featured Providers
  </Text>
  <FlatList
    data={featuredProviders}
    renderItem={renderProvider}
    keyExtractor={item => item.id}
    horizontal={true}
    contentContainerStyle={{ paddingBottom: 20 }}
  />
</View>
      </View>

      {/* <Button
        title="Navigate To Settings"
        onPress={() => navigation.navigate('Settings')}
        color={isDarkMode ? themeColors.primary : themeColors.secondary}
      /> */}

      {/* <View
        style={[backgroundStyleWithoutFlex, {flexDirection: 'row', justifyContent: 'space-between'}]}>
        <Text style={textStyle}>Toggle Theme</Text>
        <Button
          title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          onPress={toggleTheme}
          color={isDarkMode ? themeColors.primary : themeColors.secondary}
        />
       
      </View> */}
    </SafeAreaView>
  );
};

export default Home;
