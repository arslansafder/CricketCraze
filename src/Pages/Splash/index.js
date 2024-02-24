import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import React from 'react';
import {AppLogo} from '../../Theme/Images';

// import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../Theme';
const Splash = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('Home');
  }, 3000);
  return (
    <View style={styles.MainContainer}>
      {/* <LinearGradient
        colors={['#B22293', '#BC2262']}
        start={{x: 0.5, y: 1}}
        end={{x: 0.5, y: 0}}
        style={{flex: 1, justifyContent: 'center'}}
        // style={{...styles.BtnStyle, CustomStyle}}>
      >
        {/* <ImageBackground
        style={styles.Image_Baground}
        source={require('../../../Assets/images/baground.png')}> */}
      <Image
        source={require('../../../Assets/images/logo1.jpg')}
        resizeMode="contain"
        style={styles.logoImg}
      />
      {/* </ImageBackground> */}
      {/* </LinearGradient> */}
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
  },
  logoImg: {
    width: '85%',
    height: '40%',
    zIndex: 1,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  Image_Baground: {
    flex: 1,
    width: '103%',
  },
});
