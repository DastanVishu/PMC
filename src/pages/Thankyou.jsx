import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Image, ScrollView, BackHandler, Alert} from 'react-native';
import Base from "../components/pageBase2";

import { light } from '../components/ContantsColor';
import Spinner from 'react-native-loading-spinner-overlay';
import CustomButton from './components/button';
import { useRoute } from '@react-navigation/native';
import moment from 'moment';
// import theme from '../../theme';

const Thankyou = ({navigation}) => {
  const [bookingTime, setBookingTime] = useState("")
  const [spin, setSpin] = useState(false);
  const route = useRoute();

  useEffect(()=>{
    if(route.params && route.params.bookingDate){
      setBookingTime(route.params.bookingDate);
    }
  },[])

  const back = () => {
    // navigation.navigate("Get Apointment Date");
    navigation.replace("Get Apointment Date")
  }

  return (
    <Base>
      <Spinner visible={spin} />
      <ScrollView>
        <View style={styles.crossSection}>
        </View>

        <View style={styles.Cont}>
          <Image style={styles.image} source={require("../assets/Images/smiling.png")} />
          <Text style={styles.title}>Thank you!</Text>

          <View style={styles.box}>
            <Text style={styles.text}>You have booked your appointment on</Text>
          </View>

          <View style={styles.box2}>
            <Text style={styles.text2}>{moment(bookingTime, "YYYY-MM-DD h:mm A").format("MMMM D, YYYY dddd h:MM A")}</Text>
          </View>
          
        



          <View style={{marginTop: 150}}>
            <CustomButton 
              text={
                <View>
                  <Text style={styles.text3}>Book another Appointment</Text>
                </View>
              } 
              buttonStyle={{
                height: 50,
                width: 194,
                // backgroundColor: light.otp,
                v: 1,
                h: 1
              }}
              onPress={back}
              textStyle={styles.buttontext}
            />
          </View>
        </View>
      </ScrollView>
    </Base>
  );
}

const styles = StyleSheet.create({
  text: {
    lineHeight: 20,
    fontFamily: "Roboto",
    fontSize: 14,
    color: light.cross,
    textAlign: "center"
  },
  text2: {
    lineHeight: 30,
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "bold",
    color: light.title2,
    textAlign: "center"
  },
  text3: {
    lineHeight: 20,
    fontFamily: "Roboto",
    fontSize: 13,
    color: light.cross,
    fontWeight: "bold",
    textAlign: "center"
  },
  Cont: {
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    // backgroundColor: "red",
    marginTop: 30,
    height: 41,
    width: 154,
    justifyContent: "center",
    alignItems: "center"
    
  },
  box2: {
    // backgroundColor: "red",
    marginTop: 60,
    height: 63,
    width: 254,
    justifyContent: "center",
    alignItems: "center"
    
  },

  title:{
    marginTop:20,
    color: light.otp,
    fontWeight:"800",
    fontSize: 26,
  },

  image: {
    width: 83.05,
    height: 83.05
  },
  crossSection: {
    height: 100,
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 0
  },
  borderStyleBase: {
    width: 45,
    height: 48,
    // borderColor: light.themeColor
  },
  borderStyleHighLighted: {
    borderColor: light.themeColor,
  },
  underlineStyleBase: {
    width: 45,
    height: 48,
    borderWidth: 1,
    color: light.text,
    fontSize: 18,
    borderColor: light.borderColor,
  },
  underlineStyleHighLighted: {
    borderColor: light.themeColor,
  },
});

export default Thankyou;