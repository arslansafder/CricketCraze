import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../Theme';

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  HeaderView: {
    marginTop: '15%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5%',
    marginBottom: '5%',
  },
  vectorImg: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
  },
  HeaderUserInfo: {
    flexDirection: 'column',
    flex: 1,
    marginLeft: '5%',
  },
  HeaderUserName: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: Fonts.PopinsBold,
    color: Colors.black,
    marginTop: '9%',
  },
  HeaderUserEmail: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: Fonts.PopinsSemiBold,
    color: Colors.lightGray,
  },
  lineView: {
    height: 1,
    width: '90%',
    backgroundColor: Colors.white,
    alignSelf: 'center',
    marginBottom: '5%',
    marginTop: '0%',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: '2%',
    marginVertical: '2%',
  },
  ImgBgView: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noIconImg: {
    width: 20,
    height: 20,
  },
  listTextView: {
    flexDirection: 'column',
    marginLeft: '3%',
  },
  listText: {
    fontWeight: '600',
    fontSize: 16,
    fontFamily: Fonts.inter,
    color: Colors.black,
  },
  Version: {
    fontSize: 14,
    fontWeight: '300',
    fontFamily: Fonts.PopinsRegular,
    color: Colors.white,
    alignSelf: 'center',
    marginTop: '30%',
  },
  switch: {
    marginRight: 20,
  },
  switch2: {
    marginRight: 32,
    alignSelf: 'center',
    marginTop: '1%',
  },
});
export default styles;
