import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Platform
} from 'react-native';
import {
    createAppContainer
  } from 'react-navigation';
import {Icon} from 'native-base'
import {createStackNavigator} from 'react-navigation-stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import chatScreen from './Component/chatScreen'
import likechatScreen from './Component/likechatScreen'


// class MainScreen extends React.Component{
//     render(){
//         return(
//             <AppTabNavigator/>
//         )
//     }
// }
// export default MainScreen;

const HomeNavigator = createStackNavigator(
    {
      Home:{
        screen: chatScreen
        },
     Details : {
       screen : likechatScreen
     }
    },
    {
        initialRouteName : 'Home'
     }
  );
  const App = createAppContainer(HomeNavigator);
export default App;