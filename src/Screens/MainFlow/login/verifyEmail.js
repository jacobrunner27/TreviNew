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
import { width, height, totalSize } from 'react-native-dimension';

import IonIcon from 'react-native-vector-icons/Ionicons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { routes } from '../../../services';
import { verifyEmail } from '.';

export default class LoginView extends Component {

  constructor(props) {
    super(props);
    state = {
      email   : '',
      password: '',
      code: '',
    }
  }
  render() {
    return (
      
      <View style={styles.container}>

        <View>
        <ImageBackground source={require('../../../Assets/Images/verifyEmail.jpg')} style={styles.backgroundImage}>
                    {this.props.children}       
        </ImageBackground>
        </View>

        <View style={styles.submitButtonContainer}> 
        <TouchableOpacity style={styles.submitButton} onPress={()=> this.props.navigation.navigate(routes.trending)}>
          <Text style={styles.submitText}>submit</Text>
        </TouchableOpacity>
        </View>

        
        <View style={styles.userInputs}>
         <View style={styles.emailCodeInput} >
            <TextInput  
                style={styles.inputText}
                placeholder="Code" 
                placeholderTextColor="#D3D3D3"
                onChangeText={text => this.setState({code:text})}/>
         </View>
        </View>

        <View style={styles.resendCodePosition}> 
          <TouchableOpacity >
            <Text style={styles.resendCodeText}> 
                Resend code
            </Text>
          </TouchableOpacity>
        </View>

        <View styles={styles.headerIconLeft}> 
            <TouchableOpacity style={styles.backIcon} onPress={() => this.props.navigation.navigate(routes.createAccountScreen)}>
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
  userInputs: {
    position: "absolute",

  },
  emailCodeInput:{
    width: 375,
    backgroundColor:"white",
    //add shadow to the bottom
    height: 35,
    top: -260,
    borderRadius: 30,
    justifyContent:"center",
    padding:10,
    shadowOffset: { width: 3, height: 6 },
    shadowColor: 'black',
    shadowOpacity: 0.25,
    elevation: 5
  },
  inputText:{
    height:50,
    fontWeight: 'bold',
    fontSize: 15,
  },
  resendCodeText: {
      color: '#5D41BC',
      fontSize: 15,
      fontWeight: 'bold'
  },
  resendCodePosition: {
    position: "absolute",
    top: 220,
    right: 20
  },
  submitButtonContainer: {
    position: 'absolute',
    top: 828,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width:131,
    height: 43,
    borderRadius:30,
    backgroundColor: '#EFC102',
    shadowOffset: { width: 3, height: 6 },
    shadowColor: 'black',
    shadowOpacity: 0.25,
    elevation: 5
  },
  submitText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold'
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
},
});

                                            