import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function OrderCard() {
  return (
    <View style={styles.order}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.cartTitle}>Order #123456</Text>
        <Text style={styles.cartTitle}>TRACK ORDER</Text>
      </View>
      <View>
        <Text style={styles.cardDesc}>
          V.D Reseidency , Visakhapatnam Andra Pradesh, 530046
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  order: {
    borderRadius: 10,
    backgroundColor: '#fef8f0',
    marginTop: 15,
    padding: 15,
  },
  cartTitle: {
    fontSize: 16,
    color: '#8B5704',
    fontWeight: 'bold',
  },
  cardDesc: {
    marginTop: 10,
    fontSize: 14,
  },
});
