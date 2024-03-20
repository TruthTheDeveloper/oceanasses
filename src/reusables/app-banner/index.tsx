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
        uri="https://cdn.pixabay.com/photo/2022/05/23/08/12/woman-7215527_1280.png"
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
