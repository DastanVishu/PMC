import React from "react";
import {Text, StyleSheet, TextInput, View} from "react-native"
import { light } from "../../components/ContantsColor";
import Icon from 'react-native-vector-icons/Ionicons';

const Filed = (props) => {
    return(
        <View style={{...styles.container, height: props.containerHeight}}>
            <Text style={styles.label}>{props.placeholder}</Text>
            <TextInput 
                inputMode={props.inputMode}     
                style={
                    {
                        ...styles.text, 
                        height: props.height, 
                        borderColor: props.warning.display == "flex"? light.warning :light.inputBorder}} 
                placeholder={props.placeholder}
                textAlign={"left"}
                textAlignVertical={"top"}
                placeholderTextColor={light.placeholder}
                onChangeText={(text)=>props.onChange(text, props.name)}
            />
            <View style={{flex: 1, flexDirection: "row", display: props.warning.display}}>
                <Icon name="alert-circle" size={18} color={light.warning} />
                <Text style={styles.warningText}>{props.warning.msg}</Text>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        paddingHorizontal: 40,
        marginBottom:2
        
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
        // marginBottom: 10
    },
    warningText: {
        color: light.warning,
        fontWeight: "bold",
        fontSize: 12
    }
}) 

export default Filed