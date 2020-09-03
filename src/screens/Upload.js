import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Upload = (props) => {
  return (
    <View style={styles.container}>
      <Text>Upload Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Upload;
