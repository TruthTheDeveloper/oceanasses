import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {CloseSvg, InfoSvg} from '../../assets/svg';
import {wp} from '../../configs/config';
import {AppImage, AppText} from '../../reusables';
import {routes} from '../../routers/router-constants/routes';
import {styles} from './styles';

const Home = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        <Content />
      </View>
    </ScrollView>
  );
};

export default Home;

const Header = () => {
  const navigation = useNavigation<any>();

  return (
    <View
      style={{
        height: 300,
        width: '100%',
        backgroundColor: 'blue',
        borderRadius: 10,
      }}>
      <TouchableOpacity
        onPress={() => navigation.navigate(routes.LOCKER)}
        style={{
          position: 'absolute',
          top: 10,
          left: 10,
          zIndex: 1,
          backgroundColor: 'white',
          borderRadius: 50,
          padding: 10,
        }}>
        <CloseSvg fill={'black'} height={30} width={30} />
      </TouchableOpacity>
      <AppImage uri="https://cdn.pixabay.com/photo/2022/05/23/08/12/woman-7215527_1280.png" />
    </View>
  );
};

const Content = () => {
  return (
    <View
      style={{
        flex: 1,
        gap: 20,
        padding: wp(16),
      }}>
      <AppText fontSize={30} text="Introduction" />
      <AppText
        fontSize={16}
        numberOfLines={10}
        text="lore afda salh asfh alsdhflask asfhalsdkfha lasfhalsdkfhalskdfhas fahslfkashdlfksdd,lore afda salh asfh alsdhflask asfhalsdkfha lasfhalsdkfhalskdfhas fahslfkashdlfksddlore afda salh asfh alsdhflask asfhalsdkfha lasfhalsdkfhalskdfhas fahslfkashdlfksdd,lore afda salh asfh alsdhflask asfhalsdkfha lasfhalsdkfhalskdfhas fahslfkashdlfksdd"
      />
      <View style={{gap: 10, paddingHorizontal: 5}}>
        <AppText fontSize={30} text="Key benefits" />
        {benefits.map((benefit, index) => (
          <Benefit
            title={benefit.title}
            message={benefit.description}
            key={index}
          />
        ))}
      </View>
    </View>
  );
};

interface Props {
  title: string;
  message: string;
}

const Benefit: React.FC<Props> = ({title, message}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        gap: wp(10),
        alignItems: 'center',
      }}>
      <InfoSvg fill={'black'} />
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
        }}>
        <Text style={{marginRight: 10, fontSize: 20, fontWeight: '700'}}>
          {`${title}: `}
          <AppText text={message} fontSize={16} styles={{fontWeight: '300'}} />
        </Text>
      </View>
    </View>
  );
};

const benefits = [
  {
    title: 'Secure and convienient',
    description: 'Our lockers prioritize the safety of your parcels',
  },
  {
    title: 'Secure and convienient',
    description: 'Our lockers prioritize the safety of your parcels',
  },
  {
    title: 'Secure and convienient',
    description: 'Our lockers prioritize the safety of your parcels',
  },
  {
    title: 'Secure and convienient',
    description: 'Our lockers prioritize the safety of your parcels',
  },
];
