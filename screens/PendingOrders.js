import React from 'react';
import { View, FlatList } from 'react-native';
import OrderCard from '../components/OrderCard';
import Container from '../components/Container';

export default function () {
  return (
    <Container>
      <View>
        <FlatList data={[1, 2, 3, 4, 5]} renderItem={() => <OrderCard />} />
      </View>
    </Container>
  );
}
