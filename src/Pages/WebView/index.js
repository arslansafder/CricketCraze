import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
  Modal,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import YoutubePlayer from 'react-native-youtube-iframe';
import WebView from 'react-native-webview';
import Share from 'react-native-share';
import {Icons, Colors} from '../../Theme';
import styles from './style';
import Orientation from 'react-native-orientation-locker'; // Import Orientation
import {
  InterstitialAd,
  AdEventType,
  TestIds,
  BannerAd,
  BannerAdSize,
} from 'react-native-google-mobile-ads';

// const interstitialAdUnitId = __DEV__
//   ? TestIds.INTERSTITIAL
//   : 'ca-app-pub-3088054203243732~9899039690';

// const interstitial = InterstitialAd.createForAdRequest(interstitialAdUnitId, {
//   keywords: ['fashion', 'clothing'],
// });
const Web_View_Screen = () => {
  const navigation = useNavigation();
  // const route = useRoute();
  // const {mediaType, mediaId} = route.params;
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(true);
  const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   let timer;

  //   const unsubscribe = interstitial.addAdEventListener(
  //     AdEventType.LOADED,
  //     () => {
  //       setLoaded(true);
  //       setLoading(false);
  //       // clearTimeout(timer);
  //       // console.log('Interstitial ad is loaded.');
  //     },
  //   );

  // Set timeout for 7 seconds
  // timer = setTimeout(() => {
  //   setLoading(false);
  //   if (!loaded) {
  //     showToast('Interstitial ad is not available');
  //     navigation.navigate('Media_Screen', {
  //       // mediaType: 'youtube',
  //       // mediaId: 'your_youtube_video_id',
  //     }); // Navigate to Media_Screen with default values
  //   }
  // }, 7000);
  // interstitial.load();
  //   return () => {
  //     unsubscribe();
  //     // clearTimeout(timer);
  //   };
  // }, []);

  const showInterstitial = () => {
    if (loaded) {
      interstitial.show();
    } else {
      showToast('Interstitial ad is not available');
      navigation.replace('Home');
    }
  };

  const showToast = message => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  const onReady = () => {
    setLoading(false);
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
    // Code to run when the component mounts
    // Set modalVisible to true by default
    setModalVisible(true);

    // Lock the screen orientation to portrait mode
    Orientation.lockToPortrait();

    // To unlock the orientation when component unmounts
    return () => {
      Orientation.unlockAllOrientations();
    };
  }, []);

  return (
    <View style={{flex: 1}}>
      {/* {loading && (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )} */}
      <View style={styles.top_View}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icons type="AntDesign" name="arrowleft" size={25} color="white" />
        </TouchableOpacity>
        <Text style={styles.Sms_Text}>Cricket Craze</Text>
      </View>
      <TouchableOpacity
        onPress={() => shareApp()}
        style={styles.Setting_View}></TouchableOpacity>
      {/* <View style={{flex: 1}}>
        {mediaType === 'youtube' && (
          <YoutubePlayer
            height={Dimensions.get('window').width * 0.5625}
            videoId={mediaId}
            onReady={onReady}
          />
        )}
        {mediaType === 'webview' && (
          <WebView style={{flex: 1}} source={{uri: ''}} onLoad={onReady} />
        )}
      </View> */}
      <WebView
        source={{uri: 'https://tamashaweb.com/psl-2024'}}
        style={{flex: 1}}
      />
      <View style={styles.bottom_View}>
        <Text style={styles.bottom_TExt_Inside}>Lets Watch Together</Text>
        <View style={{}}>
          {/* <BannerAd unitId={TestIds.BANNER} size={BannerAdSize.BANNER} /> */}
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

export default Web_View_Screen;
