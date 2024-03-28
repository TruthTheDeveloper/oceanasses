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
      style={styles.headerContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate(routes.LOCKER)}
        style={styles.headerContent}>
        <CloseSvg fill={'black'} height={30} width={30} />
      </TouchableOpacity>
      <AppImage uri="https://images.unsplash.com/photo-1617021483925-a331d536133d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </View>
  );
};

const Content = () => {
  return (
    <View
      style={styles.contentStyles}>
      <AppText fontSize={30} text="Introduction" />
      <AppText
      color='black'
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
      style={styles.benefitContainer}>
      <InfoSvg fill={'black'} />
      <View
        style={styles.benefitStyle}>
        <Text style={styles.benefitText}>
          <AppText text={`${title}: `}/>
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
