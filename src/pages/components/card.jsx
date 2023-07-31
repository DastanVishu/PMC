import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ToastAndroid } from 'react-native';
import { light } from '../../components/ContantsColor';
import { Shadow } from 'react-native-shadow-2';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
const Card = (props) => {
    const [rTime, setRTime] = useState([])

    useEffect(()=>{
        createSlotDayWise()
    },[props.data, props.currentDate]);

    const createSlotDayWise = () => {
        // console.log(props.data);
        let d = props.data
        let startTime = "";
        let endTime = "";
        let updatedTime = "";
        let arrayData = []
        if(d){
            if(d.users && d.users.length){
                startTime = d.timinghours[0].timingHours[0].start;
                updatedTime = d.timinghours[0].timingHours[0].start;
                endTime = d.timinghours[0].timingHours[0].end;
                // console.log(startTime);
                // console.log(endTime)

                while(updatedTime !== endTime){
                    arrayData.push({
                        dateTime: props.currentDate+" "+moment(updatedTime, 'HH:mm').format("h:mm A"),
                        timeSlot: moment(updatedTime, 'HH:mm').format("h:mm A"),
                        data: showSlotData(d.appointments, moment(updatedTime, 'HH:mm').format("h:mm A"))
                    })
                    updatedTime = moment(updatedTime, 'HH:mm').add(30, "minutes").format("HH:mm");
                }
    
            }
            setRTime(arrayData)
        }
        
    }

    const showSlotData = (appointments = [], time) => {
        let a = {}
        // console.log("ss",time)
        if(props.currentDate){
            let dt = props.currentDate+" "+time
            const filtered = appointments.filter(item => {
                return item.start === dt
            });
            if(filtered.length) a = filtered[0]
        }
        // console.log(a)
        return a
    }

    const card = ({item}) => {
        return (
            <TouchableOpacity 
                style={
                    Object.keys(item.data).length?
                    {...styles.cardBody, backgroundColor: light.full}
                    :
                    styles.cardBody
                }
                onPress={()=> {
                    if(Object.keys(item.data).length){

                        ToastAndroid.showWithGravityAndOffset(
                            "This slot is already booked",
                            ToastAndroid.LONG,
                            ToastAndroid.BOTTOM,
                            25,
                            50,
                        )

                    } else {
                        props.selectedDataTime(item.dateTime)
                    }
                }}
            >
                <View style={styles.showTime}>
                    <Text style={
                        Object.keys(item.data).length?
                        styles.timeText:{...styles.timeText, 
                        color: light.text
                    }}>{item.timeSlot}</Text>
                </View>
                <View style={styles.showBooking}>
                    <Text style={
                        Object.keys(item.data).length?
                        styles.bookingSlot:
                        {...styles.bookingSlot, color: light.text}
                        }>
                        { Object.keys(item.data).length?"Booked": "Slot Available"}
                        </Text>
                </View>
            </TouchableOpacity>
        )
        
    }

    return (
        
            <View style={styles.container}>
                <Shadow 
                    style={{width: "100%"}} 
                    distance={6} 
                    startColor={'#00000020'} 
                    finalColor={'#00000000'} 
                    children={'#ffffffff'}
                    offset={[5, 4]}
                >     
                <LinearGradient 
                    style={styles.LG} 
                    colors={['#FFFFFF', '#2FA5EB']}
                    start={{ x: 0, y: 0 }} 
                    end={{ x: 0, y: 4 }}
                >
                    <FlatList 
                        data={rTime}
                        renderItem={(item) => card(item)}
                        keyExtractor={ item=> item.timeSlot}  
                    />
                    </LinearGradient>
                </Shadow>         
            </View>
       
    )

}

const styles = StyleSheet.create({
    container: {
        marginStart: 10,
        marginEnd: 10,
        borderWidth: 1,
        borderColor: light.inputBorder,
    },
    cardBody: {
        flex: 1,
        flexDirection: "row",
        height: 40
    },
    showTime: {
        flex: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: light.inputBorder,
        justifyContent: "center",
        alignItems: "center",
    },
    timeText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    bookingSlot:{
        fontSize: 14,
        // fontWeight: "bold",
    },
    showBooking: {
        flex: 4,
        borderBottomWidth: 1,
        borderColor: light.inputBorder,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default Card;