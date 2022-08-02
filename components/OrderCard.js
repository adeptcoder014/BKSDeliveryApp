import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function OrderCard() {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Pickup Details');
  };

  return (
    <View style={styles.order}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Image style={styles.image} source={require('../assets/coin.png')} />
        <View style={{ flexDirection: 'column', marginRight: 20 }}>
          <Text style={styles.itemTitle}>8.0 Garm Gold Coin</Text>
          <Text style={styles.itemSubtitle}>ORDER PLACED</Text>
        </View>
        <Pressable onPress={onPress}>
          <MaterialIcons name="arrow-forward-ios" size={30} color="#8B5704" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  order: {
    borderRadius: 10,
    backgroundColor: '#fef8f0',
    marginTop: 15,
    padding: 10,
  },
  image: {
    height: 80,
    width: 80,
  },
  itemTitle: {
    fontSize: 18,
    color: '#8B5704',
    fontWeight: 'bold',
  },
  itemSubtitle: {
    marginTop: 5,
    fontSize: 10,
    color: '#707070',
  },
});
