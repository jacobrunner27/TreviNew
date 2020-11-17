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
        <ImageBackground source={require('../../../Assets/Images/termsAndConditions.jpg')} style={styles.backgroundImage}>
                    {this.props.children}       
        </ImageBackground>
        </View>

        
        <TouchableOpacity style={[styles.agreeButtonContainer, styles.agreeButton]} onPress={() => this.props.navigation.navigate(routes.createAccountScreen)}>
          <Text style={styles.agreeText}>Agree</Text>
        </TouchableOpacity>

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
  agreeButtonContainer: {
    height:48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width:150,
    borderRadius:30,
  },
  agreeButton: {
    backgroundColor: '#EFC102',
    position: 'absolute',
    top: 820,
    shadowOffset: { width: 3, height: 6 },
    shadowColor: 'black',
    shadowOpacity: 0.25,
    elevation: 5
  },
  agreeText: {
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
    marginVertical: -842,
    left: -200
},
});

                                            