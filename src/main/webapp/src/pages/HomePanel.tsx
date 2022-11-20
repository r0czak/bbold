import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

//import Item from '../components/BloodLevelItem';

const itemsData = [
  {
    title: 'a Rh+',
    icon: (
      <Image
        style={{width: 50, height: 50}}
        source={require('../../assets/images/appBanner.png')}
        resizeMode="contain"
      />
    ),
  },
  {
    title: 'a Rh-',
    icon: (
      <Image
        style={{width: 50, height: 50}}
        source={require('../../assets/images/appBanner.png')}
        resizeMode="contain"
      />
    ),
  },
  {
    title: 'b Rh+',
    icon: (
      <Image
        style={{width: 50, height: 50}}
        source={require('../../assets/images/appBanner.png')}
        resizeMode="contain"
      />
    ),
  },
  {
    title: 'b Rh-',
    icon: (
      <Image
        style={{width: 50, height: 50}}
        source={require('../../assets/images/appBanner.png')}
        resizeMode="contain"
      />
    ),
  },
  {
    title: 'ab Rh+',
    icon: (
      <Image
        style={{width: 50, height: 50}}
        source={require('../../assets/images/appBanner.png')}
        resizeMode="contain"
      />
    ),
  },
  {
    title: 'ab Rh-',
    icon: (
      <Image
        style={{width: 50, height: 50}}
        source={require('../../assets/images/appBanner.png')}
        resizeMode="contain"
      />
    ),
  },
  {
    title: 'a Rh-',
    icon: (
      <Image
        style={{width: 60, height: 60}}
        source={require('../../assets/images/appBanner.png')}
        resizeMode="contain"
      />
    ),
  },
  {
    title: 'a Rh+',
    icon: (
      <Image
        style={{width: 60, height: 60}}
        source={require('../../assets/images/highBloodDrop.png')}
        resizeMode="contain"
      />
    ),
  },
];

const Item = ({item}) => {
  return (
    <View>
      {item.icon}
      <Text>{item.title}</Text>
    </View>
  );
};

const HomePanel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Poziomy krwi w punktach.</Text>
      <FlatList
        // style={styles.list}
        data={itemsData}
        numColumns={4}
        renderItem={Item}
        contentContainerStyle={{paddingBottom: 0}}
      />

      <Text style={styles.header}>Aktualności</Text>

      <Text style={styles.description}>
        Lelum polelum ipsum, Ut in laorest orci, id fringilla lacus.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#c43b3d',
    marginBottom: 10,
  },
  description: {
    fontSize: 12,
    color: 'gray',
    padding: 5,
  },
  startText: {
    color: '#fff',
  },
  list: {
    flex: 1,
    width: '100%', // 100% devided by the number of rows you want
    height: '100%',
    padding: 10,
    borderWidth: 1.5,
    borderColor: '#fff',
  },
});

export default HomePanel;
