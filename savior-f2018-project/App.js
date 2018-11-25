import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FixedHeader from "./elements/FixedHeader";
import { Col, Row, Grid } from "react-native-easy-grid";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FixedHeader/>
          <Grid >
            <Row>
              <Col style={styles.gridbackground}>
                  <Text>1</Text>
              </Col>
              <Col style={styles.gridbackground}>
                  <Text>2</Text>
              </Col>
            </Row>
              <Row>
                  <Col style={styles.gridbackground}>
                      <Text>1</Text>
                  </Col>
                  <Col style={styles.gridbackground}>
                      <Text>2</Text>
                  </Col>
              </Row>
          </Grid>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  gridbackground:{
      backgroundColor:'#d32f2f',
      margin:5,
      shadowOffset:{  width: 10,  height: 10,  },
      shadowColor: 'grey',
      shadowOpacity: 1.0,
  }
});
