import {View, Text, Image, Pressable, Alert, StyleSheet} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const NewsCard = ({item, onPressFunctionality}) => {
  return (
    <Pressable onPress={onPressFunctionality}>
      {/* <View style={styles.cardContainer}>
        <View style={{flex: 1.5}}>
          <Image
            source={require('../../assets/images/2.png')}
            style={styles.imageContainer}
          />
        </View>
        <View style={{flex: 1, paddingLeft: 10, paddingTop: 10}}>
          <Text style={{color: '#464646', fontSize: 18}}>{item.title}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 30,
            }}>
            <Text style={{color: '#c43b3d'}}> {item.date} </Text>
            <Text style={{color: '#464646'}}> Czytaj więcej ... </Text>
          </View>
        </View>
      </View> */}
      <View style={styles.cardContainer}>
        <Image
          style={styles.imageContainer}
          source={require('../../assets/images/2.png')}
        />
        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <View style={styles.cardTextInfo}>
            <Text style={{color: '#fff'}}> {item.date} </Text>
            <Text style={{color: '#fff'}}> Czytaj więcej {'>'} </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 220,
    flexDirection: 'row',
    margin: 5,
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: 10,
  },
  cardText: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    alignSelf: 'flex-end',
    borderRadius: 10,
  },
  cardTextInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 10,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 18,
    margin: 10,
  },
});

export default NewsCard;
