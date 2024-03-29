import {ReactNode} from 'react';
import {ViewStyle} from 'react-native/types';

export type AppButtonTypes = {
  isCentered?: boolean;
  children?: ReactNode;
  onPress?: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  text?: string;
  type?: buttonTypes;
};

export type buttonTypes = 'outlined' | 'normal';
