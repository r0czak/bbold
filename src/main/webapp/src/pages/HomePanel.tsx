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
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import axios from 'axios';
import BloodLevelItem from '../components/BloodLevelItem';
import NewsCard from '../components/NewsCard';
import AccordionItem from '../components/AccordionItem';
import {AccordionList} from 'react-native-accordion-list-view';
import Spinner from 'react-native-loading-spinner-overlay';
import SplashScreen from '../components/SplashScreen';

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

const HomePanel = ({navigation}: {navigation: any}) => {
  const [news, setNews] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [responseError, setResponseError] = React.useState(false);

  React.useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    setIsLoading(true);

    try {
      const response = await axios(`http://10.0.2.2:8082/api/news/all`, {
        timeout: 5000,
        method: 'GET',
      });

      setNews(response.data);
      console.log('response: ' + response);
      setIsLoading(false);
      setResponseError(false);
    } catch (error) {
      console.log('fetch error - ' + error);
      setIsLoading(false);
      setResponseError(true);
    }
  };

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
        {isLoading ? (
          <View style={{margin: 20}}>
            <ActivityIndicator size="large" color="#c43b3d" />
          </View>
        ) : responseError ? (
          <View>
            <Text style={{margin: 10, color: '#c43b3d'}}>
              Brak połączenia internetowego do pobrania danych
            </Text>
          </View>
        ) : (
          <View style={{marginBottom: 10, height: '100%'}}>
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
        )}
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
});

export default HomePanel;
