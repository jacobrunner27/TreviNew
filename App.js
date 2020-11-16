import React, { Component } from 'react';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import { Navigation } from './src/Navigation';
import Home from './src/Screens/MainFlow/Trending/Trending'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
         <StatusBar translucent backgroundColor={"transparent"} barStyle={"light-content"}/>
        <Navigation />
      </View>
    );
  }
}

export default App;
