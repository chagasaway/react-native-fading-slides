import React from "react";
import { StyleSheet, Text, Image, View, Animated, Easing } from "react-native";
import PropTypes from "prop-types";

const MINIMUM_DELAY = 100;

export default class FadingSlides extends React.Component {
  state = {
    opacity: new Animated.Value(1),
    currentIndex: 0
  };

  componentDidMount() {
    this._wait(this._hide);
  }

  _animate = (targetValue, cb) => {
    Animated.timing(this.state.opacity, {
      toValue: targetValue,
      easing: Easing.circle,
      duration: this.props.fadeDuration,
      useNativeDriver: true
    }).start(() => this._wait(cb));
  };

  _wait = cb => {
    Animated.delay(this.props.stillDuration).start(cb);
  };

  _show = () => {
    this._animate(1, this._hide);
  };

  _hide = () => {
    this._animate(0, this._changeSlide);
  };

  _changeSlide = () => {
    let index = this.state.currentIndex + 1;
    index = index < this.props.slides.length ? index : 0;
    this.setState({ currentIndex: index }, this._show);
  };

  render() {
    const slide = this.props.slides[this.state.currentIndex];
    return (
      <Animated.View
        style={[
          styles.slide,
          { height: this.props.height, opacity: this.state.opacity }
        ]}
      >
        <View style={styles.info} />
        <Image
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
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  info: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "column"
  },
  title: {
    fontSize: 22,
    fontWeight: "700"
  },
  subtitle: {
    fontSize: 20,
    paddingBottom: 30
  }
});

FadingSlides.propTypes = {
  stillDuration: PropTypes.number,
  fadeDuration: PropTypes.number,
  height: PropTypes.number,
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.number,
      imageWidth: PropTypes.number,
      imageHeight: PropTypes.number,
      title: PropTypes.string,
      subtitle: PropTypes.string,
      titleColor: PropTypes.string,
      subtitleColor: PropTypes.string
    })
  )
};

FadingSlides.defaultProps = {
  stillDuration: MINIMUM_DELAY,
  fadeDuration: MINIMUM_DELAY
};
