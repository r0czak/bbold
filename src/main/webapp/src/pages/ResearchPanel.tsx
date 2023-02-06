import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Dropdown} from 'react-native-element-dropdown';

const ResearchPanel = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={{alignItems: 'center', marginTop: 15}}>
        <Text style={styles.header}>Health check</Text>
      </View>
      <View style={styles.card}>
        <Dropdown
          data={[]}
          labelField={''}
          valueField={''}
          onChange={function (item: any): void {
            throw new Error('Function not implemented.');
          }}
        />
      </View>
      <View style={{alignItems: 'center', marginTop: 15}}>
        <Text style={styles.header}>Karta badań krwi ostatniej donacji</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.inlineText}> Parameter 1: </Text>
        <Text style={styles.inlineText}> Parameter 2: </Text>
        <Text style={styles.inlineText}> Parameter 3: </Text>
        <Text style={styles.inlineText}> Parameter 4: </Text>
        <Text style={styles.inlineText}> Parameter 5: </Text>
        <Text style={styles.inlineText}> Parameter 6: </Text>
        <View
          style={{
            borderBottomColor: '#fff',
            borderBottomWidth: 2,
            margin: 5,
          }}
        />
        <Text style={styles.inlineText}> Parameter 4: </Text>
        <Text style={styles.inlineText}> Parameter 5: </Text>
        <Text style={styles.inlineText}> Parameter 6: </Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 15}}>
        <Text style={styles.header}>Galeria dokumentowanych wyników</Text>
      </View>
      <View style={styles.card2}>
        <TouchableOpacity style={styles.roundButton} onPress={undefined}>
          <MaterialIcons name={'insert-photo'} color={'red'} size={24} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#c43b3d',
    marginTop: 5,
  },
  card: {
    height: 300,
    backgroundColor: '#c43b3d',
    margin: 10,
    padding: 10,
    borderRadius: 15,
  },
  card2: {
    height: '100%',
    backgroundColor: '#c43b3d',
    margin: 10,
    padding: 10,
    borderRadius: 15,
  },
  inlineText: {
    color: '#fff',
    fontSize: 18,
  },
  roundButton: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#ffffff',
  },
});

export default ResearchPanel;
