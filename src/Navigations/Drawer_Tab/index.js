import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../../Components/CustomDrawer';
import Home from '../../Pages/Home';

const Drawer = createDrawerNavigator();
const AppDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {backgroundColor: 'white', width: '80%'},
        drawerActiveTintColor: 'white',
        drawerActiveBackgroundColor: 'white',
        drawerInactiveTintColor: 'white',
        drawerInactiveBackgroundColor: 'white',
      }}>
      <Drawer.Screen name="Home" component={Home} />
      {/* <Drawer.Screen name="Setting" component={Setting} /> */}
    </Drawer.Navigator>
  );
};
export default AppDrawer;
