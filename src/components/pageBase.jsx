import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableWithoutFeedback, Keyboard, SafeAreaView, ScrollView} from 'react-native';
// import { dark } from '../assets/ContantsColor';
import LinearGradient from 'react-native-linear-gradient';
const Base = ({children}) => {

    return (
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
            
                <View style={styles.container}>
                <LinearGradient 
                    style={styles.LG} 
                    colors={['#FFFFFF', '#2FA5EB']}
                    start={{ x: 0, y: 0 }} 
                    end={{ x: 0, y: 4 }}
                >
                    <SafeAreaView>
                   
                        {/* <ScrollView> */}
                            {children}     
                        {/* </ScrollView> */}
                       
                    </SafeAreaView>
                    </LinearGradient>
                </View>
        </TouchableWithoutFeedback>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    LG: {
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Base