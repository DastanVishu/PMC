import React from 'react';
import { StyleSheet, View, ImageBackground, TouchableWithoutFeedback, Keyboard, SafeAreaView, ScrollView} from 'react-native';
// import { dark } from '../assets/ContantsColor';

const Base = ({children}) => {

    return (
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
        <View style={styles.container}>
            <SafeAreaView>
                <ScrollView>
                    {children}
                </ScrollView>
            </SafeAreaView>
        </View>
        </TouchableWithoutFeedback>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
        // alignItems: 'center', 
        // justifyContent: 'center'
    },
    image: {
        flex: 1,
        justifyContent: 'center'
    }
})

export default Base