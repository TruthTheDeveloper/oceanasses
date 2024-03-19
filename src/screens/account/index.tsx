import React from 'react';
import {View} from 'react-native';
import {AppText} from '../../reusables';
import {styles} from './styles';

const Account = () => {
  return (
    <View style={styles.container}>
      <AppText text="Account" />
    </View>
  );
};

export default Account;
