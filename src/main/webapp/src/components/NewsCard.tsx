import {View, Text, Image, Pressable, Alert, StyleSheet} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const NewsCard = ({item, onPressFunctionality}) => {
  return (
    <Pressable onPress={onPressFunctionality}>
      <View style={styles.cardContainer}>
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
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    // width: 270,
    height: 240,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    margin: 5,
  },
  imageContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});

export default NewsCard;
