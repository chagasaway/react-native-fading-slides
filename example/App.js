import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

import FadingSlides from 'react-native-fading-slides';

const { width, height } = Dimensions.get('window');

const slides = [
  {
    image: require('./img/javascript.png'),
    imageWidth: width - width * 0.3,
    imageHeight: width - width * 0.3,
    title: 'JavaScript',
    subtitle: 'The definitive language',
    titleColor: '#fff',
    subtitleColor: 'yellow',
  },
  {
    image: require('./img/react.png'),
    imageWidth: width - width * 0.3,
    imageHeight: width - width * 0.3,
    title: 'ReactJS',
    subtitle: 'JavaScript coolest library',
    titleColor: '#fff',
    subtitleColor: 'cyan',
  },
];

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FadingSlides slides={slides} fadeDuration={1200} stillDuration={2000} height={height} />
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
