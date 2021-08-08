import axios from 'axios';
import React, {useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  TextInput,
  Text,
  Button,
  ScrollView,
} from 'react-native';
import BGIMG from '../Assets/Images/bg.jpg';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const Register = ({navigation}) => {
  const [FormData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repassword: '',
    phonenumber: '',
    interests: [],
  });

  const pressHandler = () => {
    console.log({FormDataFromUSer: FormData});
    axios
      .post('https://testaapi.herokuapp.com/signup', FormData)
      .then(res => {
        console.log({serverResponce: res.data});
        const Data = res?.data?.result;
        console.log(Data);
        if (res.status === 200) {
          navigation.navigate('Login');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <ImageBackground source={BGIMG} style={styles.background}>
      <ScrollView style={styles.register}>
        <Text style={styles.title}>Register</Text>
        <TextInput
          style={styles.registerInput}
          placeholder="First Name"
          placeholderTextColor="white"
          name="firstName"
          autoCorrect={false}
          autoFocus={true}
          value={FormData.firstname}
          onChangeText={e => setFormData({...FormData, firstName: e})}
        />
        <TextInput
          style={styles.registerInput}
          placeholder="Last Name"
          placeholderTextColor="white"
          name="lastName"
          autoCorrect={false}
          value={FormData.lastname}
          onChangeText={e => setFormData({...FormData, lastName: e})}
        />
        <TextInput
          style={styles.registerInput}
          placeholder="E-Mail"
          placeholderTextColor="white"
          name="email"
          keyboardType="email-address"
          autoCorrect={false}
          value={FormData.email}
          onChangeText={e => setFormData({...FormData, email: e})}
        />
        <TextInput
          style={styles.registerInput}
          placeholder="Password"
          placeholderTextColor="white"
          secureTextEntry={true}
          name="password"
          autoCorrect={false}
          value={FormData.password}
          onChangeText={e => setFormData({...FormData, password: e})}
        />
        <TextInput
          style={styles.registerInput}
          placeholder="Re-Enter Password"
          placeholderTextColor="white"
          secureTextEntry={true}
          name="repassword"
          autoCorrect={false}
          value={FormData.repassword}
          onChangeText={e => setFormData({...FormData, repassword: e})}
        />
        <TextInput
          style={styles.registerInput}
          placeholder="Phone Number"
          placeholderTextColor="white"
          name="phonenumber"
          autoCorrect={false}
          keyboardType="phone-pad"
          value={FormData.phonenumber}
          onChangeText={e =>
            setFormData({
              ...FormData,
              phonenumber: e,
            })
          }
        />
        <BouncyCheckbox
          style={styles.checkBox}
          size={25}
          fillColor="green"
          unfillColor="#FFFFFF"
          text="Writing"
          iconStyle={{borderColor: 'blue'}}
          textStyle={{fontFamily: 'JosefinSans-Regular'}}
          onPress={e => {
            if (e) {
              setFormData({
                ...FormData,
                interests: [...FormData.interests, 'Writing'],
              });
            }
          }}
        />
        <BouncyCheckbox
          style={styles.checkBox}
          size={25}
          fillColor="green"
          unfillColor="#FFFFFF"
          text="Travel"
          iconStyle={{borderColor: 'blue'}}
          textStyle={{fontFamily: 'JosefinSans-Regular'}}
          onPress={e => {
            if (e) {
              setFormData({
                ...FormData,
                interests: [...FormData.interests, 'Travel'],
              });
            }
          }}
        />
        <BouncyCheckbox
          style={styles.checkBox}
          size={25}
          fillColor="green"
          unfillColor="#FFFFFF"
          text="Sports"
          iconStyle={{borderColor: 'blue'}}
          textStyle={{fontFamily: 'JosefinSans-Regular'}}
          onPress={e => {
            if (e) {
              setFormData({
                ...FormData,
                interests: [...FormData.interests, 'Sports'],
              });
            }
          }}
        />
        <BouncyCheckbox
          style={styles.checkBox}
          size={25}
          fillColor="green"
          unfillColor="#FFFFFF"
          text="Photography"
          iconStyle={{borderColor: 'blue'}}
          textStyle={{fontFamily: 'JosefinSans-Regular'}}
          onPress={e => {
            if (e) {
              setFormData({
                ...FormData,
                interests: [...FormData.interests, 'Photography'],
              });
            }
          }}
        />
        <BouncyCheckbox
          style={styles.checkBox}
          size={25}
          fillColor="green"
          unfillColor="#FFFFFF"
          text="Marketing"
          iconStyle={{borderColor: 'blue'}}
          textStyle={{fontFamily: 'JosefinSans-Regular'}}
          onPress={e => {
            if (e) {
              setFormData({
                ...FormData,
                interests: [...FormData.interests, 'Marketing'],
              });
            }
          }}
        />
        <BouncyCheckbox
          style={styles.checkBox}
          size={25}
          fillColor="green"
          unfillColor="#FFFFFF"
          text="Blogging"
          iconStyle={{borderColor: 'blue'}}
          textStyle={{fontFamily: 'JosefinSans-Regular'}}
          onPress={e => {
            if (e) {
              setFormData({
                ...FormData,
                interests: [...FormData.interests, 'Blogging'],
              });
            }
          }}
        />
        <BouncyCheckbox
          style={styles.checkBox}
          size={25}
          fillColor="green"
          unfillColor="#FFFFFF"
          text="Podcasting"
          iconStyle={{borderColor: 'blue'}}
          textStyle={{fontFamily: 'JosefinSans-Regular'}}
          onPress={e => {
            if (e) {
              setFormData({
                ...FormData,
                interests: [...FormData.interests, 'Podcasting'],
              });
            }
          }}
        />
        <Button title="Register" onPress={pressHandler} />
      </ScrollView>
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
  register: {
    width: '90%',
  },
  title: {
    color: 'white',
    fontWeight: '700',
    fontSize: 30,
  },
  registerInput: {
    height: 40,
    marginVertical: 12,
    color: 'white',
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    fontSize: 18,
  },
  checkBox: {
    marginVertical: 8,
  },
});

export default Register;
