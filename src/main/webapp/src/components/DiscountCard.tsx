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
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import QRCode from 'react-native-qrcode-svg';

import DiscountModalItem from './DiscountModalItem';

const DiscountCard = ({item}) => {
  const [visible, setVisible] = React.useState(false);

  return (
    <View>
      <DiscountModalItem visible={visible}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.modalIcon}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <MaterialCommunityIcon name={'window-close'} size={20} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.modalTitle}> {item.title} </Text>
            <Text style={styles.modalText}> {item.description} </Text>
            <View style={styles.qrContainer}>
              <QRCode
                value="Just some string value"
                size={180}
                // logo={{uri: base64Logo}}
                // logoSize={30}
                // logoBackgroundColor="transparent"
              />
            </View>
            <Text style={styles.modalText}>
              {' '}
              Aktywuj swoją zniżkę poprzez zeskanowanie kodu QR w punkcie -...
              szczegóły{' '}
            </Text>
          </View>
        </View>
      </DiscountModalItem>
      <Card style={{backgroundColor: '#fff', margin: 5}}>
        <Card.Cover source={item.uri} />
        <Card.Content>
          <Text style={styles.titleText}>{item.title}</Text>
          <Text style={styles.paragraphText}>{item.shortDescription}</Text>
        </Card.Content>
        <View style={{flexDirection: 'column', flex: 2, margin: 5}}>
          <View style={styles.rowContainer}>
            <View style={{flex: 1, paddingTop: 5}}>
              {item.status ? (
                <Text style={{color: '#3cbd00', fontSize: 15}}> Aktywne </Text>
              ) : (
                <Text style={{color: '#ff0202', fontSize: 15}}>
                  {' '}
                  Nieaktywne{' '}
                </Text>
              )}
            </View>
            <View style={{flex: 1}}>
              <TouchableOpacity
                style={
                  item.status ? styles.buttonActive : styles.buttonDisactive
                }
                onPress={() => setVisible(!visible)}
                activeOpacity={0.5}
                disabled={!item.status}>
                <Text style={{color: '#fff', fontSize: 16}}> Wykorzystaj </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Card>
    </View>
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
  modalIcon: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 10,
  },
  modalText: {
    fontSize: 16,
    marginVertical: 10,
  },
  qrContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 50,
  },
});

export default DiscountCard;
