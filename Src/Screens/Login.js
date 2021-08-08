import React, {useState} from 'react';
import {
  ImageBackground,
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
} from 'react-native';
import BGIMG from '../Assets/Images/bg.jpg';
import axios from 'axios';
const Login = ({navigation}) => {
  const [FormData, setFormData] = useState({
    email: '',
    password: '',
  });

  const pressHandler = async () => {
    // console.log({DetailsFromUser: FormData});
    // const r = await SignIn(FormData);
    // await console.log({r});
    // if (r?.status === 200) {
    //   navigation.navigate('Profile');
    // }
    // console.log(FormData);
    axios
      .post('https://testaapi.herokuapp.com/signin', FormData)
      .then(res => {
        console.log(FormData);
        console.log(res.data);
        const data = res?.data?.result;
        console.log(data);
        if (res?.status === 200) {
          navigation.navigate('Profile', {data});
        }
      })
      .catch(error => {
        console.log(error);
      });
    //
    //
    // const response = async () => {
    //   console.log({detailsFromUser: FormData});
    //   const r = await axios
    //     .post('https://localhost:5000/signin/', FormData)
    //     .then(response => {
    //       console.log(response);
    //       return response.json();
    //     })
    //     .catch(error => {
    //       return error.json();
    //     });
    //   console.log(r);
    // };

    console.log('this is working...');
  };
  return (
    <ImageBackground source={BGIMG} style={styles.background}>
      <View style={styles.mainBox}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputArea}>
          <View style={styles.inputField}>
            <TextInput
              style={styles.loginInput}
              name="email"
              autoFocus={true}
              autoComplete={false}
              placeholder="E-Mail"
              spellCheck={false}
              placeholderTextColor="white"
              value={FormData.email}
              onChangeText={e => setFormData({...FormData, email: e})}
            />
            <TextInput
              style={styles.loginInput}
              name="password"
              placeholder="Password"
              autoComplete={false}
              spellCheck={false}
              placeholderTextColor="white"
              value={FormData.password}
              secureTextEntry={true}
              onChangeText={e => setFormData({...FormData, password: e})}
            />
          </View>
          <Button
            title="Login"
            style={styles.loginButton}
            onPress={pressHandler}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainBox: {
    width: '80%',
  },
  title: {
    fontSize: 50,
    color: 'white',
    fontWeight: '700',
  },
  loginInput: {
    height: 40,
    marginVertical: 12,
    color: 'white',
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    fontSize: 18,
  },
  inputField: {},
  loginButton: {},
});

export default Login;
