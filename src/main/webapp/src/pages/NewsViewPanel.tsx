import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView, Button} from 'react-native';

const NewsViewPanel = ({route}) => {
  return (
    <ScrollView>
      <Image style={styles.image} source={route.params?.item.imageURL} />
      <View style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.header}>{route.params?.item.title}</Text>
        </View>
        <View
          style={{
            margin: 5,
            borderColor: '#c43b3d',
            borderWidth: 1,
          }}
        />
        <View style={{paddingBottom: 10}}>
          <Text style={styles.dateText}> Data: {route.params?.item.date} </Text>
        </View>
        <View style={{paddingBottom: 10}}>
          <Text style={styles.description}>
            {' '}
            {route.params?.item.bodyText}{' '}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#c43b3d',
  },
  description: {
    fontSize: 14,
    color: '#000',
  },
  dateText: {
    fontSize: 14,
    color: '#808080',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'stretch',
  },
});

export default NewsViewPanel;
