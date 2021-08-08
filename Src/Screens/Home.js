import React from 'react';

import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';

// --- Images ---

import BGIMG from '../Assets/Images/bg.jpg';
import LogoImg from '../Assets/Images/avatar.png';

const Home = ({navigation}) => {
  const pressHandlerLogin = () => {
    navigation.navigate('Login');
  };
  const pressHandlerRegister = () => {
    navigation.navigate('Register');
  };
  return (
    <View style={styles.mainBox}>
      <ImageBackground style={styles.background} source={BGIMG}>
        <Text style={styles.heading}>Test App</Text>
        <Image style={styles.img} source={LogoImg} width={300} height={300} />
        <TouchableOpacity onPress={pressHandlerLogin}>
          <Text style={styles.loginBtnHome}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={pressHandlerRegister}>
          <Text style={styles.registerBtnHome}>
            Don't have Account yet?? Register here
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  mainBox: {
    flex: 1,
    backgroundColor: 'rgba(1,1,1,0.9)',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  heading: {
    color: 'white',
    fontSize: 32,
  },
  img: {
    margin: 15,
  },
  loginBtnHome: {
    color: 'white',
    fontSize: 30,
    margin: 10,
  },
  registerBtnHome: {
    margin: 20,
    fontSize: 16,
    color: 'white',
  },
});

export default Home;
