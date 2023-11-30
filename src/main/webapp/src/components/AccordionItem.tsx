import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  LayoutAnimation,
} from 'react-native';
import React, {useRef} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const AccordionItem = ({title, bodyText}) => {
  const [showContent, setShowContent] = React.useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setShowContent(!showContent)}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{title}</Text>
          {showContent ? (
            <MaterialIcons
              name={'keyboard-arrow-up'}
              size={30}
              color={'#fff'}
            />
          ) : (
            <MaterialIcons
              name={'keyboard-arrow-down'}
              size={30}
              color={'#fff'}
            />
          )}
        </View>
      </TouchableOpacity>
      {showContent && (
        <View style={styles.bodyContainer}>
          <Text style={styles.bodyText}>{bodyText}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 5,
  },
  titleContainer: {
    backgroundColor: '#c43b3d',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  titleText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  bodyContainer: {
    backgroundColor: '#ffffff',
    padding: 10,
  },
  bodyText: {
    fontSize: 14,
    color: '#4d4d4d',
  },
});

export default AccordionItem;
