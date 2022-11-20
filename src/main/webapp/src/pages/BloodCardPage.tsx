import {StyleSheet, Text, View, FlatList, Dimensions} from 'react-native';
import React from 'react';

const data = [
  {key: 'Krew pełna'},
  {key: 'Osocze'},
  {key: 'Płytki krwi'},
  {key: 'Krwinki czerwone'},
  {key: 'Krwinki białe'},
  {key: '...'},
];

const numColumns = 2;
const BloodCardPanel = () => {
  const renderItem = ({item, index}) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.key}</Text>
      </View>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <Text> Ostatnia donacja </Text>
      </View>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <FlatList
        data={data}
        style={styles.cards}
        renderItem={renderItem}
        numColumns={numColumns}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    marginTop: 20,
    backgroundColor: '#949494',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 15,
  },
  cards: {
    flex: 1,
    //marginTop: 10,
  },
  item: {
    backgroundColor: '#ff6b6d',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 10,
    borderRadius: 15,
    height: Dimensions.get('window').width / numColumns, // approximate a square
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#fff',
  },
});

export default BloodCardPanel;
