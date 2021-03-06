import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  ImageBackground,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import IonIcon from 'react-native-vector-icons/Ionicons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { routes } from '../../../services';

export default class LoginView extends Component {

  constructor(props) {
    super(props);
    state = {
      email   : '',
      password: '',
    }
  }
  render() {
    return (
      
      <View style={styles.container}>
        

        <View>
        <ImageBackground source={require('../../../Assets/Images/loginScreen.jpg')} style={styles.backgroundImage}>
                    {this.props.children}       
        </ImageBackground>
        </View>

        <TouchableOpacity style={[styles.loginButtonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate(routes.trending)}>
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>
        
        
        <View style={styles.userInputs}>
            <View style={styles.emailInput} >
            <TextInput  
                style={styles.inputText}
                placeholder="email" 
                placeholderTextColor="#D3D3D3"
                onChangeText={text => this.setState({email:text})}/>
            </View>
        </View>

        <View style={styles.userInputs}>
            <View style={styles.passwordInput} >
            <TextInput  
                style={styles.inputText}
                placeholder="password" 
                placeholderTextColor="#D3D3D3"
                onChangeText={text => this.setState({email:text})}/>
            </View>
        </View>

        <View style={styles.forgotPasswordPosition}> 
          <TouchableOpacity >
            <Text style={styles.forgotPasswordText}> 
                Forgot Password
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rememberMePosition}> 
          <TouchableOpacity >
            <Text style={styles.rememberMeText}> 
                Remember Me
            </Text>
          </TouchableOpacity>
        </View>

        <View styles={styles.headerIconLeft}> 
            <TouchableOpacity style={styles.backIcon} onPress={() => this.props.navigation.navigate(routes.createAccountOrLoginScreen)}>
            <IonIcon name={'chevron-back-outline'} size={35} color={'white'}  />
            </TouchableOpacity>
        </View>
        
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  backgroundImage: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    resizeMode: 'cover'
  },
  loginButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  treviText: {

  },
  loginButtonContainer: {
    height:48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width:120,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: '#EFC102',
    position: 'absolute',
    top: 818,
    shadowOffset: { width: 3, height: 6 },
    shadowColor: 'black',
    shadowOpacity: 0.25,
    elevation: 5
  },
  loginText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold'
  },
  emailInput:{
    width: 375,
    backgroundColor:"white",
    //add shadow to the bottom
    height: 35,
    top: -258,
    borderRadius: 30,
    justifyContent:"center",
    padding:10
  },
  passwordInput: {
    width: 375,
    backgroundColor:"white",
    //add shadow to the bottom
    height: 35,
    top: -140,
    borderRadius: 30,
    justifyContent:"center",
    padding:10
  },
  inputText:{
    height:50,
    fontWeight: 'bold',
    fontSize: 15,
  },
  userInputs: {
    position: "absolute",

  },
  forgotPasswordPosition: {
    position: "absolute",
    top: 350,
    right: 20
  },
  forgotPasswordText: {
    color: '#5D41BC',
    fontSize: 18,
    
},
  rememberMePosition: {
    position: "absolute",
    top: 350,
    left: 40
  },
  rememberMeText: {
    color: '#5D41BC',
    fontSize: 18,
  },
  headerIconLeft: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
},
  backIcon: {
    position: 'absolute',
    marginVertical: -845,
    left: -190
}
  
});

                                            