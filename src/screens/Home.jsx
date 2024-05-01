/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Button,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useTheme} from '../context/ThemeContext';
import colors from '../config/ThemeColors';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {setColor} from '../store/slices/colorslice';

const Home = () => {
  const {isDarkMode, setTheme} = useTheme();
  const navigation = useNavigation();

  const themeColors = isDarkMode ? colors.dark : colors.light;
  const colorList = useSelector(state => state.color.value); //reading the state
  const dispatch = useDispatch();
  const backgroundStyle = {
    backgroundColor: themeColors.background,
    flex: 1,
  };
  const backgroundStyleWithoutFlex = {
    backgroundColor: themeColors.background,
  };

  const textStyle = {
    color: themeColors.text,
    fontSize: 18,
  };

  const toggleTheme = () => {
    console.log('Toggling theme');
    setTheme(isDarkMode ? 'light' : 'dark');
  };
  const renderItem = ({item}) => (
    <View
      style={{
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: item,
        marginBottom: 10,
      }}>
      <Text style={{color: themeColors.text, fontSize: 16}}>{item}</Text>
    </View>
  );
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View
        style={[backgroundStyleWithoutFlex, {flexDirection: 'row', justifyContent: 'space-between'}]}>
        <Text style={textStyle}>Toggle Theme</Text>
        <Button
          title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          onPress={toggleTheme}
          color={isDarkMode ? themeColors.primary : themeColors.secondary}
        />
       
      </View>
      <Text className="mt-2 text-lg text-pink-500">
          Test Tailwind : Color Pink Working
        </Text>
      <View style={backgroundStyle}>
        <TouchableOpacity onPress={() => dispatch(setColor())}>
          <Text style={{fontSize: 20, color: themeColors.text}}>
            Generate Random Color
          </Text>
        </TouchableOpacity>
        <FlatList
          data={colorList}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <Button
        title="Navigate To Settings"
        onPress={() => navigation.navigate('Settings')}
        color={isDarkMode ? themeColors.primary : themeColors.secondary}
      />
    </SafeAreaView>
  );
};

export default Home;
