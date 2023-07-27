import {StyleSheet, View, Text, Image} from 'react-native';
import popularLogo from '../assets/images/popularLogo.png';
import theme from '../../theme';

export function Frame1() {
  return (
    <View style={styles.root}>
      <View style={styles.iPhone141}>
        <Text style={styles.aUnitOfPopularHospitalLlp}>
          A Unit of Popular Hospital LLP
        </Text>
      </View>
      <Image source={{uri: popularLogo}} style={{width: 312, height: 89}} contentFit="cover"/>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: 390,
    height: 844,
  },
  aUnitOfPopularHospitalLlp: {
    width: 240,
    height: 32,
    flexShrink: 0,
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
  },
  iPhone141: {
    width: 390,
    height: 844,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    flexShrink: 0,
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    padding: 10,
  },
  popularLogo: {
    width: 312,
    height: 89,
    flexShrink: 0,
  },
});
