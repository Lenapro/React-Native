import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import ButtonApp from './Button';
import Post from './Post';

export default function App() {
  return (
    <View style={styles.container}>
      <ButtonApp />
      <Post />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
