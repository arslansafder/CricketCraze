import {StyleSheet} from 'react-native';
import {Colors, Fonts, Icons} from '../../Theme';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  top_View: {
    width: '100%',
    height: '7%',
    backgroundColor: Colors.green,

    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '4%',
  },

  Sms_Text: {
    color: Colors.white,
    fontSize: 22,
    fontWeight: '600',
    marginLeft: '24%',
  },
  inside_View: {
    borderWidth: 1,
    height: '80%',
    width: '95%',
    alignSelf: 'center',
    marginTop: '5%',
    flex: 1,
    borderRadius: 20,
    elevation: 5,
    backgroundColor: Colors.white,
    borderColor: Colors.green,
  },
  TExt_About_Us: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
    padding: 10,
    color: Colors.black,
    width: '98%',
    alignSelf: 'center',
    fontFamily: Fonts.inter,
  },
});
export default styles;
