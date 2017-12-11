import React from 'react';
import { Text, Image, View, Animated, Easing } from 'react-native';
import PropTypes from 'prop-types';
import styles from './index.styles';

const MINIMUM_DELAY = 100;

export default class FadingSlides extends React.Component {
  state = {
    opacity: new Animated.Value(1),
    currentIndex: 0,
  };

  componentDidMount() {
    if (this.props.startAnimation) {
      this.wait(this.hide);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.startAnimation) {
      this.wait(this.hide);
    }
  }

  animate = (targetValue, cb) => {
    Animated.timing(this.state.opacity, {
      toValue: targetValue,
      easing: Easing.circle,
      duration: this.props.fadeDuration,
      useNativeDriver: true,
    }).start(() => this.wait(cb));
  };

  wait = cb => {
    Animated.delay(this.props.stillDuration).start(cb);
  };

  show = () => {
    this.animate(1, this.hide);
  };

  hide = () => {
    this.animate(0, this.changeSlide);
  };

  changeSlide = () => {
    let index = this.state.currentIndex + 1;
    index = index < this.props.slides.length ? index : 0;
    if (this.props.startAnimation) {
      this.setState({ currentIndex: index }, () => this.wait(this.show));
    }
  };

  render() {
    const slide = this.props.slides[this.state.currentIndex];
    const containerStyles = [
      styles.slide,
      { height: this.props.height, opacity: this.state.opacity },
    ];
    return (
      <Animated.View style={containerStyles}>
        <View style={styles.info} />
        <Image
          style={{ width: slide.imageWidth, height: slide.imageHeight }}
          source={slide.image}
        />
        <View style={styles.info}>
          <Text style={[styles.title, { color: slide.titleColor }]}>{slide.title}</Text>
          <Text style={[styles.subtitle, { color: slide.subtitleColor }]}>{slide.subtitle}</Text>
        </View>
      </Animated.View>
    );
  }
}

FadingSlides.propTypes = {
  startAnimation: PropTypes.bool,
  stillDuration: PropTypes.number,
  fadeDuration: PropTypes.number,
  height: PropTypes.number.isRequired,
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.number,
      imageWidth: PropTypes.number,
      imageHeight: PropTypes.number,
      title: PropTypes.string,
      subtitle: PropTypes.string,
      titleColor: PropTypes.string,
      subtitleColor: PropTypes.string,
    }),
  ).isRequired,
};

FadingSlides.defaultProps = {
  startAnimation: true,
  stillDuration: MINIMUM_DELAY,
  fadeDuration: MINIMUM_DELAY,
};
