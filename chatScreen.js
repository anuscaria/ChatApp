import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput ,
  Image
} from 'react-native';
import { Card,CardItem,Thumbnail,Body, Left, Right, Button, Icon} from 'native-base'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/AntDesign';
import { createSwitchNavigator } from 'react-navigation';

var messages = [];
var replay = [
    {label:'how are you'},
]
class LikeTab extends React.Component{
    constructor() {
        super();
    this.state = {
        message : '',
        msg : '',
        clicked: false,
        timePassed: false,
        count:0
    }
}
    createChatMessage(){
        if(this.state.clicked == true){
            return messages.map((item,key) => {
                return( <View>
                {/* return( */}
                    <Card style={{width:'90%',alignSelf:'flex-end',marginRight:'1%'}} key={key}>
                        <CardItem >
                        <Body>
                           
                           <Text style={{alignSelf:'flex-end'}}>{item}</Text>
                           <Icons name="like2" size={23} onPress = { () =>{ this.props.navigation.navigate('Details',
                        { chatContent : item });}}/>
                            
                        </Body>
                        </CardItem>
                        </Card>
                        {this.state.timePassed == true ? this.createReplayMessage() : null}

                </View>)
            })
        }
      
        
    }
    createReplayMessage(){
        return(
            <Card style={{width:'90%',alignSelf:'flex-start',marginRight:'1%'}}>
                <CardItem >
                <Body>
                   <Text>{replay[this.state.count].label}</Text>
                  {this.clearTime()}
                </Body>
                </CardItem>
                </Card>
        )
    }
    
     clearTime(){
        clearTimeout(this.timerHandle);      // ***
        this.timerHandle = false;
       // this.state.timePassed = false;
     }
    render(){
        return(
            <View>
                <Image source ={require('../../assets/background.png')}style={styles.backgroundImage} resizeMode="cover"/>
                <ScrollView style={{minHeight:'83.5%'}}>
                
                <View style={{minHeight:'100%'}} >
                <Card style={{height:'13%',alignContent:'space-around'}}>
                <CardItem>
                <Text><Text>Hi Iam </Text><Text style={{fontWeight: "bold"}}>Riya</Text>.Your friendly <Text style={{fontWeight: "bold"}}>bankin assistant</Text>.Unlike my friend Siri,Alexa and Google assistant, <Text style={{fontWeight: "bold"}}>I'm Banking expert</Text></Text>
                </CardItem>
                </Card>
                        <Card style={{width:'90%',alignContent:'space-around',margin:'1%'}}>
                        <CardItem>
                        <Body>
                            <Text >HAI..</Text>
                        </Body>
                        </CardItem>
                        </Card>
                        {this.createChatMessage()}
                </View>
                </ScrollView>
                <Card style={{height:"15%",borderColor:'#000',borderWidth:1,borderStyle:'solid',borderRadius:5}}>
                    <CardItem >
                    <Left>
                        <TextInput placeholder="Type something"
                            placeholderTextColor="grey"
                            numberOfLines={10}
                            multiline={true}
                            style={{width:'95%'}}
                            onChangeText={(message) => {
                                this.setState({
                                    message,
                                })
                            }}
                            value={this.state.message}/>
                            <FontAwesome name="send" style={{right:0,}} size={23} onPress={() =>{
                                messages.push(this.state.message);
                                //alert(this.state.message)
                                this.setState({
                                    msg:this.state.message,
                                    clicked:true,
                                    message:'',
                                    count:this.state.count
                                })
                                console.log(this.timerHandle);
                               
                                if(!this.timerHandle){
                                    this.timerHandle = setTimeout(() => {  
                                        this.setState({ timePassed: true });        // ***
                                        this.timerHandle = true;                  // ***
                                      }, 2000);
                                }
                                
                            }}/>
                    </Left>
                    </CardItem>
                </Card>
            </View>
        )
    }
}
export default LikeTab;
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
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