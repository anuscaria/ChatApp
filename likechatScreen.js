import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  TextInput,
  Image
} from 'react-native';
import { Card,CardItem,Thumbnail,Body, Left, Right, Button, Icon} from 'native-base'
var likedChatArray = [];
class LikeTab extends React.Component{
    static defaultNavigationOptions = {
        title: 'Liked Chats',
        headerStyle:{height: 30,backgroundColor: '#3eb549',maxWidth:'95%'},
        // header: null,
         gesturesEnabled: true,
         
        };
        constructor() {
            super();
        this.state = {
           commant : []
        }
    }
        componentDidMount(){
            likedChatArray.push(this.props. navigation.getParam('chatContent', 'NO-ID'));
            this.setState({
                commant : likedChatArray
            })
        }
        _keyExtractor = (item, index) => index.toString();
    render(){
        
        return(
            <View style={styles.container}>
            <Image source ={require('../../assets/background.png')}style={styles.backgroundImage} resizeMode="cover"/>
            <FlatList 
                data={this.state.commant}
                initialNumToRender={0}
                keyExtractor={this._keyExtractor}
                renderItem={({item}) =>
                <Card style={{width:"95%",marginLeft:'2%',marginVertical:'2%'}}>
                <CardItem style={{flex:1,flexDirection: 'row',Width:'100%'}}>  
                    <View style={styles.alertText}>
                    <TextInput style={{color:'blue'}} editable = {false} multiline={true} numberOfLines={4}>
                   You liked : {item}
                    </TextInput>
                    </View>
                </CardItem>
                </Card>
                }
            />
                {/* <Text>
                    {this.props. navigation.getParam('chatContent', 'NO-ID')}
                </Text> */}
            </View>
        )
    }
}
export default LikeTab;
const styles = StyleSheet.create({
    container:{
        flex:1,
        // alignItems:'center',
        justifyContent:'center',
        //margin:"5%",
        width:"100%"
    },
    alertText:{
        flex:1,
        paddingLeft:'2%',
        paddingRight:'2%',
        borderRadius:0,
        borderRightColor:'#ffffff',
      },
      backgroundImage:{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        opacity: 0.3,
        width:'100%',
        height:'100%'
    },
})