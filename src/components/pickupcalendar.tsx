import React, {useState} from 'react';
import {Modal, Text, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {color} from '../utils/constant';

interface IPickupCalendar {
  isVisible: boolean;
  toggleVisible(): void;
  setDate(e: any): void;
}

const PickupCalendar = (props: IPickupCalendar) => {
  const [toDate, setToDate] = useState<string | undefined>(undefined);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.isVisible}
      onRequestClose={props.toggleVisible}>
      <View style={{flex: 1, backgroundColor: color.secondary}}>
        <Calendar
          date={toDate}
          markedDates={{
            [toDate!!]: {selected: true, selectedColor: 'blue'},
          }}
          onDayPress={day => {
            props.toggleVisible();
            props.setDate(day.dateString);
            setToDate(day.dateString);
          }}
        />
      </View>
    </Modal>
  );
};

export default PickupCalendar;
