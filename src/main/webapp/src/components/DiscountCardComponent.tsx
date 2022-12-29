import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

const DiscountCardComponent = ({item}) => (
  <Card>
    <Card.Cover source={item.uri} />
    <Card.Content>
      <Title>{item.title}</Title>
      <Paragraph>{item.description}</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button style={styles.button}>Wykorzystaj</Button>
    </Card.Actions>
  </Card>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ff0000',
    fontSize: 20,
  },
});

export default DiscountCardComponent;
