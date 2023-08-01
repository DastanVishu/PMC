import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Base from "../components/pageBase2";
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { light } from '../components/ContantsColor';
import Spinner from 'react-native-loading-spinner-overlay';
import CustomButton from './components/button';
import { useRoute } from '@react-navigation/native';

const OtpPage = () => {
  const [spin, setSpin] = useState(false);
  const route = useRoute();

  const back = () => {
    navigation.goBack()
  }

  const onSubmit = () => {

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
          // onCodeChanged = {code => { this.setState({code})}}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled = {(code => {
              console.log(`Code is ${code}, you are good to go!`)
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
              onPress={onSubmit}
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
    borderColor: light.themeColor,
  },
});

export default OtpPage;