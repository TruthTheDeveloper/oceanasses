import {NavigationContainer} from '@react-navigation/native';
import {InfoSvg} from '../../assets/svg';
import AppHeader from '../../reusables/app-header';
import AppTabButton from '../../reusables/app-tab-button';
import {Account, Home, Locker, Rent} from '../../screens';
import Advert from '../../screens/advert';
import {Tab} from '../router-constants';
import {routes} from '../router-constants/routes';

function NavigationProvider() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={routes.LOCKER}
          screenOptions={{
            headerShown: false,
            header: () => (
              <AppHeader
                backgroundColor="darkgreen"
                titleColor="white"
                leftContent={undefined}
                rightContent={<InfoSvg fill={'white'} height={20} width={20} />}
              />
            ),
          }}>
          <Tab.Screen
            name={routes.HOME}
            component={Home}
            options={{
              headerShown: false,
              tabBarIcon: ({color, focused}) => (
                <AppTabButton
                  icon={<InfoSvg height={20} width={20} fill={color} />}
                  color={color}
                  isFocused={focused}
                />
              ),
            }}
          />
          <Tab.Screen
            name={routes.LOCKER}
            component={Locker}
            options={{
              headerShown: true,
              tabBarIcon: ({color, focused}) => (
                <AppTabButton
                  icon={<InfoSvg height={20} width={20} fill={color} />}
                  color={color}
                  isFocused={focused}
                />
              ),
            }}
          />
          <Tab.Screen
            name={routes.RENT}
            component={Rent}
            options={{
              tabBarIcon: ({color, focused}) => (
                <AppTabButton
                  icon={<InfoSvg height={20} width={20} fill={color} />}
                  color={color}
                  isFocused={focused}
                />
              ),
            }}
          />
          <Tab.Screen
            name={routes.ACCOUNT}
            component={Account}
            options={{
              tabBarIcon: ({color, focused}) => (
                <AppTabButton
                  icon={<InfoSvg height={20} width={20} fill={color} />}
                  color={color}
                  isFocused={focused}
                />
              ),
            }}
          />
          <Tab.Screen
            name={routes.ADVERT}
            component={Advert}
            options={{
              tabBarIcon: ({color, focused}) => (
                <AppTabButton
                  icon={<InfoSvg height={20} width={20} fill={color} />}
                  color={color}
                  isFocused={focused}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

export default NavigationProvider;
