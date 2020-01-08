import React, {Component} from 'react';
import {View, Button, StyleSheet, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';

class FileImageChooserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSource: null,
    };
  }

  async handlerImagePicker() {
    // More info on all the options is below in the API Reference... just some common use cases shown here
    const options = {
      title: 'Upload Profile',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info in the API Reference)
     */
    ImagePicker.showImagePicker(options, response => {
      const source = {uri: response.uri};

      // You can also display the image using data:
      // const source = { uri: 'data:image/jpeg;base64,' + response.data };

      this.setState({
        imageSource: source,
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={this.state.imageSource} style={styles.stretch} />
        <Button
          title={'pick an image'}
          onPress={() => this.handlerImagePicker()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(127, 237, 245, 1)',
    height: 800,
  },
  stretch: {
    width: 200,
    height: 300,
  },
});

export default FileImageChooserPage;
