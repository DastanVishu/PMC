import React, {useEffect, useState} from 'react';
import Base from "../components/pageBase";
// import theme from '../../theme';
import {ExpandableCalendar, AgendaList, CalendarProvider, WeekCalendar} from 'react-native-calendars';
import moment from "moment";
import { ToastAndroid, View, Text, StyleSheet } from 'react-native';
import { light } from '../components/ContantsColor';
import Card from './components/card';
import {appointmentsdata} from "../api/publicApi";

import SplashScreen from 'react-native-splash-screen';

const GAD = ({navigation}) => {
  const [aData, setAData] = useState({});
  const [selectedDate, setSelectedDate] = useState(moment().format("YYYY-MM-DD"))
  useEffect(()=>{
    getAppointmentData();
  },[])

  const getAppointmentData = async () => {
    let data = await appointmentsdata();
    if(data.status == "success"){
      setAData(data.data);
      SplashScreen.hide();
    } else {
      ToastAndroid.showWithGravityAndOffset(
        "Not able to connect with Server",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      )
    }
  }

  const testIDs = {
    menu: {
      CONTAINER: 'menu',
      CALENDARS: 'calendars_btn',
      CALENDAR_LIST: 'calendar_list_btn',
      HORIZONTAL_LIST: 'horizontal_list_btn',
      AGENDA: 'agenda_btn',
      EXPANDABLE_CALENDAR: 'expandable_calendar_btn',
      WEEK_CALENDAR: 'week_calendar_btn',
      TIMELINE_CALENDAR: 'timeline_calendar_btn',
      PLAYGROUND: 'playground_btn'
    },
    calendars: {
      CONTAINER: 'calendars',
      FIRST: 'first_calendar',
      LAST: 'last_calendar'
    },
    calendarList: {CONTAINER: 'calendarList'},
    horizontalList: {CONTAINER: 'horizontalList'},
    agenda: {
      CONTAINER: 'agenda',
      ITEM: 'item'
    },
    expandableCalendar: {CONTAINER: 'expandableCalendar'},
    weekCalendar: {CONTAINER: 'weekCalendar'}
  }


  // ========================================================

  const getFutureDates = (numberOfDays) => {
    const array = [];
    for (let index = 1; index <= numberOfDays; index++) {
      let d = Date.now();
      if (index > 8) {
        // set dates on the next month
        const newMonth = new Date(d).getMonth() + 1;
        d = new Date(d).setMonth(newMonth);
      }
      const date = new Date(d + 864e5 * index); // 864e5 == 86400000 == 24*60*60*1000
      const dateString = date.toISOString().split('T')[0];
      array.push(dateString);
    }
    return array;
  }

  const getPastDate = (numberOfDays) => {
    return new Date(Date.now() - 864e5 * numberOfDays).toISOString().split('T')[0];
  }

  
  const today = new Date().toISOString().split('T')[0];
  const fastDate = getPastDate(3);
  const futureDates = getFutureDates(12);
  const dates = [fastDate, today].concat(futureDates);

  const agendaItems = [
    {
      title: dates[0],
      data: [{hour: '12am', duration: '1h', title: 'First Yoga'}]
    },
    {
      title: dates[1],
      data: [
        {hour: '4pm', duration: '1h', title: 'Pilates ABC'},
        {hour: '5pm', duration: '1h', title: 'Vinyasa Yoga'}
      ]
    },
    {
      title: dates[2],
      data: [
        {hour: '1pm', duration: '1h', title: 'Ashtanga Yoga'},
        {hour: '2pm', duration: '1h', title: 'Deep Stretches'},
        {hour: '3pm', duration: '1h', title: 'Private Yoga'}
      ]
    },
    {
      title: dates[3],
      data: [{hour: '12am', duration: '1h', title: 'Ashtanga Yoga'}]
    },
    {
      title: dates[4],
      data: [{}]
    },
    {
      title: dates[5],
      data: [
        {hour: '9pm', duration: '1h', title: 'Middle Yoga'},
        {hour: '10pm', duration: '1h', title: 'Ashtanga'},
        {hour: '11pm', duration: '1h', title: 'TRX'},
        {hour: '12pm', duration: '1h', title: 'Running Group'}
      ]
    },
    {
      title: dates[6], 
      data: [
        {hour: '12am', duration: '1h', title: 'Ashtanga Yoga'}
      ]
    },
    {
      title: dates[7], 
      data: [{}]
    },
    {
      title: dates[8],
      data: [
        {hour: '9pm', duration: '1h', title: 'Pilates Reformer'},
        {hour: '10pm', duration: '1h', title: 'Ashtanga'},
        {hour: '11pm', duration: '1h', title: 'TRX'},
        {hour: '12pm', duration: '1h', title: 'Running Group'}
      ]
    },
    {
      title: dates[9],
      data: [
        {hour: '1pm', duration: '1h', title: 'Ashtanga Yoga'},
        {hour: '2pm', duration: '1h', title: 'Deep Stretches'},
        {hour: '3pm', duration: '1h', title: 'Private Yoga'}
      ]
    },
    {
      title: dates[10], 
      data: [
        {hour: '12am', duration: '1h', title: 'Last Yoga'}
      ]
    },
    {
      title: dates[11],
      data: [
        {hour: '1pm', duration: '1h', title: 'Ashtanga Yoga'},
        {hour: '2pm', duration: '1h', title: 'Deep Stretches'},
        {hour: '3pm', duration: '1h', title: 'Private Yoga'}
      ]
    },
    {
      title: dates[12], 
      data: [
        {hour: '12am', duration: '1h', title: 'Last Yoga'}
      ]
    },
    {
      title: dates[13], 
      data: [
        {hour: '12am', duration: '1h', title: 'Last Yoga'}
      ]
    }
  ];
  const ITEMS = agendaItems;


  const leftArrowIcon = require("../assets/Images/previous.png");
  const rightArrowIcon = require("../assets/Images/next.png");

  // ========================================================

  const selectedDateTime = (time) => {
    console.log(time)
    navigation.navigate("Book Apointment", {selectedTime: time})
  }

  // ========================================================

  return (
    <Base>
    <View style={styles.box}>
      <Text style={styles.title}>
        Make an Appointment
      </Text>
    </View>
    <CalendarProvider
      // date={"2021-05-21"}
      date={moment().format("YYYY-MM-DD")}
      onDateChanged={(date)=> setSelectedDate(date)}
      showTodayButton
    >
        <ExpandableCalendar
          minDate={moment().format("YYYY-MM-DD")}
          // minDate={"2021-05-01"}
          current={moment().format("YYYY-MM-DD")}
          testID={testIDs.expandableCalendar.CONTAINER}
          firstDay={1}
          leftArrowImageSource={leftArrowIcon}
          rightArrowImageSource={rightArrowIcon}
          animateScroll
          // closeOnDayPress={false}
          onDayPress={(day)=>{
            setSelectedDate(day.dateString)
          }}
        />
    <Card data={aData} currentDate={selectedDate} selectedDataTime={selectedDateTime} />
    </CalendarProvider>
    </Base>
  );
}

const styles = StyleSheet.create({
  title:{
    color: light.title,
    fontWeight:"800",
    fontSize: 26,
    
  },
  box: {
    marginTop: 10,
    height: 60,
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center"
  }
})

export default GAD;
