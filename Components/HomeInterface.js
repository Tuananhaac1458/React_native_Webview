import React, { Component } from 'react';
import {Button,View} from 'react-native'
export default class HomeScreen extends Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View>
            <Button
          title="Go to Bank"
          onPress={() => navigate('Bank')}
        />
        <Button
          title="Go to User"
          onPress={() => navigate('User', {name: 'Jane'})}
        />
        
        </View>
      );
    }
  }