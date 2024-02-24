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
const About_US = () => {
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
        <Text style={styles.Sms_Text}>About US</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.inside_View}>
        <Text style={styles.TExt_About_Us}>
          Welcome to CricketCraze, your premier destination for all things
          cricket! At CricketCraze, we're driven by a fervent passion for the
          sport and a commitment to delivering an unparalleled cricketing
          experience to fans worldwide through our innovative mobile
          application. CricketCraze isn't just another cricket app; it's a
          digital hub designed to immerse fans in the excitement and thrill of
          the game. Our team of dedicated professionals at CricketCraze is
          focused on providing users with a comprehensive platform that offers
          real-time updates, expert analysis, and captivating content, all
          tailored to meet the diverse needs of cricket enthusiasts. With
          CricketCraze, you can stay connected to the latest cricketing action
          no matter where you are. Whether you're following your favorite team's
          journey in an international tournament or tracking individual player
          performances, our app ensures you never miss a moment of the game. But
          CricketCraze is more than just a source of information; it's a vibrant
          community where fans can come together to share their love for
          cricket. Through interactive features such as live chat forums, fan
          polls, and social media integration, CricketCraze fosters a sense of
          camaraderie among cricket enthusiasts, allowing them to connect and
          engage with each other on a deeper level.
        </Text>
      </ScrollView>
    </View>
  );
};

export default About_US;
