import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomInputField = ({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  ...props
}) => {
  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <>
      <View
        style={[
          styles.container,
          {
            borderColor: error ? '#ffee00' : isFocused ? '#ff3300' : '#ffffff',
            alignItems: 'center',
          },
        ]}>
        <Icon
          name={iconName}
          size={20}
          color="#4e4e4e"
          style={{marginRight: 5}}
        />
        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(false);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          style={styles.textInput}
          {...props}
        />
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye-off' : 'eye'}
            style={{color: '#4e4e4e', fontSize: 20}}
          />
        )}
      </View>
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
});

export default CustomInputField;
