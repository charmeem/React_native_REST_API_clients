import React from 'react';
import {View} from 'react-native';
import { ExpoConfigView } from '@expo/samples';
import Ionicons from "react-native-ionicons";

export default class SettingsScreen extends React.Component {
  static navigationOptions = {

      Iconbar: () => (
          <View>
            <Icon name="add" />

            <Icon ios="ios-add" android="md-add" />
          </View>
      )
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ExpoConfigView />;
  }
}
