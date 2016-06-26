import React, { Component } from 'react';

import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';

var { width, height } = Dimensions.get('window');

const FadingSlides = require('react-native-fading-slides');

const slides = [
  {
    image: require('./img/javascript.png'),
    imageWidth: width - (width * 0.3),
    imageHeight: width - (width * 0.3),
    title: 'JavaScript',
    subtitle: 'The definitive language',
    titleColor: '#fff',
    subtitleColor: 'yellow'
  },
  {
    image: require('./img/react.png'),
    imageWidth: width - (width * 0.3),
    imageHeight: width - (width * 0.3),
    title: 'ReactJS',
    subtitle: 'JavaScript coolest library',
    titleColor: '#fff',
    subtitleColor: 'cyan'
  }
];

class example extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FadingSlides
          slides={slides}
          fadeDuration={1200}
          stillDuration={2000}
          height={height}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
});

AppRegistry.registerComponent('example', () => example);
