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
  SafeAreaView,
} from 'react-native';
import axios from 'axios';
import BloodLevelItem from '../components/BloodLevelItem';
import NewsCard from '../components/NewsCard';
import AccordionItem from '../components/AccordionItem';
import {AccordionList} from 'react-native-accordion-list-view';
import AsyncStorage from '@react-native-async-storage/async-storage';

const data = [
  {title: 'A Rh+', bloodLevel: 15},
  {title: 'b Rh+', bloodLevel: 6},
  {title: 'a Rh-', bloodLevel: 18},
  {title: 'b Rh-', bloodLevel: 50},
  {title: 'ab Rh+', bloodLevel: 120},
  {title: 'ab Rh-', bloodLevel: 30},
  {title: '0 Rh+', bloodLevel: 59},
  {title: '0 Rh-', bloodLevel: 9},
];

// const news = [
//   {
//     title: 'Nowy rok z krwiodawstwem',
//     bodyText: 'lelum polelum ipsum',
//     date: '28.11.22',
//     imageURL: '',
//   },
//   {
//     title: 'Zmiany rejestracji dawców',
//     bodyText: 'lelum polelum ipsum',
//     date: '31.11.22',
//     imageURL: '',
//   },
//   {
//     title: 'Oddaj krew w akcji mikołajkowej',
//     bodyText:
//       'lelum polelum ipsum wjiwejaioweowfejiowejio jioawejiofioawjejioweaf',
//     date: '12.12.12',
//     imageURL: '',
//   },
// ];

const faq = [
  {
    title: 'Jak oddawać krew?',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
  {
    title: 'Kiedy mogę oddawać krew?',
    description:
      '1. ajwefiawehjf sdfawjefa sdajfiweoaj\n2.siefjawoeifjaoiw jfioawjeoif\n3.ajfiwejfapwfjawiefjasodf',
  },
  {
    title: 'Gdzie oddawać krew?',
    description: 'ajwefiawehjf sdfawjefa sdajfiweoaj',
  },
  {
    title: 'Ryzyko oddawania krwi',
    description: 'ajwefiawehjf sdfawjefa sdajfiweoaj',
  },
  {title: 'title5', description: 'ajwefiawehjf sdfawjefa sdajfiweoaj'},
];

const HomePanel = ({navigation}: {navigation: any}) => {
  const [news, setNews] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      axios
        .get(`http://10.0.2.2:8082/api/news/all`)
        .then(response => setNews(response.data))
        .catch(error => console.log(error));
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <ScrollView style={styles.container} nestedScrollEnabled={true}>
      <View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.header}>Stany krwi w centrum </Text>
        </View>
        <View
          style={{
            borderColor: '#c43b3d',
            borderWidth: 1,
            marginBottom: 5,
          }}
        />
        <FlatList
          key={4}
          data={data}
          numColumns={4}
          renderItem={BloodLevelItem}
        />
      </View>
      <View>
        <View style={{alignItems: 'center', marginTop: 15}}>
          <Text style={styles.header}>Aktualności</Text>
        </View>
        <View
          style={{
            borderColor: '#c43b3d',
            borderWidth: 1,
          }}
        />
        <View style={{marginBottom: 10, height: 400}}>
          <ScrollView nestedScrollEnabled={true}>
            {news.map((item, key) => {
              return (
                <View key={key}>
                  <NewsCard
                    item={item}
                    onPressFunctionality={() =>
                      navigation.navigate('NewsPanel', {item: item})
                    }
                  />
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
      <View style={{paddingBottom: 10}}>
        <View style={{alignItems: 'center', marginTop: 15}}>
          <Text style={styles.header}>Kompendium krwiodawcy</Text>
        </View>
        <View
          style={{
            borderColor: '#c43b3d',
            borderWidth: 1,
          }}
        />
        <View style={styles.accordionContainer}>
          <Text style={{margin: 5}}>
            {' '}
            Niezbędne informacje dla krwiodawców początkujących i tych
            wprawionych w oddawaniu krwi.{' '}
          </Text>
          {faq.map((item, key) => {
            return (
              <View key={key}>
                <AccordionItem title={item.title} bodyText={item.description} />
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#c43b3d',
    marginTop: 5,
  },
  description: {
    fontSize: 12,
    color: 'gray',
    padding: 5,
  },
  startText: {
    color: '#fff',
  },
  styleAcord: {
    backgroundColor: '#ff0000',
    fontStyle: '#fff',
  },
  accordionContainer: {},
});

export default HomePanel;
