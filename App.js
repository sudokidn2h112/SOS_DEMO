import React, {Component} from 'react';
import { View, Text,Platform } from 'react-native';
import SOS_Map from './src/components/SOS_Map';
export default class App extends Component {
    render() {  
      return (
         <SOS_Map />
      );
    }
  }
