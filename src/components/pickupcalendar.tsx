import React from 'react';
import {Modal, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {color} from '../utils/constant';

interface IPickupCalendar {
  isVisible: boolean;
  toggleVisible(): void;
  setDate(e: any): void;
}

const PickupCalendar = (props: IPickupCalendar) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.isVisible}
      onRequestClose={props.toggleVisible}>
      <View style={{flex: 1, backgroundColor: color.secondary}}>
        <Calendar
          onDayPress={day => {
            props.toggleVisible();
            props.setDate(day.dateString);
          }}
        />
      </View>
    </Modal>
  );
};

export default PickupCalendar;
