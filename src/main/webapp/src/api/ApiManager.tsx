import {View, Text} from 'react-native';
import React from 'react';
import axios from 'axios';

const ApiManager = axios.create({
  baseURL: 'http://localhost:8081/api/',
  responseType: 'json',
  withCredentials: true,
});

export default ApiManager;
