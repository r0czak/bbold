import React from 'react';
import {View, TextInput, StyleSheet, Text, Pressable} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

const CustomDatePicker = ({setPicker, onFocus = () => {}, error}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [date, setDate] = React.useState(new Date());
  const [datePlaceholder, setDatePlaceholder] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const onChangeDate = (e, selectedDate) => {
    setOpen(false);
    if (selectedDate) {
      setDate(selectedDate);
      setDatePlaceholder('data');
      setPicker(moment(selectedDate).format('YYYY-MM-DD').toString());
      onFocus();
      setIsFocused(false);
    }
  };

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
          setOpen(true);
        }}>
        <MaterialCommunityIcon
          name={'calendar-month'}
          size={20}
          color="#4e4e4e"
          style={{marginRight: 7}}
        />
        <Text
          style={[
            styles.textInput,
            {
              color: datePlaceholder == '' ? '#8a8a8a' : '#000',
            },
          ]}>
          {datePlaceholder == ''
            ? 'Data urodzenia'
            : moment(date).format('DD-MM-YYYY')}
        </Text>
        {open && (
          <DateTimePicker
            timeZoneOffsetInMinutes={0}
            value={new Date()}
            mode="date"
            onChange={onChangeDate}
          />
        )}
      </Pressable>
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

export default CustomDatePicker;
