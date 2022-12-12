import React, {useState} from 'react';
import {Image, Pressable, Text, TouchableOpacity, View} from 'react-native';
import {img} from '../../assets';
import Button from '../../components/button';
import PickupCalendar from '../../components/pickupcalendar';

import Spacer from '../../components/spacer';
import {styles} from './styles';

const DetailBookScreen = (props: any) => {
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [pickupDate, setPickupDate] = useState<string | null>(null);
  const setToggleVisible = () => {
    setIsCalendarVisible(!isCalendarVisible);
  };
  const onSetDate = (e: string) => {
    setPickupDate(e);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titleDetail}>Detail Book</Text>
      <Spacer height={20} />
      <View style={styles.detailBookContainer}>
        <Image style={styles.imageBook} source={img.placeholder_book} />
        <Spacer width={20} />
        <View>
          <Spacer height={20} />
          <Text style={styles.titleBook} numberOfLines={1} ellipsizeMode="tail">
            {`item.title`}
          </Text>
          <Text>{`item.edition_count`}</Text>
          <Text>{`item.authors[0].name`}</Text>
        </View>
      </View>
      <Spacer height={20} />
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
  );
};

export default DetailBookScreen;
