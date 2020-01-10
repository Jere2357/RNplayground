import React, {Component} from 'react';
import {View, Dimensions, StyleSheet, Button} from 'react-native';
import {
  Header,
  Left,
  Body,
  Title,
} from 'native-base';
import Pdf from 'react-native-pdf';

class DocumentPage extends Component {
  render() {
    const source = {
      uri:
        'https://www.gotta-eat.com/wp-content/uploads/2013/05/How-to-Cook-Rice-Step-By-Step-Picture-Book-Recipe.pdf',
      cache: true,
    };

    return (
      <View style={styles.container}>
        <Header>
          <Left>
            <Button title={'<'} onPress={() => this.props.history.push('/')} />
          </Left>
          <Body>
            <Title>PDF</Title>
          </Body>
        </Header>
        <Pdf
          source={source}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`current page: ${page}`);
          }}
          onError={error => {
            console.log(error);
          }}
          onPressLink={uri => {
            console.log(`Link presse: ${uri}`);
          }}
          style={styles.pdf}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    display: 'flex',
  },
  pdf: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default DocumentPage;
