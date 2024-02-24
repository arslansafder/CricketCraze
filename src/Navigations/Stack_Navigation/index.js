import * as React from 'react';
import {useEffect} from 'react';
import {View, Text, Settings} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../../Pages/Splash';
import Home from '../../Pages/Home';
import Media_Screen from '../../Pages/Media_Screen';
import Server_Screen from '../../Pages/Server_Screen';
import AppDrawer from '../Drawer_Tab';
import Web_View_Screen from '../../Pages/WebView';
import Commentory_Screen from '../../Pages/Comentory';
import About_US from '../../Pages/About Us';
import Privacy_Policy from '../../Pages/Privacy Policy';
const Stack = createNativeStackNavigator();

// const Push_Notification = () => {
//   useEffect(() => {
//     // Set OneSignal log level
//     OneSignal.Debug.setLogLevel(LogLevel.Verbose);

//     // Initialize OneSignal
//     OneSignal.initialize('76a9e50b-ac40-4245-b0ff-01caf3488fa8');

//     // Request notification permission
//     OneSignal.Notifications.requestPermission(true);

//     // Listen for notification clicks
//     const handleClick = event => {
//       console.log('OneSignal: notification clicked:', event);
//     };

//     OneSignal.Notifications.addEventListener('click', handleClick);

//     // Clean up event listener when component unmounts
//     return () => {
//       OneSignal.Notifications.removeEventListener('click', handleClick);
//     };
//   }, []); // Empty dependency array ensures that this effect runs only once after initial render

//   return null; // Since this component is for side-effects only, return null
// };

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
        }}
        initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={AppDrawer} />
        <Stack.Screen name="Media_Screen" component={Media_Screen} />
        <Stack.Screen name="Server_Screen" component={Server_Screen} />
        <Stack.Screen name="Web_View_Screen" component={Web_View_Screen} />
        <Stack.Screen name="Commentory_Screen" component={Commentory_Screen} />
        <Stack.Screen name="About_US" component={About_US} />
        <Stack.Screen name="Privacy_Policy" component={Privacy_Policy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
