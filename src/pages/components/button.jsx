import React from "react";
import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import { light } from "../../components/ContantsColor";

const CustomButton = (props) => {
    return(
        <TouchableOpacity 
        style={
            {
                ...styles.container, 
                height: props.buttonStyle.height,
                width: props.buttonStyle.width,
                backgroundColor: props.buttonStyle.backgroundColor
            }
        } onPress={() => props.onPress()} >
            <Text style={props.textStyle} >{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 15,
        paddingVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    }
})

export default CustomButton;

