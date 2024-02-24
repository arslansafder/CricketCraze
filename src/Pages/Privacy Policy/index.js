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
const Privacy_Policy = () => {
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
    <View style={styles.container}>
      <View style={styles.top_View}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icons type="AntDesign" name="arrowleft" size={25} color="white" />
        </TouchableOpacity>
        <Text style={styles.Sms_Text}>Privacy Policy</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.inside_View}>
        <View>
          <Text style={styles.headers}>Data Collection:</Text>
          <Text style={styles.TExt_About_Us}>
            We do not collect any personal information, including names, email
            addresses, or demographic details, from our users. We do not track
            or store any usage data, including device information, IP addresses,
            or browsing history. We do not request or access location data from
            our users.
          </Text>
        </View>
        <View style={{marginTop: '4%'}}>
          <Text style={styles.headers}>Usage of the App: :</Text>
          <Text style={styles.TExt_About_Us}>
            Our app is designed to provide cricket enthusiasts with access to
            live scores, match highlights, and cricket news without requiring
            any personal information. Users can freely navigate the app and
            access all available features without the need to register an
            account or provide any data.
          </Text>
        </View>
        <View style={{marginTop: '4%'}}>
          <Text style={styles.headers}>Data Sharing and Disclosure:</Text>
          <Text style={styles.TExt_About_Us}>
            Since we do not collect any user information, we have no data to
            share or disclose to third parties. We do not engage with any
            third-party service providers for data processing, analytics, or
            marketing purposes.
          </Text>
        </View>
        <View style={{marginTop: '4%'}}>
          <Text style={styles.headers}>Changes to the Privacy Policy:</Text>
          <Text style={styles.TExt_About_Us}>
            Since we do not collect any user information, we have no data to
            share or disclose to third parties. We do not engage with any
            third-party service providers for data processing, analytics, or
            marketing purposes.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Privacy_Policy;
