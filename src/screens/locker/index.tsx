import React, {useCallback, useState} from 'react';
import {ScrollView, Touchable, TouchableOpacity, View} from 'react-native';
import {CloseSvg} from '../../assets/svg';
import {fs, wp} from '../../configs/config';
import {
  Schema,
  deliveries,
  packageSummary,
  packageSummaryOverview,
  quaterly,
  year,
} from '../../data';
import {useSheet} from '../../hooks/useSheet';
import {AppButton, AppSheet, AppText} from '../../reusables';
import Banner from '../../reusables/app-banner';
import AppHeader from '../../reusables/app-header';
import PopUp from '../../reusables/app-pop-up';
import GroupedBarChartComponent from '../../reusables/bill-chart';
import Card from '../../reusables/card';
import Pill from '../../reusables/pill';
import {styles} from './styles';

const Locker = () => {
  const [showPopUp, setShowPop] = useState(!false);
  const {openSheet, sheetRef, closeSheet} = useSheet();

  const renderSheet = useCallback(() => {
    return (
      <AppSheet
        adjustToContentHeight
        closeOnOverlayTap
        enableSlideToClose
        sheetRef={sheetRef}>
        <View style={styles.filterContainer}>
          <AppHeader
            backgroundColor="white"
            titleColor="black"
            leftContent={
              <TouchableOpacity onPress={closeSheet}>
                <CloseSvg
                  height={20}
                  width={20}
                  fill={'black'}
                  style={{flex: 1}}
                />
              </TouchableOpacity>
            }
            middleContent={
              <AppText
                fontSize={fs(20)}
                text="Filter by"
                styles={{alignSelf: 'center', color: 'black'}}
              />
            }
            rightContent={<View style={{flex: 1}} />}
          />
          <DurationWrapper title="Year" data={year} />
          <DurationWrapper title="Quaterly" data={quaterly} />
          <DurationWrapper title="Package summary" data={packageSummary} />
          <AppButton text="Save" style={{marginTop: wp(20)}} />
        </View>
      </AppSheet>
    );
  }, [openSheet, sheetRef]);

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Banner />
          <View style={{gap: 10, marginVertical: wp(20)}}>
            <AppText text="Package summary" fontSize={fs(20)} />
            <AppText text="Q1-Q2" />
            <DurationWrapper data={packageSummaryOverview} />
          </View>
          <View style={styles.popUpContainer}>
            <GroupedBarChartComponent />
          </View>

          <View style={{gap: 10, marginTop: 50}}>
            {deliveries.map(({iconColor, quantity, title}, index) => (
              <Card
                iconColor={iconColor}
                quantity={Number(quantity)}
                title={title}
                key={index}
                onPress={() => openSheet()}
              />
            ))}
          </View>
        </View>
        {renderSheet()}
      </ScrollView>
      <PopUp
        description="learn how locker service work"
        headerText="Your gateway to convience"
        title="explore the world of locker service with hub locker"
        onClose={() => setShowPop(false)}
        show={showPopUp}
      />
    </>
  );
};

export default Locker;

const DurationWrapper = ({
  data = [],
  title,
  getSelectedValue = value => value,
}: {
  data: Schema[];
  title?: string;
  getSelectedValue?: (data: string) => void;
}) => {
  return (
    <View>
      {title && <AppText text={title} />}
      <View style={styles.filterItem}>
        {data.map(({dotColor, id, label, value, showDot}, index) => (
          <Pill
            key={`${index}${id}`}
            onPress={() => getSelectedValue(`${value}`)}
            dotColor={dotColor}
            text={`${label}`}
            showDot={showDot}
          />
        ))}
      </View>
    </View>
  );
};
