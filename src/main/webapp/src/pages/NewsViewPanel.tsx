import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
  Button,
} from 'react-native';

const NewsViewPanel = ({route}) => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.header}>{route.params?.item.title}</Text>
        </View>
        <View
          style={{
            margin: 5,
            borderColor: 'red',
            borderWidth: 1,
          }}
        />
      </View>
      <View style={{paddingBottom: 10}}>
        <View>
          <Text> {route.params?.item.bodyText} </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 5,
  },
  uncontainer1: {
    flex: 1,
    resizeMode: 'cover',
  },
  uncontainer: {
    flex: 0.5,
    backgroundColor: '#ffffff',
    margin: 5,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#c43b3d',
    marginTop: 5,
  },
  description: {
    fontSize: 12,
    color: 'gray',
    padding: 5,
  },
  startText: {
    color: '#fff',
  },
});

export default NewsViewPanel;
