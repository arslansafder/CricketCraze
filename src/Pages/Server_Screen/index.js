import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  InterstitialAd,
  AdEventType,
  TestIds,
  BannerAd,
  BannerAdSize,
} from 'react-native-google-mobile-ads';
import styles from './style';

const matchesData = [
  {
    id: 1,
    title: 'Hindi Commentory',
    mediaType: 'facebook',
    mediaId: 'GKDKvpM3bXXYAByv',
    backgroundImage: require('../../../Assets/images/stadium2.jpg'),
  },
  {
    id: 2,
    title: 'Highlights Lastmatch',
    mediaType: 'youtube',
    mediaId: 'your_youtube_video_id',
    backgroundImage: require('../../../Assets/images/stadium2.jpg'),
  },
  {
    id: 3,
    title: 'Live Watch',
    mediaType: 'webview',
    mediaId: 'https://tamashaweb.com/psl-2024',
    backgroundImage: require('../../../Assets/images/stadium2.jpg'),
  },
];

const adUnitId = __DEV__
  ? TestIds.ADAPTIVE_BANNER
  : 'ca-app-pub-3088054203243732~9899039690';

const interstitialAdUnitId = __DEV__
  ? TestIds.INTERSTITIAL
  : 'ca-app-pub-3088054203243732~9899039690';

const interstitial = InterstitialAd.createForAdRequest(interstitialAdUnitId, {
  keywords: ['fashion', 'clothing'],
});

const ServerScreen = () => {
  const navigation = useNavigation();
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [touchableDisabled, setTouchableDisabled] = useState(true);

  useEffect(() => {
    let timer;

    const unsubscribe = interstitial.addAdEventListener(
      AdEventType.LOADED,
      () => {
        setLoaded(true);
        setLoading(false);
        clearTimeout(timer);
        console.log('Interstitial ad is loaded.');
      },
    );

    // Set timeout for 7 seconds
    timer = setTimeout(() => {
      setLoading(false);
      if (!loaded) {
        showToast('Interstitial ad is not available');
      }
      setTouchableDisabled(false); // Enable TouchableOpacity after delay
    }, 1000);

    interstitial.load();
    return () => {
      unsubscribe();
      clearTimeout(timer);
    };
  }, []);

  const showInterstitial = () => {
    if (loaded) {
      interstitial.show();
    } else {
      showToast('Interstitial ad is not available');
    }
  };

  const showToast = message => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  const handleMediaSelection = mediaType => {
    showInterstitial();
    interstitial.load();
    switch (mediaType) {
      case 'facebook':
        navigation.navigate('Commentory_Screen');
        break;
      case 'youtube':
        navigation.navigate('Media_Screen');
        break;
      case 'webview':
        navigation.navigate('Web_View_Screen');
        break;
      default:
        break;
    }
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => handleMediaSelection(item.mediaType)}
      activeOpacity={0.3}
      disabled={touchableDisabled} // Disable TouchableOpacity based on touchableDisabled state
      style={styles.bg_Image_VIew}>
      <Image style={styles.bg_Image} source={item.backgroundImage}></Image>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.MainContainer}>
      <FlatList
        numColumns={2}
        data={matchesData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      <ActivityIndicator animating={loading} size="large" color="#0000ff" />
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      />
    </View>
  );
};

export default ServerScreen;
