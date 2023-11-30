import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Dropdown} from 'react-native-element-dropdown';
import axios from 'axios';

const researchData = [
  {title: 'leukocyty', value: '6,6 tys/ul'},
  {title: 'erytrocyty', value: '4,79 mln/ul'},
  {title: 'hemoglobina', value: '14,7 g/dl '},
  {title: 'hematokryt', value: '43,7 % '},
  {title: 'MCV', value: '91,3 fl'},
  {title: 'MCH', value: '30,7 pg'},
  {title: 'MCHC', value: '33,7 g/dl'},
  {title: 'RDW', value: '13,2 % '},
  {title: 'blood plates', value: '302 tys/ul'},
  {title: 'PCT', value: '0,24 % '},
  {title: 'PDW', value: '16,1 fl'},
  {title: 'MPV', value: '8,0 fl'},
];

const ResearchPanel = () => {
  const [userResearchData, setUserResearchData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  //const [responseError, setResponseError] = React.useState(false);

  React.useEffect(() => {
    getUserResearchInfo();
  }, []);

  const getUserResearchInfo = async () => {
    setIsLoading(true);

    try {
      const response = await axios(`http://10.0.2.2:8082/api/discounts/all`, {
        timeout: 5000,
        method: 'GET',
      });

      setUserResearchData(response.data);
      //console.log('response: ' + response.data);
      setIsLoading(false);
    } catch (error) {
      console.log('fetch error - ' + error);
      setIsLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* <View style={{alignItems: 'center', marginTop: 15}}>
        <Text style={styles.headerText}>Health check</Text>
      </View> */}
      <View style={styles.statusCard}>
        <Text style={styles.headerStatusText}>
          Status ostatniego wyniku badań krwi:
        </Text>
      </View>
      <View style={{alignItems: 'center', marginTop: 15}}>
        <Text style={styles.headerText}>Badania krwi z ostatniej donacji</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.containerHealth}>
          <View style={styles.itemHealth1}>
            <Text style={styles.cardHeaderText}> Badanie </Text>
          </View>
          <View style={styles.itemHealth2}>
            <Text style={styles.cardHeaderText}> Wynik badania </Text>
          </View>
          <View style={styles.itemHealth3}>
            <Text style={styles.cardHeaderText}> Wartość ref. </Text>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: '#fff',
            borderBottomWidth: 1,
            margin: 5,
          }}
        />
        <View style={styles.cardSubtitle}>
          <Text> Morfologia krwi obdwodowej </Text>
        </View>
        <View style={styles.containerHealth}>
          <View style={styles.itemHealth1}>
            <Text> Leukocyty </Text>
            <Text> Erytrocyty </Text>
            <Text> Hemoglobina </Text>
            <Text> Hematokryt </Text>
            <Text> MCV </Text>
            <Text> MCH </Text>
            <Text> MCHC </Text>
            <Text> RDW </Text>
            <Text> Płytki krwi </Text>
            <Text> PCT </Text>
            <Text> PDW </Text>
            <Text> MPV </Text>
          </View>
          <View style={styles.itemHealth2}>
            <Text> {researchData[0].value} </Text>
            <Text> {researchData[1].value} </Text>
            <Text> {researchData[2].value} </Text>
            <Text> {researchData[3].value} </Text>
            <Text> {researchData[4].value} </Text>
            <Text> {researchData[5].value} </Text>
            <Text> {researchData[6].value} </Text>
            <Text> {researchData[7].value} </Text>
            <Text> {researchData[8].value} </Text>
            <Text> {researchData[9].value} </Text>
            <Text> {researchData[10].value} </Text>
            <Text> {researchData[11].value} </Text>
          </View>
          <View style={styles.itemHealth3}>
            <Text> 4,5 - 10,0</Text>
            <Text> 4,7 - 6,1</Text>
            <Text> 14,0 - 17,0 </Text>
            <Text> 42,0 - 52,0 </Text>
            <Text> 81,0 - 94,0 </Text>
            <Text> 28,0 - 34,0</Text>
            <Text> 33,0 - 38,0 </Text>
            <Text> 11,5 - 14,5 </Text>
            <Text> 150 - 400 </Text>
            <Text> 0,08 - 1,00 </Text>
            <Text> 14,0 - 18,0</Text>
            <Text> 8,0 - 11,0 </Text>
          </View>
        </View>
      </View>

      <View style={{alignItems: 'center', marginTop: 15}}>
        <Text style={styles.headerText}>
          Galeria udokumentowanych kart badań
        </Text>
      </View>
      <View style={styles.card}>
        <TouchableOpacity style={styles.roundButton} onPress={undefined}>
          <MaterialIcons name={'insert-photo'} color={'#c43b3d'} size={24} />
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
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#c43b3d',
    marginTop: 5,
  },
  headerStatusText: {
    fontWeight: 'bold',
    fontSize: 17,
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
  statusCard: {
    height: 50,
    backgroundColor: '#e6e6e6',
    alignContent: 'center',
    margin: 10,
    padding: 10,
    borderRadius: 15,
  },
  cardHeaderText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  cardText: {
    color: '#fff',
    fontSize: 14,
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
  containerHealth: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start', // if you want to fill rows left to right
  },
  itemHealth1: {
    width: '35%', // is 50% of container width
  },
  itemHealth2: {
    width: '35%', // is 50% of container width
  },
  itemHealth3: {
    width: '30%', // is 50% of container width
  },
  cardSubtitle: {
    marginVertical: 5,
  },
});

export default ResearchPanel;
