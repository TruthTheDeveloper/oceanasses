import React from 'react';
import {View} from 'react-native';
import {AppText} from '../../reusables';
import {styles} from './styles';

const Advert = () => {
  return (
    <View style={styles.container}>
      <AppText text="Advert" />
    </View>
  );
};

export default Advert;
