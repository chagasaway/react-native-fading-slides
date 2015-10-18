/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

var FadingSlides = require('react-native-fading-slides');

var {
  AppRegistry,
  StyleSheet,
  View,
} = React;

var slides = [
  {
    image: require('image!javascript'),
    imageWidth: width - (width * 0.3),
    imageHeight: width - (width * 0.3),
    title: 'JavaScript',
    subtitle: 'The definitive language',
    titleColor: '#fff',
    subtitleColor: 'yellow'
  },
  {
    image: require('image!react'),
    imageWidth: width - (width * 0.3),
    imageHeight: width - (width * 0.3),
    title: 'ReactJS',
    subtitle: 'JavaScript coolest library',
    titleColor: '#fff',
    subtitleColor: 'cyan'
  }
];

var example = React.createClass({
  render: function() {
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
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  }
});

AppRegistry.registerComponent('example', () => example);
