import React, { Component } from 'react';
import { width, height, totalSize } from 'react-native-dimension';
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
        <ImageBackground source={require('../../../Assets/Images/ResetPasswordConfirmation.jpg')} style={styles.backgroundImage}>
                    {this.props.children}       
        </ImageBackground>
        </View>

        <Text style={styles.resetPasswordText}>
          Reset Password
        </Text>

        <View style={styles.resendCodePostion}> 
        <TouchableOpacity >
        <Text style={styles.resendCodeText}>
            Resend Code
        </Text>
        </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.backIcon} onPress={() => this.props.navigation.navigate(routes.changePassword)}>
          <IonIcon name={'chevron-back-outline'} size={35} color={'white'}  />
        </TouchableOpacity> 

        <View style={styles.accountSettingsButtonPosition}> 
       <TouchableOpacity style={styles.accountSettingsButton} onPress={() => this.props.navigation.navigate(routes.accountSettings)}>
          <Text style={styles.accountSettingsText}>Account Settings</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.nextButton}> 
       <TouchableOpacity style={[styles.nextButtonContainer, styles.continueButton]} onPress={() => this.props.navigation.navigate(routes.changePasswordConfirmation)}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
        </View>
        
        <View style={styles.userInputs}>
            <View style={styles.recommendations} >
            <TextInput  
                style={styles.recommendationsText}
                placeholder="email adress" 
                placeholderTextColor="#D3D3D3"
                onChangeText={text => this.setState({email:text})}/>
            </View>
            
            
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
  nextButton: {
    position: 'absolute',
    top: 818,
    shadowOffset: { width: 3, height: 6 },
    shadowColor: 'black',
    shadowOpacity: 0.16,
    elevation: 5
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
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
  loginButton: {
    backgroundColor: "white",
    position: 'absolute',
    top: 750
  },
  nextButtonContainer: {
    height:48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width:120,
    borderRadius:30,
  },
  recommendationsText: {
    position: 'absolute',
    top: -50,
    left: 20,
    height:145,
    fontWeight: 'bold',
    fontSize: 15,
  },
  userInputs: {
    position: "absolute",

  },
  recommendations: {
    width: 375,
    backgroundColor:"white",
    //add shadow to the bottom
    height: 37,
    top: -255,
    borderRadius: 20,
    justifyContent:"center",
    padding:10,
    shadowOffset: { width: 3, height: 6 },
    shadowColor: 'black',
    shadowOpacity: 0.16,
    elevation: 5
  },
  continueButton: {
    backgroundColor: '#EFC102',
  },
  nextText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold'
  },
  resetPasswordText: {
    fontSize: 34,
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    top: 52,
},
  backIcon: {
    position: 'absolute',
    top: 56,
    left: 10,
},
resendCodeText: {
    color: '#5D41BC',
    fontSize: 15,
    fontWeight: 'bold'
},
resendCodePostion: {
    position: 'absolute',
    top: 220,
    right: 18

},
accountSettingsButtonPosition: {
    position: 'absolute',
    top: 284,
},
accountSettingsButton: {
    width: 175,
    backgroundColor:"white",
    //add shadow to the bottom
    height: 37,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: 3, height: 6 },
    shadowColor: 'black',
    shadowOpacity: 0.16,
    elevation: 5

},
accountSettingsText: {
    fontSize: 15,
    color: '#5D41BC',
}
});

                                            