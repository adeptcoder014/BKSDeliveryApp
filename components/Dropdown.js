import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ({ style, selected, placeholder, items }) {
  return (
    <View style={[styles.container, style]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text style={styles.placeholder}>{placeholder}</Text>
        <MaterialIcons name="arrow-drop-up" size={30} color="#A17C49" />
      </View>
      {items.map((text) => (
        <Text style={styles.item}>{text}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#A17C49',
    //height: 100,
    width: '100%',
    padding: 13,
  },
  placeholder: {
    color: '#A17C49',
    fontWeight: 'bold',
  },
  item: {
    color: '#707070',
    marginTop: 15,
    fontWeight: 'bold',
  },
});
