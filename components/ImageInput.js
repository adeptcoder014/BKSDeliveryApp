import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default function ({ style, image, setImage }) {
  const pickImage = async () => {
    await ImagePicker.requestCameraPermissionsAsync();
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  if (image)
    return (
      <TouchableOpacity onPress={pickImage}>
        <View style={[styles.container, style]}>
          <Image
            style={{ height: 100, width: 100, borderRadius: 50 }}
            source={{ uri: image }}
          />
        </View>
      </TouchableOpacity>
    );

  return (
    <TouchableOpacity onPress={pickImage}>
      <View style={[styles.container, style]}>
        <Feather name="camera" size={25} color="black" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: '#fef8f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
