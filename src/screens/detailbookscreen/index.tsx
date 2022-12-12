import React, {useCallback, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {img} from '../../assets';
import Button from '../../components/button';
import PickupCalendar from '../../components/pickupcalendar';
import Spacer from '../../components/spacer';
import {styles} from './styles';
import {PropsDetail} from './types';

const DetailBookScreen = (props: PropsDetail) => {
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [pickupDate, setPickupDate] = useState<string | null>(null);

  const setToggleVisible = useCallback(() => {
    setIsCalendarVisible(!isCalendarVisible);
  }, [isCalendarVisible]);

  const onSetDate = (e: string) => {
    setPickupDate(e);
  };
  return (
    <View style={styles.container}>
      <Spacer height={20} />
      <Text style={styles.titleDetail}>Detail Book</Text>
      <Spacer height={20} />
      <View style={styles.detailBookContainer}>
        <Image style={styles.imageBook} source={img.placeholder_book} />
        <Spacer width={20} />
        <View>
          <Spacer height={20} />
          <Text style={styles.titleBook} numberOfLines={3} ellipsizeMode="tail">
            {props.route.params?.title}
          </Text>
          <Text>{props.route.params?.edition_count}</Text>
          <Text>{props.route.params?.author}</Text>
        </View>
      </View>
      <Spacer height={20} />
      <View style={styles.bottomSheet}>
        <Text style={styles.titlePickup}>Schedule Pickup</Text>
        <Spacer height={20} />
        {pickupDate ? (
          <View style={styles.pickupContainer}>
            <Text>{new Date(pickupDate).toDateString()}</Text>
            <TouchableOpacity onPress={setToggleVisible}>
              <Text style={styles.textChange}>Change</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Button
            testID="button_pickup"
            label="Pick date"
            onPress={setToggleVisible}
          />
        )}

        <PickupCalendar
          setDate={onSetDate}
          isVisible={isCalendarVisible}
          toggleVisible={setToggleVisible}
        />
      </View>
    </View>
  );
};

export default DetailBookScreen;
