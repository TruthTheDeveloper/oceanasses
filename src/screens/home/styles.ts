import {StyleSheet} from 'react-native';
import { wp } from '../../configs/config';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  benefitStyle:{
    flexDirection: 'row',
    gap: 10,
  },

  benefitText:{marginRight: 10, fontSize: 20, fontWeight: '700'},
  headerContainer:{
    height: 300,
    width: '100%',
    backgroundColor: 'blue',
    borderRadius: 10,
  },

  headerContent:{
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 10,
  },

  contentStyles:{
    flex: 1,
    gap: 20,
    padding: wp(16),
  },

  benefitContainer:{
    flexDirection: 'row',
    gap: wp(10),
    alignItems: 'center',
  }
  
});
