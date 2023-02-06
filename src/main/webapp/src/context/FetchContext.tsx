import React, {createContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import axios from 'axios';

const FetchContext = createContext();

// type BloodPoints = {
//   id: number;
//   name: string;
// };

const FetchProvider = ({children}) => {
  const [bloodPoints, setBloodPoints] = React.useState([]);
  const [news, setNews] = React.useState([]);
  const [vadenecum, setVadenecum] = React.useState([]);
  const [discounts, setDiscounts] = React.useState([]);
  const [fetchLoading, setFetchLoading] = React.useState(true);

  const fetchAppData = async () => {
    try {
      const responseBloodPoints = await fetch(
        'http://10.0.2.2:8082/api/center',
      );
      const data1 = await responseBloodPoints.json();
      setBloodPoints(data1);

      const response = await fetch('http://10.0.2.2:8082/api/news/all');
      const data2 = await response.json();
      setNews(data2);
      console.log('news here: ' + JSON.stringify(news));
      AsyncStorage.setItem('newsItems', JSON.stringify(news));
      // let newBloodPoints = data2.map((item, index) => {
      //   return {id: item.id, title: item.title};
      // });
      // setBloodPoints(newBloodPoints);

      setFetchLoading(false);
      console.log(data1[0]);
      console.log(data2);
      // ->>  console.log(bloodPoints[1].name);
    } catch (e) {
      console.log(e);
      setFetchLoading(false);
    }
  };

  const fetchBloodLevels = async cityId => {
    return false;
  };

  return (
    <FetchContext.Provider
      value={{
        fetchAppData,
        fetchLoading,
        bloodPoints,
        news,
        vadenecum,
        discounts,
      }}>
      {children}
    </FetchContext.Provider>
  );
};

export {FetchContext, FetchProvider};
