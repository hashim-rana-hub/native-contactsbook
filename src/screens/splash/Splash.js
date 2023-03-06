import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 5000);
  });
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#9EC5FF', '#ABE1FD', '#B9FFFB']}
        style={styles.linearGradient}>
        <Image
          source={require('../../../assets/book.png')}
          style={{width: 75, height: 75}}
        />
        <View style={styles.leftMargin}>
          <Text style={styles.h2}>Contacts</Text>
          <Text style={styles.p}>Book</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  text: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  leftMargin: {
    marginLeft: 27,
  },
  h2: {
    fontSize: 34,
    fontWeight: '700',
  },
  p: {
    fontSize: 24,
    fontWeight: 400,
  },
  blackText: {
    color: '#000',
  },
});
