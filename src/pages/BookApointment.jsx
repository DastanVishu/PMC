import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView, ToastAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { light } from '../components/ContantsColor';
import Base from "../components/pageBase2";
import Filed from './components/inputFiled';
import CustomButton from './components/button';
import { bookAppointment } from '../api/publicApi'; 
import { useRoute } from '@react-navigation/native';
import Spinner from 'react-native-loading-spinner-overlay';
import moment from 'moment';
const BookApointment = ({navigation}) => {
  const route = useRoute();
  const [war, setWarning] = useState({
    name: {
      value: "",
      display: "none",
      msg: "Enter your Name"
    },
    email: {
      value:"",
      display: "none",
      msg: "Enter valid email address"
    },
    phone: {
      value:"",
      display: "none",
      msg: "Enter your phone number"
    },
    msg: {
      value:"",
      display: "none",
      msg: "testing perpose"
    },
  });

  const [spin, setSpin] = useState(false)

  const back = () => {
    navigation.goBack()
  }

  const handleChanges = (data, name) => {
    let d = {...war};
    d[name].value = data;
    if(d[name].value == "" && name !=="msg"){
      d[name].display = "flex";
    } else {
      d[name].display = "none";
    }

    if(name == "email"){
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      if(reg.test(d[name].value) === false){
        d[name].display = "flex";
      }
    }

    setWarning(d);
  }

  const onSubmit = async () => {
    let a = {...war}
    if(a.name.value && a.email.value && a.phone.value){
      let data = {
        email: a.email.value,
        message: a.msg.value,
        name: a.name.value,
        number: a.phone.value
      }
      setSpin(true)
      let res = await bookAppointment(data);

      if(Array.isArray(res) && res[0].status == "otp"){
        setSpin(false)
        navigation.navigate("OTP", {data: {
        appointment_end_date: moment(route.params.selectedTime, "YYYY-MM-DD h:mm A").add(30, "minutes").format("YYYY-MM-DD h:mm A"),
        appointment_start_date: route.params?.selectedTime,
        code: res[1].otp,
        email: a.email.value,
        name: a.name.value,
        number: a.phone.value,
        message: a.msg.value,
        resourceId: route.params?.resourceId
        }, otp: res[1].otp, time: route.params?.selectedTime})
        // saveAppointmentData
      } else {
        ToastAndroid.showWithGravityAndOffset(
          "Please provide valid Email or Phone number",
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50,
        )
        setSpin(false)
      }
    } else {
      ToastAndroid.showWithGravityAndOffset(
        "Empty Form cannot be submit",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      )
      setSpin(false)
    }
  }

  return (
    <Base>
    <Spinner visible={spin} />
      <ScrollView>
        <View style={styles.crossSection}>
          <CustomButton 
            text={<Icon name="close-sharp" size={24} color={light.cross} />} 
            buttonStyle={{
              height: 45,
              width: 55,
              backgroundColor: "#F50C0C00"
            }}
            onPress={back}
          />
        </View>
        <View style={styles.box}>
          <Text style={styles.title}>
            Make an Appointment
          </Text>
          <Text style={styles.title}>
           for Online Consultation
          </Text>

          <Text style={styles.title2}>
            {route.params?.selectedTime}
          </Text>

        </View>

        <View style={styles.container}>
          <Filed 
            warning={war.name} 
            containerHeight={95}
            name="name"
            placeholder="Name" 
            height={48} 
            inputMode="text"
            onChange={handleChanges}
          />
          <Filed 
            warning={war.email} 
            containerHeight={95} 
            name="email"
            placeholder="Email Address" 
            height={48} 
            inputMode="email" 
            onChange={handleChanges}
          />
          <Filed 
            warning={war.phone} 
            containerHeight={95} 
            name="phone"
            placeholder="Phone Number" 
            height={48} 
            inputMode="numeric"
            onChange={handleChanges} 
          />
          <Filed warning={war.msg} 
            containerHeight={187} 
            name="msg"
            placeholder="Message" 
            height={132} 
            inputMode="text" 
            onChange={handleChanges}
          />
        </View>

        <View style={styles.box2}>
          <CustomButton 
            text={"Get Appointment"} 
            buttonStyle={{
              height: 48,
              width: 187,
              backgroundColor: light.button
            }}
            onPress={onSubmit}
            textStyle={styles.buttontext}
          />
        </View>
      </ScrollView>
    </Base>
  );
}

const styles = StyleSheet.create({
  crossSection: {
    height: 60,
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingHorizontal: 10
  },
  container:{
    marginTop: 40,
  },
  title:{
    color: light.title,
    fontWeight:"800",
    fontSize: 26,
  },
  title2:{
    color: light.title,
    fontWeight:"800",
    fontSize: 16,
  },

  box: {
    justifyContent: "center",
    alignItems: "center"
  },
  box2: {
    justifyContent: "center",
    alignItems: "center"
  },
  buttontext: {
    color: "#FFFFFF",
    lineHeight: 28,
    fontFamily: "Roboto Flex",
    fontWeight: "bold",
    fontSize: 16
}
})




export default BookApointment;