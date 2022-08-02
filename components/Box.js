import React from 'react';
import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Box = ({ title, value }) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Pending Orders');
  };

  return (
    <View style={styles.box}>
      <View>
        <Feather name="package" size={30} color="black" />
        <Text style={styles.boxTitle}>Pending Delivery</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text style={styles.boxValue}>70</Text>
          <Pressable onPress={onPress}>
            <AntDesign
              style={{ marginTop: 10 }}
              name="arrowright"
              size={30}
              color="#8B5704"
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#fef8f0',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    width: Dimensions.get('screen').width / 2 - 50,
    marginRight: 30,
  },
  boxTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8B5704',
  },
  boxValue: {
    marginTop: 15,
    fontSize: 26,
    fontWeight: 'bold',
  },
});

export default Box;
