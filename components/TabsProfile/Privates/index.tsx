import React from 'react';
import { View, Text } from 'react-native';

import styles from '../styles';

const Privates: React.FC = () => (
  <View style={styles.content}>
    <Text style={styles.textBold}>Your private videos</Text>
    <Text style={styles.text}>
      To make your video visible only to yourself, self it do "Private" in the
      video's privacy settings
    </Text>
  </View>
);

export default Privates;
