import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {
  createAppContainer
} from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from 'react-navigation-stack';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Icon} from 'native-base'
import HomeScreen from './screens/HomeScreen';
// export default class App extends React.Component{
//   render(){
//     return(
//       <AppStackNavigator/>
//     )
//   }
// }
// export default class App extends React.Component{
//   render(){
//     return(
//       <MainScreen/>
//     );
//   }
// }
const AppStackNavigator = createStackNavigator({
  Chat: {
    screen:HomeScreen,
    navigationOptions: {
      headerTitleStyle: { alignSelf: 'center',paddingRight:10},
     // headerLeft:<FontAwesome name="camera"  size={23}/>,
      //title:"Chat",
     // headerRight:<FontAwesome name="send" style={{paddingRight:10}} size={23}/>
  },
  }
});
const App = createAppContainer(AppStackNavigator);

export default App;