import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Pressable,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomDropDown = ({
  placeholder,
  iconName,
  listData,
  error,
  onFocus = () => {},
  setPicker,
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(placeholder);
  const [isClicked, setIsClicked] = React.useState(false);

  return (
    <>
      <Pressable
        style={[
          styles.container,
          {
            borderColor: error ? '#ffee00' : isFocused ? '#ff3300' : '#ffffff',
            alignItems: 'center',
          },
        ]}
        onPress={() => {
          setIsClicked(!isClicked);
        }}>
        <MaterialCommunityIcon
          name={iconName}
          size={20}
          color="#4e4e4e"
          style={{marginRight: 7}}
        />
        <Text
          style={[
            styles.textInput,
            {
              color: selectedItem == placeholder ? '#8a8a8a' : '#000',
            },
          ]}>
          {selectedItem == '' ? {placeholder} : selectedItem}
        </Text>
        {isClicked ? (
          <Icon name={'keyboard-arrow-up'} size={20} />
        ) : (
          <Icon name={'keyboard-arrow-down'} size={20} />
        )}
      </Pressable>
      {isClicked ? (
        <View style={styles.dropDownList}>
          <FlatList
            data={listData}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={styles.listItem}
                  onPress={() => {
                    setSelectedItem(item.desc);
                    setPicker(item.value);
                    setIsClicked(false);
                    onFocus();
                    setIsFocused(false);
                  }}>
                  <Text style={{fontSize: 14}}>{item.desc}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      ) : null}
      {error && <Text style={styles.errorMessage}>{error}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: 45,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 7,
    marginVertical: 3,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textInput: {
    fontSize: 15,
    flex: 1,
  },
  errorMessage: {
    color: '#ffee00',
    fontSize: 14,
    fontWeight: 'bold',
  },
  dropDownList: {
    width: '100%',
    borderRadius: 7,
    backgroundColor: '#fff',
    alignSelf: 'center',
  },
  listItem: {
    paddingLeft: 20,
    width: '100%',
    height: 40,
    borderBottomWidth: 0.4,
    borderBottomColor: '#8e8e8e',
    justifyContent: 'center',
  },
});

export default CustomDropDown;
