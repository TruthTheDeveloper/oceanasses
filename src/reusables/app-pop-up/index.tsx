import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import AppRow from '../app-row';
import {styles} from './styles';
import AppText from '../app-text';
import {CloseSvg} from '../../assets/svg';
import AppImage from '../app-Image';
import {fs} from '../../configs/config';

const PopUp = ({
  description,
  onClose,
  show,
  headerText,
  title,
}: {
  show: boolean;
  onClose: () => void;
  headerText?: string;
  title?: string;
  description: string;
}) => {
  return (
    show ? (
      <View style={styles.container}>
        <View style={styles.content}>
          <AppRow>
            <AppText text={headerText} styles={{fontSize: fs(20)}} />
            <TouchableOpacity onPress={onClose}>
              <CloseSvg height={20} width={20} fill={'black'} />
            </TouchableOpacity>
          </AppRow>
          <AppImage
            mode="contain"
            extraStyles={{
              height: 200,
              width: '100%',
              borderRadius: 10,
              overflow: 'hidden',
            }}
            uri="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <AppText text={title} styles={{fontSize: fs(16)}} />
          <AppText text={description} styles={{fontSize: fs(12)}} />
        </View>
      </View>
    ): <></>
  );
};

export default PopUp;
