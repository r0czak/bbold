import * as React from 'react';
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  Modal,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {Card} from 'react-native-paper';

const onModal = (item: {title: string}) => {
  Alert.alert('  \n' + item.title);
};

const DiscountCard = ({item}) => {
  return (
    <Card style={{backgroundColor: '#fff', margin: 5}}>
      <Card.Cover source={item.uri} />
      <Card.Content>
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.paragraphText}>{item.description}</Text>
      </Card.Content>
      <View style={{flexDirection: 'column', flex: 2, margin: 5}}>
        <View style={styles.rowContainer}>
          <View style={{flex: 1, paddingTop: 5}}>
            {item.status ? (
              <Text style={{color: '#3cbd00', fontSize: 15}}> Aktywne </Text>
            ) : (
              <Text style={{color: '#ff0202', fontSize: 15}}> Nieaktywne </Text>
            )}
          </View>
          <View style={{flex: 1}}>
            <TouchableOpacity
              style={item.status ? styles.buttonActive : styles.buttonDisactive}
              onPress={() => onModal(item)}
              activeOpacity={item.status ? 1 : 0.7}
              disabled={!item.status}>
              <Text style={{color: '#fff', fontSize: 16}}> Wykorzystaj </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {},
  buttonActive: {
    padding: 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#c43b3d',
  },
  buttonDisactive: {
    padding: 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#6e6e6e',
  },
  titleText: {
    fontSize: 18,
    color: '#00000',
    fontWeight: 'bold',
    margin: 5,
    paddingTop: 5,
  },
  paragraphText: {
    fontSize: 14,
    color: '#00000',
    margin: 5,
  },
  rowContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
});

export default DiscountCard;
