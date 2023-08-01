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


  const leftArrowIcon = require("../assets/Images/previous.png");
  const rightArrowIcon = require("../assets/Images/next.png");

  // ========================================================

  const selectedDateTime = (time) => {
    let cdate = moment();
    let endtime = moment(time, "YYYY-MM-DD h:mm A");
    if(endtime.diff(cdate, "minutes") > 0){
      navigation.navigate("Book Apointment", {selectedTime: time})
    } else {
      ToastAndroid.showWithGravityAndOffset(
        "Cannot book an appointment in the past",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      )
    }
    // 
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
