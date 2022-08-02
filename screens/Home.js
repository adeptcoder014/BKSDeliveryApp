import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Box from '../components/Box';
import Container from '../components/Container';
import OrderCard from '../components/ActiveOrderCard';

export default function Home() {
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.text}>
            Hi <Text style={{ fontWeight: 'bold' }}>Suurya</Text> 👋
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}
        >
          <Box />
          <Box />
          <Box />
          <Box />
        </View>
        <View style={styles.bottomContent}>
          <Text style={styles.subTitle}>New Active Deliveries</Text>
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
        </View>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
  },
  subTitle: {
    color: '#8B5704',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bottomContent: {
    marginTop: 15,
  },
});
