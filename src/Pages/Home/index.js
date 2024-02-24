import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {AppLogo} from '../../Theme/Images';
import styles from './style';
import {Colors, Icons} from '../../Theme';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native-share';

const matchesData = [
  {
    id: 1,
    title: 'Aus Vs Bang',
    venue: 'Rawalpindi Stadium',
    time: '2:34 pm',
    backgroundImage: require('../../../Assets/images/bg5.jpg'),
  },
  {
    id: 2,
    title: 'Ind Vs Pak',
    venue: 'Lahore Stadium',
    time: '5:00 pm',
    backgroundImage: require('../../../Assets/images/bg5.jpg'),
  },
  {
    id: 2,
    title: 'Coming Soon',
    venue: 'Rawalpindi Stadium',
    time: '26_Feb_2024',
    backgroundImage: require('../../../Assets/images/bg5.jpg'),
  },
  // Add more match objects as needed
];

const Home = ({}) => {
  const navigation = useNavigation();
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Server_Screen')}
      activeOpacity={0.3}
      style={styles.bg_Image_VIew}>
      <Image style={styles.bg_Image} source={item.backgroundImage}></Image>
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <Image
            style={styles.logo_Inside_title}
            source={require('../../../Assets/images/logo2.jpg')}></Image>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: '2%',
            width: '95%',
            alignSelf: 'center',
          }}>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Image
              style={styles.logo_Inside}
              source={require('../../../Assets/images/stadium2.jpg')}></Image>
            <Text style={styles.Venue}>{item.venue}</Text>
          </View>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Image
              style={styles.logo_Inside}
              source={require('../../../Assets/images/clock.jpg')}></Image>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.MainContainer}>
      <View style={styles.header_View}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icons
            type="MaterialCommunityIcons"
            name="reorder-horizontal"
            size={25}
            color="green"
          />
        </TouchableOpacity>
        <Text style={styles.Sms_Text}>Cricket Craze</Text>
      </View>

      <FlatList
        // numColumns={2}
        data={matchesData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Home;
