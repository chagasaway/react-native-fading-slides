'use strict';

var React = require('react');
var {
  Animated,
  StyleSheet,
  View,
  Text
} = require('react-native');

var TimerMixin = require('react-timer-mixin');
var tweenState = require('react-tween-state');

let MINIMUM_DELAY = 100;

var FadingSlides = React.createClass({
  mixins: [TimerMixin, tweenState.Mixin],

  getInitialState: function () {
    return {
      opacity: 0,
      currentIndex: 0
    };
  },

  componentDidMount: function () {
    this._fadeOpacity();
  },

  _fadeOpacity: function () {
    this.tweenState('opacity', {
      easing: tweenState.easingTypes.easeInCirc,
      duration: this.props.fadeDuration,
      beginValue: this.state.opacity === 0 ? 0 : 1,
      onEnd: this._getNextSlide,
      endValue: this.state.opacity === 0 ? 1 : 0
    });
  },

  _getNextSlide: function () {
    if (this.state.opacity === 0) {
      var index = this.state.currentIndex + 1;
      index = index < this.props.slides.length ? index: 0;
      this.setState({ currentIndex: index });
      this.setTimeout(() => { this._fadeOpacity(); }, MINIMUM_DELAY);
    } else {
      this.setTimeout(() => { this._fadeOpacity(); },
      this.props.stillDuration || MINIMUM_DELAY);
    }
  },

  render: function () {
    var slide = this.props.slides[this.state.currentIndex];
    return (
      <View style={[styles.slide, {
        height: this.props.height, opacity: this.getTweeningValue('opacity')
      }]}>
        <View style={styles.info} />
        <Animated.Image
          style={{ width: slide.imageWidth, height: slide.imageHeight }}
          source={slide.image}
        />
        <View style={styles.info}>
          <Text style={[styles.title, { color: slide.titleColor }]}>
            {slide.title}
          </Text>
          <Text style={[styles.subtitle, { color: slide.subtitleColor }]}>
            {slide.subtitle}
          </Text>
        </View>
      </View>
    );
  },
});


var styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  info: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'column'
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 20,
    paddingBottom: 30
  }
});

module.exports = FadingSlides;
