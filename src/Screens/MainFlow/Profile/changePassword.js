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
        <ImageBackground source={require('../../../Assets/Images/changePassword.jpg')} style={styles.backgroundImage}>
                    {this.props.children}       
        </ImageBackground>
        </View>

        <Text style={styles.passwordText}>
          Password
        </Text>

        <TouchableOpacity style={styles.backIcon} onPress={() => this.props.navigation.navigate(routes.accountSettings)}>
          <IonIcon name={'chevron-back-outline'} size={35} color={'white'}  />
        </TouchableOpacity>

        
        <View style={styles.forgotPasswordPostion}> 
        <TouchableOpacity onPress={() => this.props.navigation.navigate(routes.resetPassword)}>
        <Text style={styles.forgotPasswordText}>
            Forgot Password
        </Text>
        </TouchableOpacity>
        </View>
        

        <View style={styles.saveButton}> 
       <TouchableOpacity style={[styles.saveButtonContainer, styles.continueButton]} onPress={() => this.props.navigation.navigate(routes.profile)}>
          <Text style={styles.continueText}>Save</Text>
        </TouchableOpacity>
        </View>
     
        
        
        <View style={styles.userInputs}>
            <View style={styles.currentPassword} >
            <TextInput  
                style={styles.currentPasswordText}
                placeholder="current password" 
                placeholderTextColor="#D3D3D3"
                onChangeText={text => this.setState({email:text})}/>
            </View>
            <View style={styles.newPassword} >
            <TextInput  
                style={styles.newPasswordText}
                placeholder="new password" 
                placeholderTextColor="#D3D3D3"
                onChangeText={text => this.setState({email:text})}/>
            </View>
            <View style={styles.newPasswordReEntry} >
            <TextInput  
                style={styles.newPasswordReEntryText}
                placeholder="new Password" 
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
  saveButton: {
    position: 'absolute',
    top: 818,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'black',
    shadowOpacity: 0.25,
    elevation: 5,
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
  saveButtonContainer: {
    height:48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width:150,
    borderRadius:30
  },
  submitText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold'
  },
  currentPasswordText: {
    position: 'absolute',
    top: -50,
    left: 20,
    height:145,
    fontWeight: 'bold',
    fontSize: 15,
    alignContent: 'center',
    paddingBottom: 6
  },
  userInputs: {
    position: "absolute",

  },
  currentPassword: {
    width: 370,
    backgroundColor:"white",
    //add shadow to the bottom
    height: 37,
    top: -240,
    borderRadius: 20,
    justifyContent:"center",
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'black',
    shadowOpacity: 0.25,
    elevation: 5
     
  },
  continueButton: {
    backgroundColor: '#EFC102',
  },
  continueText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold'
  },
  passwordText: {
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
newPassword: {
    width: 370,
    backgroundColor:"white",
    position: 'absolute',
    height: 37,
    top: -90,
    borderRadius: 20,
    justifyContent:"center",
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'black',
    shadowOpacity: 0.25,
    elevation: 5
     
},
newPasswordText: {
    position: 'absolute',
    top: -50,
    left: 20,
    height:145,
    fontWeight: 'bold',
    fontSize: 15,
    alignContent: 'center',
    paddingBottom: 6
},
newPasswordReEntry: {
    width: 370,
    backgroundColor:"white",
    //add shadow to the bottom
    height: 37,
    top: -7,
    borderRadius: 20,
    justifyContent:"center",
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'black',
    shadowOpacity: 0.25,
    elevation: 5
     
},
newPasswordReEntryText: {
    position: 'absolute',
    top: -50,
    left: 20,
    height:145,
    fontWeight: 'bold',
    fontSize: 15,
    alignContent: 'center',
    paddingBottom: 6
},
forgotPasswordText: {
    color: '#5D41BC',
    fontSize: 15,
    fontWeight: 'bold'
},
forgotPasswordPostion: {
    position: 'absolute',
    top: 220,
    right: 18

}

});

                                            