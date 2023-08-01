import {StyleSheet, View, Text, Image} from 'react-native';
import otpIcon1 from '../../assets/images/otpIcon1.png';
import theme from '../../theme';

export function IPhone141() {
  return (
    <View style={styles.root}>
      <Text style={styles.$name}>
        We have sent you access code via SMS for Mobile Verification
      </Text>
      <Text style={styles.$name2}>
        Didn’t Receive the OTP?
      </Text>
      <Text style={styles.$name3}>
        Resend Code
      </Text>
      <Image source={{uri: otpIcon1}} style={{width: 150, height: 150}} contentFit="cover"/>
      <Text style={styles.enterOtp}>
        Enter OTP
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: 390,
    height: 844,
    paddingTop: 60,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    gap: 10,
    flexWrap: 'wrap',
    boxShadow: '5px 5px 20px 5px rgba(32, 32, 32, 0.08)',
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  $name: {
    width: 234,
    height: 41,
    position: 'absolute',
    left: 78,
    top: 334,
    color: '#8D8D8D',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '20px /* 142.857% */',
  },
  $name2: {
    width: 194,
    height: 22,
    position: 'absolute',
    left: 98,
    bottom: 185,
    color: '#8D8D8D',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '20px /* 166.667% */',
  },
  $name3: {
    width: 194,
    height: 22,
    position: 'absolute',
    left: 98,
    bottom: 166,
    color: 'rgba(0, 0, 0, 0.70)',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '20px /* 166.667% */',
  },
  otpIcon1: {
    width: 150,
    height: 150,
    flexShrink: 0,
  },
  enterOtp: {
    width: 306,
    height: 33,
    flexShrink: 0,
    color: '#1BADFF',
    textAlign: 'center',
    fontFamily: 'Roboto Flex',
    fontSize: 26,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal',
  },
});
