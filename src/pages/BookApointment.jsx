import {StyleSheet, View, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { light } from '../components/ContantsColor';
import Base from "../components/pageBase";
import Filed from './components/inputFiled';
// import theme from '../../theme';

const BookApointment = ({navigation, selectedTime}) => {
  return (
    <Base>
      <ScrollView>
        <View>
          <Icon name="close-sharp" size={24} color={light.cross} />
        </View>
        <View style={styles.box}>
          <Text style={styles.title}>
            Make an Appointment
          </Text>
          <Text style={styles.title}>
           for Online Consultation
          </Text>
        </View>

        <View style={styles.container}>
          <Filed placeholder="Name" height={48} inputMode="text" />
          <Filed placeholder="Email Address" height={48} inputMode="email" />
          <Filed placeholder="Message" height={132} inputMode="text" />
        </View>

      </ScrollView>
    </Base>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop: 60,
    // backgroundColor: "red"

  },
  title:{
    color: light.title,
    fontWeight:"800",
    fontSize: 26,
  },
  box: {
    // flex: 1,
    marginTop: 10,
    // height: 60,
    justifyContent: "center",
    alignItems: "center"
  }
})




export default BookApointment;