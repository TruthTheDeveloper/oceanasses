import React from 'react';
import {View} from 'react-native';
import AppImage from '../app-Image';
import AppText from '../app-text';
import {fs} from '../../configs/config';
import { styles } from '../app-button/styles';
import { bannerPills } from './styles';


const Banner = () => {
  return (
    <View
      style={bannerPills.bannerContainer}>
      <AppImage
        mode="contain"
        extraStyles={{
          height: '100%',
          width: '100%',
        }}
        uri="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <View
        style={bannerPills.bannerContent}>
        <AppText
          color="white"
          text="Comfort is good"
          styles={{fontSize: fs(16)}}
        />
      </View>
    </View>
  );
};

export default Banner;
