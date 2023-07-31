import React from "react";
import {Text, StyleSheet, TextInput, View} from "react-native"
import { light } from "../../components/ContantsColor";

const Filed = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.label}>{props.placeholder}</Text>
            <TextInput 
                inputMode={props.inputMode}
                style={{...styles.text, height: props.height}} 
                placeholder={props.placeholder}
                textAlign={"left"}
                textAlignVertical={"top"}
                placeholderTextColor={light.placeholder}
            />
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        // height: 84,
        width: "100%",
        paddingHorizontal: 40,
        marginBottom:15
        
    },
    label: {
        color: light.text,
        fontSize: 14,
        lineHeight: 28,
        paddingStart: 2,
        fontFamily: "Roboto"
        
    },
    text: {
        color: light.text,
        borderWidth: 1,
        borderColor: light.inputBorder,
        paddingHorizontal:10,
        paddingVertical: 15,
        borderRadius: 5,
        backgroundColor: light.commonWhite,
        marginBottom: 10
    },
}) 

export default Filed