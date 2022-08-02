import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Checkbox from 'expo-checkbox';

export default function OrderCardSelectable({ id, items, setItems }) {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Pickup Details');
  };

  const onValueChange = (value) => {
    if (value === true) return setItems((prev) => [...prev, id]);
    return setItems((prev) => prev.filter((e) => e !== id));
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
        <Checkbox
          style={{ borderRadius: 5, borderColor: '#8B5704' }}
          value={items.includes(id)}
          onValueChange={onValueChange}
          color="#8B5704"
        />
        <Image style={styles.image} source={require('../assets/coin.png')} />
        <View style={{ flexDirection: 'column', marginRight: 20 }}>
          <Text style={styles.itemTitle}>8.0 Garm Gold Coin</Text>
          <Text style={styles.itemSubtitle}>QTY: 02</Text>
        </View>
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
