import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
const CustomInputField = ({
  value,
  setValue,
  placeholder,
  secureTextEntry,
  icon,
}) => {
  return (
    <View style={styles.container}>
      <MaterialIcon
        name={icon}
        size={20}
        color="#666"
        style={{marginRight: 5, paddingTop: 15}}
      />
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.textInput}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 7,
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 0,
    flexDirection: 'row',
  },
  textInput: {
    fontSize: 15,
    flex: 1,
    // paddingVertical: 0,
  },
});

export default CustomInputField;
