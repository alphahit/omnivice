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
} from 'react-native';
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
    {id: 'b2b', name: 'B2B'},
    {id: 'doctors', name: 'Doctors'},
    {id: 'travel', name: 'Travel'},
    {id: 'education', name: 'Education'},
    {id: 'consultants', name: 'Consultants'},
    {id: 'rentHire', name: 'Rent & Hire'},
    {id: 'interiors', name: 'Interiors Designers'},
    {id: 'packersMovers', name: 'Packers & Movers'},
    {id: 'repairsServices', name: 'Repairs & Services'},
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
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        setBackgroundColor={themeColors.primaryColor}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <View style={{flex: 1, backgroundColor: 'white'}}>
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
      </View>

      <Button
        title="Navigate To Settings"
        onPress={() => navigation.navigate('Settings')}
        color={isDarkMode ? themeColors.primary : themeColors.secondary}
      />
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
