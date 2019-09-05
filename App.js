/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,TextInput
} from 'react-native';

import {createStackNavigator, createAppContainer,createBottomTabNavigator} from 'react-navigation';

class HomeScreen extends Component{
  constructor(){
    super();
    this.state = {
      Id:"",
      Name: ""
    }
    
  }
  static navigationOptions = {
    title: 'Home',
  };

  render(){
    console.log("Profile")
    const {navigate} = this.props.navigation;
    return(
      <View style = {styles.container}>
        <Text style = {styles.text}>Home Component</Text>
        <TextInput 
            style = {styles.textInput}
            placeholder = "Id"
            onChangeText={(text) => this.setState({Id:text})}
            />
        <TextInput
          style = {styles.textInput}
          placeholder = "Name"
          onChangeText={(text) => this.setState({Name:text})}
        />
        <Button
          style={{marginTop:50}}
          title="Go to Profile" 
          onPress={() => navigate('Profile', {
              Id:this.state.Id,
              Name:this.state.Name
          })}/>
      </View>
    )
  }
}

class ProfileScreen extends Component{
  
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('Name', 'No Name'),
    };
  };

  render(){
    const {navigate} = this.props.navigation;
    const {navigation } = this.props;
    const Id = navigation.getParam('Id','No Id');
    const Name = navigation.getParam("Name","No name found")
    console.log("Home") 
    return(
      
      <View style = {styles.container}>
        <Text style = {styles.text}>Test Component</Text>
        <Button 
          title="Go to Home"
          onPress={() => navigate('Home', {name: 'Jane'})}/>
        <Text> Id :{Id}</Text>
        <Text>Name :{Name}</Text>
      </View>
    )
  }
}

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
});
// const TabNavigator = createBottomTabNavigator(
//   {
//     Home: HomeScreen,
//     Settings: ProfileScreen,
//   }
// );

const App = createAppContainer(MainNavigator);


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontSize:25,
    alignItems:'center'
  },
  textInput:{
    marginTop:10,
    marginBottom:5,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#FC5B1A',
    padding:5,
    width:200
  }
});

export default App;
