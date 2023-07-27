import {StyleSheet, View, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import Base from "../components/pageBase";
// import theme from '../../theme';

const LoadingPage = () => {
  return (
    

      <View style={styles.bgStyle}>

        <LinearGradient 
          colors={['#FDFDFD', '#2FA5EB']} 
          start={{ x: 0, y: 0 }} end={{ x: 0, y: 4 }}
          style={styles.linearGradient}
        >
          <Image source={require("../assets/Images/popularLogo.png")} style={{width: 312, height: 89}} contentFit="cover"/>
          <View style={styles.iPhone141}>
            <Text style={styles.aUnitOfPopularHospitalLlp}>
              A Unit of Popular Hospital LLP
            </Text>
          </View>
        </LinearGradient>
      </View>

  );
}

const styles = StyleSheet.create({


  linearGradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },


  bgStyle: {
    flex: 1,
    
    backgroundColor: "white"
    // linear-gradient(180deg, rgba(47, 165, 235, 0) 61%, #2FA5EB 85%), linear-gradient(0deg, rgba(255, 255, 255, 0.80) 0%, rgba(255, 255, 255, 0.80) 100%)
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
    
  },
  iPhone141: {
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

export default LoadingPage
