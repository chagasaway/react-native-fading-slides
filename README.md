## React Native FadingSlides Component

[![DeepScan Grade](https://deepscan.io/api/projects/1122/branches/2515/badge/grade.svg)](https://deepscan.io/dashboard/#view=project&pid=1122&bid=2515)

Simple looped fading slides carousel for React Native.

![alt tag](http://i.giphy.com/l41lR24WgEwYTaHzW.gif)

### Installation

```bash
npm install --save react-native-fading-slides
```

### Properties

```
fadeDuration={500} // Milliseconds for slide fade
stillDuration={1000} // Milliseconds for slide still
height={1000} // Set the slides component height
slides={slidesList} // Set the slides list
startAnimation={true} // Start or stops animation
```

### Slides Properties

```
title={"Title"} // Slide's title
titleColor={"#fff"} // Slide's title color
subtitle={"Subtitle"} // Slide's subtitle
subtitleColor={"#fff"} // Slide's subtitle color
image={require('image!filename')} // Slide's image
imageWidth={1000} // Slide's image width
imageHeight={1000} // Slide's image height
```

### Usage Example

```javascript
import FadingSlides from 'react-native-fading-slides';

const slides = [
  {
    image: require('image!squared-image'),
    imageWidth: 100,
    imageHeight: 100,
    title: 'Hello World',
    subtitle: 'This is a beautiful world',
    titleColor: '#fff',
    subtitleColor: '#fff',
  },
  {
    image: require('image!wide-image'),
    imageWidth: 200,
    imageHeight: 100,
    title: 'Bye World',
    subtitle: 'This is a see you soon',
    titleColor: '#fff',
    subtitleColor: '#fff',
  }
];

//...

render() {
  return (
    <View>
      <FadingSlides
        slides={slides}
        fadeDuration={1200}
        stillDuration={2000}
        height={500}
        startAnimation={true}
      />
    </View>
  );
};
```
