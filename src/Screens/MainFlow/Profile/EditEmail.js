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
        <ImageBackground source={require('../../../Assets/Images/editEmailScreen.jpg')} style={styles.backgroundImage}>
                    {this.props.children}       
        </ImageBackground>
        </View>

        <Text style={styles.emailText}>
          Email
        </Text>

        <TouchableOpacity style={styles.backIcon} onPress={() => this.props.navigation.navigate(routes.accountSettings)}>
          <IonIcon name={'chevron-back-outline'} size={35} color={'white'}  />
        </TouchableOpacity> 

        <View style={styles.saveButton}> 
       <TouchableOpacity style={[styles.saveButtonContainer, styles.continueButton]} onPress={() => this.props.navigation.navigate(routes.profile)}>
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
        </View>
        
        <View style={styles.userInputs}>
            <View style={styles.recommendations} >
            <TextInput  
                style={styles.recommendationsText}
                placeholder="jacob@trevi.com" 
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
  saveButtonContainer: {
    height:48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width:150,
    borderRadius:30,
  },
  saveText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold'
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
    top: -300,
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
  saveText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold'
  },
  emailText: {
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
});

                                            