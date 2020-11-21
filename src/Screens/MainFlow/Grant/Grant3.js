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
        <ImageBackground source={require('../../../Assets/Images/Grant3.jpg')} style={styles.backgroundImage}>
                    {this.props.children}       
        </ImageBackground>
        </View>

        <Text style={styles.grantText}> 
          Grant
        </Text>
        <TouchableOpacity style={styles.backIcon} onPress={() => this.props.navigation.navigate(routes.Grant1)}>
        <IonIcon name={'chevron-back-outline'} size={35} color={'white'}  />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.continueButtonContainer, styles.continueButton]} onPress={()=> this.props.navigation.navigate(routes.Grant2)}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
        
        <TouchableHighlight style={[styles.takePhotoButtonContainer, styles.takePhotoButton]} onPress={()=> this.props.navigation.navigate(routes.loginScreen)}>
          <Text style={styles.takePhotoText}>Take Photo</Text>
        </TouchableHighlight>

        <TouchableHighlight style={[styles.selectPhotoButtonContainer, styles.selectPhotoButton]} onPress={()=> this.props.navigation.navigate(routes.loginScreen)}>
          <Text style={styles.selectPhotoText}>Select Photo</Text>
        </TouchableHighlight>
                     

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
  continueButtonContainer: {
    height:48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width:150,
    borderRadius:30,
  },
  continueButton: {
    backgroundColor: '#EFC102',
    position: 'absolute',
    top: 818,
    shadowOffset: { width: 3, height: 6 },
    shadowColor: 'black',
    shadowOpacity: 0.16,
    elevation: 5
  },
  continueText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold'
  },
  takePhotoButton: {
    backgroundColor: "white",
    position: 'absolute',
    top: 220,
    left: 42,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'black',
    shadowOpacity: 0.25,
    elevation: 5
  },
  takePhotoButtonContainer: {
    height:38,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width:150,
    borderRadius:30,
  },
  takePhotoText: {
    fontSize: 16,
    color: '#585AD6',
    fontWeight: 'bold'
  },
  selectPhotoButton: {
    backgroundColor: "white",
    position: 'absolute',
    top: 220,
    right: 50,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'black',
    shadowOpacity: 0.25,
    elevation: 5
  },
  selectPhotoButtonContainer: {
    height:38,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width:150,
    borderRadius:30,
  },
  selectPhotoText: {
    fontSize: 16,
    color: '#585AD6',
    fontWeight: 'bold'
  },
  grantText: {
    position: 'absolute',
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    top: 50
  },
  backIcon: {
    position: 'absolute',
    top: 56,
    left: 10,
  },
});

                                            