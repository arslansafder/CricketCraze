import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Switch,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

import Share from 'react-native-share';
import {Colors, Icons} from '../../Theme';

const CustomDrawer = props => {
  const navigation = useNavigation();
  const [autoBackupEnabled, setAutoBackupEnabled] = useState(false);
  const shareContent = async () => {
    const options = {
      title: 'Share via',
      message: 'Check Out This Cool App For Live Cricket',
      url: 'https://example.com',
    };

    try {
      await Share.open(options);
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };
  const toggleAutoBackup = () => {
    // Toggle the state of autoBackupEnabled
    setAutoBackupEnabled(!autoBackupEnabled);
  };

  useEffect(() => {
    // You can perform any actions when autoBackupEnabled changes
    console.log('Auto Backup is', autoBackupEnabled ? 'enabled' : 'disabled');
  }, [autoBackupEnabled]);

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.MainContainer}>
          <View style={styles.MainContainer}>
            <View style={styles.HeaderView}>
              <Image
                source={require('../../../Assets/images/logo1.jpg')}
                resizeMode={'contain'}
                style={styles.vectorImg}
              />
              <View style={styles.HeaderUserInfo}>
                <Text style={styles.HeaderUserName}>Cricket Craze</Text>
                <TouchableOpacity onPress={() => {}}>
                  <Text style={styles.HeaderUserEmail}>Live Cricket</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.lineView} />
            <ScrollView>
              <>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Privacy_Policy');
                  }}
                  activeOpacity={0.5}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    zIndex: 1,
                  }}>
                  <RenderListView
                    title="Privacy Policy"
                    IconImg={require('../../../Assets/Icons/profile.png')}
                    // onPress={() => {
                    //   navigation.navigate('My_Profile');
                    // }}
                  />
                  <View style={styles.switch2}>
                    <Icons
                      type="AntDesign"
                      name="right"
                      color="black"
                      size={18}></Icons>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => shareContent()}
                  activeOpacity={0.5}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    zIndex: 1,
                  }}>
                  <RenderListView
                    title="Share App"
                    IconImg={require('../../../Assets/Icons/share.png')}
                  />
                  <View style={styles.switch2}>
                    <Icons
                      type="AntDesign"
                      name="right"
                      color="black"
                      size={18}></Icons>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => {
                    navigation.navigate('Lock_Screen');
                  }}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <RenderListView
                    title="Free Online Movies"
                    IconImg={require('../../../Assets/Icons/upload.png')}
                  />
                  <View style={styles.switch2}>
                    <Icons
                      type="AntDesign"
                      name="right"
                      color="black"
                      size={18}></Icons>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('About_US');
                  }}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <RenderListView
                    title="About"
                    IconImg={require('../../../Assets/Icons/info.png')}
                    onPress={() => {
                      navigation.navigate('My_Profile');
                    }}
                  />
                  <View style={styles.switch2}>
                    <Icons
                      type="AntDesign"
                      name="right"
                      color="black"
                      size={18}></Icons>
                  </View>
                </TouchableOpacity>
                {/* <RenderListView
                  title="Privacy Policy"
                  // IconImg={privacyIcon}
                  onPress={() => {}}
                /> */}
                <View style={{marginTop: '20%'}}>
                  <RenderListView
                    title="Close"
                    IconImg={require('../../../Assets/Icons/logout.png')}
                    onPress={() => {
                      navigation.replace('Home');
                    }}
                  />
                </View>
              </>
            </ScrollView>
            <Text style={styles.Version}>Love Diary V.1.0</Text>
          </View>
          <View
            style={{
              height: 90,
              backgroundColor: Colors.white,
              zIndex: 1,
            }}></View>
          {/* <DrawerContentScrollView
            {...props}
            showsVerticalScrollIndicator={false}>
            <DrawerItemList {...props} />
          </DrawerContentScrollView> */}
        </View>
      </ScrollView>
    </>
  );
};

export default CustomDrawer;

const RenderListView = ({title, IconImg, onPress}) => (
  <TouchableOpacity
    style={{...styles.listItem}}
    activeOpacity={0.6}
    onPress={onPress}>
    <View style={{...styles.ImgBgView}}>
      <Image source={IconImg} resizeMode={'contain'} style={styles.noIconImg} />
    </View>
    <View style={styles.listTextView}>
      <Text style={styles.listText}>{title}</Text>
    </View>
  </TouchableOpacity>
);

// props.navigation.closeDrawer()
