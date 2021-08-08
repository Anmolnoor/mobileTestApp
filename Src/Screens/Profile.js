import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  ImageBackground,
  FlatList,
} from 'react-native';
//--- image ---
import BGIMG from '../Assets/Images/bg.jpg';
const Profile = ({navigation}) => {
  const pressHandler = () => {
    navigation.navigate('Home');
  };
  return (
    <ImageBackground source={BGIMG} style={styles.background}>
      <View style={styles.mainBox}>
        <Text style={styles.title}>Profile</Text>
        <Text style={styles.subTitle}>User Information</Text>
        <View style={styles.info}>
          <Text style={styles.text}>{navigation.state.params?.data?.name}</Text>
          <Text style={styles.text}>
            {' '}
            {navigation.state.params?.data?.email}
          </Text>
          <Text style={styles.text}>{navigation.state.params?.data?._id}</Text>
        </View>
        <Text style={styles.subTitle}>Interests</Text>
        <FlatList
          style={styles.flatlist}
          data={navigation.state.params?.data?.interests}
          renderItem={({item}) => (
            <View>
              <Text key={Math.random().toString()} style={styles.text}>
                {item}
              </Text>
            </View>
          )}
        />
        <Button onPress={pressHandler} title="Logout" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  mainBox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    // backgroundColor: 'red',
  },
  info: {
    margin: 20,
  },
  int: {
    alignContent: 'flex-start',
    margin: 20,
  },
  title: {
    color: 'white',
    fontSize: 50,
    fontWeight: '700',
  },
  subTitle: {
    color: 'white',
    fontSize: 35,
  },
  text: {
    fontSize: 22,
    color: 'white',
  },
});

export default Profile;
