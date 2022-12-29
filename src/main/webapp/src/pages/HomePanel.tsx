import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  FlatList,
  ScrollView,
  Button,
} from 'react-native';

import BloodLevelItem from '../components/BloodLevelItem';

const data = [
  {title: 'a Rh+', bloodLevel: 15},
  {title: 'b Rh+', bloodLevel: 6},
  {title: 'a Rh-', bloodLevel: 18},
  {title: 'b Rh-', bloodLevel: 50},
  {title: 'ab Rh+', bloodLevel: 56},
  {title: 'ab Rh-', bloodLevel: 30},
  {title: '0 Rh+', bloodLevel: 59},
  {title: '0 Rh-', bloodLevel: 9},
];

const HomePanel = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Witaj w aplikacji BeBold!</Text>
      <ImageBackground
        source={require('../../assets/images/background_style1.png')}>
        <Text style={styles.header}>Stany krwi w punkcie.</Text>
        <FlatList
          // style={styles.list}
          key={4}
          data={data}
          numColumns={4}
          renderItem={BloodLevelItem}
        />
      </ImageBackground>
      <View style={styles.uncontainer}>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <Text style={styles.header}>Aktualności</Text>
        {/* <View style={styles.card}>
          <Text> Karta info aktualnosci 123 </Text>
        </View> */}
        <View
          style={{
            height: 250,
            marginTop: 10,
          }}>
          <ScrollView horizontal={true}>
            <View
              style={{
                height: 250,
                width: 250,
                borderColor: '#c4c4c4',
                borderWidth: 1,
                borderRadius: 10,
              }}>
              <View style={{flex: 2}}>
                <Image
                  source={require('../../assets/images/1.png')}
                  style={{
                    flex: 1,
                    width: null,
                    height: null,
                    resizeMode: 'cover',
                  }}
                />
              </View>
              <View style={{flex: 1, paddingLeft: 10, paddingTop: 10}}>
                <Text style={{color: '#464646'}}>
                  {' '}
                  Akcja promocyjna oddawania krwi
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{marginTop: 15, color: '#464646'}}>
                    {' '}
                    28.11.22{' '}
                  </Text>
                  <Text style={{marginTop: 15, color: '#464646'}}>
                    {' '}
                    Czytaj więcej ...{' '}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                height: 250,
                width: 250,
                borderColor: '#c4c4c4',
                borderWidth: 1,
                borderRadius: 10,
                marginLeft: 5,
              }}>
              <View style={{flex: 2}}>
                <Image
                  source={require('../../assets/images/2.png')}
                  style={{
                    flex: 1,
                    width: null,
                    height: null,
                    resizeMode: 'cover',
                  }}
                />
              </View>
              <View style={{flex: 1, paddingLeft: 10, paddingTop: 10}}>
                <Text style={{color: '#464646'}}>
                  {' '}
                  Usprawnienia centrów krwiodawstwa{' '}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{marginTop: 15, color: '#464646'}}>
                    {' '}
                    28.11.22{' '}
                  </Text>
                  <Text style={{marginTop: 15, color: '#464646'}}>
                    {' '}
                    Czytaj więcej ...{' '}
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <Text style={styles.header}>FAQ</Text>
        <View style={styles.card}>
          <Text> Karta info aktualnosci 123 </Text>
        </View>
        <View style={styles.card}>
          <Text> Karta info aktualnosci 123 </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
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
  card: {
    height: 150,
    backgroundColor: '#c43b3d',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 15,
  },
});

export default HomePanel;
