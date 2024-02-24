import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import YoutubePlayer from 'react-native-youtube-iframe';
import Share from 'react-native-share';
import {Icons} from '../../Theme';
import styles from './style';
import Orientation from 'react-native-orientation-locker';
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';

const MediaScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the time delay as needed

    return () => clearTimeout(timer);
  }, []);

  const showToast = message => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  const shareApp = async () => {
    try {
      const options = {
        title: 'Share via',
        message: "Let's Watch Live Cricket Together",
        url: 'https://yourappstorelink.com',
      };
      await Share.open(options);
    } catch (error) {
      console.error('Error sharing app:', error);
    }
  };

  useEffect(() => {
    Orientation.lockToPortrait();

    return () => {
      Orientation.unlockAllOrientations();
    };
  }, []);

  return (
    <View style={{flex: 1}}>
      {loading && (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: 10,
            flex: 1,
          }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
      <View style={{marginTop: '15%'}}>
        <YoutubePlayer
          height={270}
          videoId={'PD-zh2omR_A'}
          onReady={() => setLoading(false)}
        />
      </View>
      <View style={styles.top_View}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icons type="AntDesign" name="arrowleft" size={25} color="white" />
        </TouchableOpacity>
        <Text style={styles.Sms_Text}>Cricket Craze</Text>
      </View>
      <TouchableOpacity
        onPress={shareApp}
        style={styles.Setting_View}></TouchableOpacity>
      <View style={styles.bottom_View}>
        <Text style={styles.bottom_TExt_Inside}>Lets Watch Together</Text>
        <View style={{}}>
          <BannerAd unitId={TestIds.BANNER} size={BannerAdSize.BANNER} />
        </View>
      </View>
      <ScrollView style={{flex: 1, marginTop: '10%', paddingHorizontal: '2%'}}>
        <Text style={styles.description_Header}>Description :</Text>
        <Text style={styles.description}>
          They edged out Quetta in the playoffs race by a fraction on net run
          rate, with both sides tied on number of wins and defeats. That means
          either Karachi or Quetta can make the cut this year if they achieve
          four wins by the end of the opening stage, provided Multan and
          Peshawar don't reach five wins
        </Text>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: '3%',
          position: 'absolute',
          bottom: '1%',
        }}>
        <TouchableOpacity onPress={shareApp} style={styles.share_Button}>
          <Text style={{color: 'white'}}>Share with Friends</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.replace('Home')}
          style={styles.share_Button}>
          <Text style={{color: 'white'}}>Home Page</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MediaScreen;
