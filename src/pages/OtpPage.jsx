import React, {useState} from 'react';
import {
  StyleSheet, 
  View, 
  Text, 
  Image, 
  ScrollView,
  ToastAndroid
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Base from "../components/pageBase2";
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { light } from '../components/ContantsColor';
import Spinner from 'react-native-loading-spinner-overlay';
import CustomButton from './components/button';
import { useRoute } from '@react-navigation/native';
import { bookAppointment, savebookedAppointment } from '../api/publicApi'; 

const OtpPage = ({navigation}) => {
  const [spin, setSpin] = useState(false);
  const [wOtp, setWOtp] = useState(false)
  const [otp, setotp] = useState("")
  const route = useRoute();

  const back = () => {
    navigation.goBack()
  }

  const onSubmit = async () => {
    setSpin(true)
    if(route.params && otp == route.params.otp){
      let res = await savebookedAppointment({appointment: route.params.data})
      if(res){
        setSpin(false);
        navigation.replace("Thankyou",{
          bookingDate: route.params.data.appointment_start_date
        })
      } else {
        ToastAndroid.showWithGravityAndOffset(
          "Samething went wrong please try later",
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50,
        )
        setSpin(false);
      }
      setWOtp(true)
    } else {
      setSpin(false);
      setWOtp(true)
      ToastAndroid.showWithGravityAndOffset(
        "Please provide valid OTP",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      )
    }
  }

  const reSend = async () => {
    if(route.params && route.params.resendData){
      setSpin(true)
      let res = await bookAppointment(route.params.resendData);
      if(Array.isArray(res) && res[0].status == "otp"){
        setSpin(false)
        ToastAndroid.showWithGravityAndOffset(
          "OTP Sent",
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50,
        )
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
        "Please provide valid Email or Phone number",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      )
    }
  }

  return (
    <Base>
      <Spinner visible={spin} />
      <ScrollView>
        <View style={styles.crossSection}>
          <CustomButton 
            text={<Icon name="chevron-back" size={24} color={light.cross} />} 
            buttonStyle={{
              height: 45,
              width: 55,
              backgroundColor: "#F50C0C00"
            }}
            onPress={back}
          />
        </View>

        <View style={styles.Cont}>
          <Image style={styles.image} source={require("../assets/Images/otpIcon1.png")} />
          <Text style={styles.title}>Enter OTP</Text>

          <View style={styles.box}>
            <Text style={styles.text}>We have sent you access code via SMS for Mobile Verification</Text>
          </View>
          
        

        <OTPInputView
          style={{width: 210, height: 48, marginTop: 10, marginBottom:100}}
          pinCount={4}
          
          // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          onCodeChanged = {code => { setWOtp(false); setotp(code) }}
          autoFocusOnLoad
          codeInputFieldStyle={{
            ...styles.underlineStyleBase,
            borderColor: !wOtp?light.borderColor : light.warning
          }}
          codeInputHighlightStyle={{
            borderColor: !wOtp?light.themeColor: light.warning
          }}
          // codeInputFieldStyle={}
          onCodeFilled = {(code => {
            setotp(code)
          })}
          
        />
          <CustomButton 
            text={"VERIFY"} 
            buttonStyle={{
              height: 30,
              width: 136,
              backgroundColor: light.otp,
              v: 1,
              h: 1
            }}
            onPress={onSubmit}
            textStyle={styles.buttontext}
          />
          <View style={{marginTop: 80}}>
            <CustomButton 
              text={
                <View>
                  <Text style={styles.text2}>Didn't Receive the OTP?</Text>
                  <Text style={styles.text3}>Resend Code</Text>
                </View>
              } 
              buttonStyle={{
                height: 50,
                width: 194,
                // backgroundColor: light.otp,
                v: 1,
                h: 1
              }}
              onPress={reSend}
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
    lineHeight: 20,
    fontFamily: "Roboto",
    fontSize: 12,
    color: light.cross,
    textAlign: "center"
  },
  text3: {
    lineHeight: 20,
    fontFamily: "Roboto",
    fontSize: 12,
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
    marginTop: 60,
    height: 41,
    width: 234,
    justifyContent: "center",
    alignItems: "center"
    
  },

  title:{
    color: light.otp,
    fontWeight:"800",
    fontSize: 26,
  },

  image: {
    width: 150,
    height: 150
  },
  crossSection: {
    height: 60,
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
    
  },
});

export default OtpPage;