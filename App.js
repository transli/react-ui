
import React from 'react';
import {  Image } from 'react-native';
import { Container, Header, Content, Card,Text, CardItem, Thumbnail,  Button, Icon, Left, Body, Right, Form } from 'native-base';
import{Component} from 'module';

export default class App extends React.Component {
  constructor(props){
    super(props);
      this.state={
        isloading:true
      } ;
  }  
 async componentWillMount(){
  await  Expo.Font.loadAsync({
      Roboto:require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium:require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({isloading:false})
  }
 
  render() {
    if(this.state.isloading){
      return <Expo.AppLoading />;
    }
  return (
    <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://images.pexels.com/photos/4823233/pexels-photo-4823233.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://images.pexels.com/photos/4823233/pexels-photo-4823233.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
  );
}
}

